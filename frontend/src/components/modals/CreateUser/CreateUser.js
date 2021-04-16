import React,{Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import GroupButton from '../../buttons/GroupButton/GroupButton'
import './index.css';
import InputMask from "react-input-mask";
import ViewUser from '../ViewUser/ViewUser'
import {CheckInput} from '../../../functions/verifyDatas/verifyDatas'
import { createUser, updateUser, deleteUser } from '../../../api/users/apiUsers';
import Swal from 'sweetalert2'

export default class CreateUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            typeChecked: "Pessoa física",
            typeModuloAgricultura: '',
            typeModuloPecuaria: '',
            deteleUser: false,

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setTypeChecked = this.setTypeChecked.bind(this)
        this.setTypeModuloAgricultura = this.setTypeModuloAgricultura.bind(this)
        this.setTypeModuloPecuaria = this.setTypeModuloPecuaria.bind(this)
        this.setModulos = this.setModulos.bind(this)
        this.verification = this.verification.bind(this)
        this.alertMessage = this.alertMessage.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.data !== prevProps.data) {
            this.setState({data: this.props.data})
            if(this.props.userDataView === false){
                if(this.props.data.pessoa !== undefined){
                    this.setTypeChecked(this.props.data.pessoa)
                    this.setModulos(this.props.data.modulos)
                }
            } 
        }
      }

    handleChange(event) {
        const data = {...this.state.data}
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : 
                    (target.name === "senha" || target.name === "confirmacaoSenha") ? target.value : target.value.toUpperCase();
        const name = target.name;
        data[name] = value
        this.setState({
            data: data
        });
    }

    handleSubmit = (data, callback) => (event) => {
        event.preventDefault()
        callback(data)
     }

    setModulos(modulo){
        switch (modulo) {
            case "A - P":
                    this.setState({typeModuloAgricultura: "A", typeModuloPecuaria: "P"});
                break;
        
            case "A":
                this.setState({typeModuloAgricultura: "A", typeModuloPecuaria: ""});
                break;
        
            case "P":
                this.setState({typeModuloAgricultura: "", typeModuloPecuaria: "P"});
                break;

            default:
                break;
        }
    }

    setTypeModuloPecuaria(){
        const pecuaria = this.state.typeModuloPecuaria
        if(pecuaria === "P"){
            this.setState({typeModuloPecuaria: ""})
        }else {
            this.setState({typeModuloPecuaria: "P"})
        }
    }
    setTypeModuloAgricultura(){
        const agricultur = this.state.typeModuloAgricultura
        if(agricultur === "A"){
            this.setState({typeModuloAgricultura: ""})
        }else {
            this.setState({typeModuloAgricultura: "A"})
        }
    }

    setTypeChecked(value){
        this.setState({typeChecked: value})
    }


    alertMessage(value, message){
        if(value){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: message,
                showConfirmButton: false,
                timer: 2000
              })
        }else{
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 1500
              })
        }
    }

    createOrUpdate(data){
        CheckInput(data).then(e => {
            if(!e.Status){
                this.alertMessage(false, e.Message)
            }else{
                delete data.confirmacaoSenha
                if(data.id){
                    alert("Alterando usuário")
                    updateUser(data).then(res => {
                        if(res){
                            this.alertMessage(true, 'Usuário alterado com sucesso')
                            setTimeout(()=> window.location = '/', 2255)
                        }else{
                            this.alertMessage(false, 'Houve um erro ao tentar alterar usuário!')
                        }
                    })
                    console.log(data)
                }else {
                    createUser(data).then(res =>{
                        if(res){
                            this.alertMessage(true, 'Usuário cadastrado com sucesso')
                            setTimeout(()=> window.location = '/', 2255)
                        }else{
                            this.alertMessage(false, 'Houve um erro ao tentar cadastrar usuário!')
                        }
                    })
                }
            }
        })
    }

    verification(data){
        if(this.state.typeModuloAgricultura ==="A" && this.state.typeModuloPecuaria==="P"){ data.modulos = "A - P"}
        if(this.state.typeModuloAgricultura ==="" && this.state.typeModuloPecuaria==="P"){ data.modulos = "P"}
        if(this.state.typeModuloAgricultura ==="A" && this.state.typeModuloPecuaria===""){ data.modulos = "A"}
        if(this.state.typeModuloAgricultura ==="" && this.state.typeModuloPecuaria===""){ 
            data.modulos=""
            this.setState({inputError:{checkbox: true}})
        } else {
            this.setState({inputError:{checkbox: false}})
        }
        
        if(data.pessoa === undefined ){ data.pessoa = "Pessoa física"}
        
        if(data.pessoa === "Pessoa física"){
            data.nomeFantasia = null;
            if(
                data.email && data.telefone && data.documento && data.senha && 
                data.confirmacaoSenha && data.cep && data.endereco && data.numero &&
                data.uf && data.cidade && data.bairro && data.modulos && data.nome &&
                data.sobrenome && data.dataDeNascimento
            ){

                this.createOrUpdate(data);

            } else{
                this.alertMessage(false, 'Preencha todos os campos!')
            }
        } else{
            if(
                data.email && data.telefone && data.documento && data.senha && 
                data.confirmacaoSenha && data.cep && data.endereco && data.numero &&
                data.uf && data.cidade && data.bairro && data.modulos && data.nome &&
                data.nomeFantasia
            ){
                data.sobrenome = null;
                data.dataDeNascimento = "00/00/0000";

                this.createOrUpdate(data);

            } else{
                this.alertMessage(false, 'Preencha todos os campos!')
            }
        }


        delete data.agricultura;
        delete data.pecuaria;
    }

    DeleteUser(id){
        deleteUser(this.state.data.id).then(res=>{
            if(res){
                this.alertMessage(true, 'Usuário excluído com sucesso')
                setTimeout(()=> window.location = '/', 2255)
            }else{
                this.alertMessage(false, 'Houve um erro ao tentar excluir o usuário!')
            }
        })
    }
    

    renderModaalCreateUser(data) {
        return(
            <>
                <form>
                        {/* <CreateUser handleChange={handleChange}/> */}
                        <div className="title-createUser">
                                <span>Tipo:</span>
                            <div>
                                <input checked={this.state.typeChecked === "Pessoa física" ? true : false } type="radio" id="radio-Pessoafisica" onChange={this.handleChange} onClick={()=>{this.setTypeChecked("Pessoa física")}} name="pessoa"  value="Pessoa física"/>
                                <label htmlFor="radio-Pessoafisica" >Pessoa física</label>
                            </div>
                            <div>
                                <input checked={this.state.typeChecked !== "Pessoa física" ? true : false } type="radio" id="radio-Pessoajuridica" onChange={this.handleChange} onClick={()=>this.setTypeChecked("Pessoa Jurídica")} name="pessoa"  value="Pessoa jurídica" />
                                <label htmlFor="radio-Pessoajuridica" >Pessoa jurídica</label>
                            </div>
                        </div>
                        {this.state.typeChecked === "Pessoa física" ? (
                            <>
                            <div className={'form-group'}>
                                <input type="text"  onChange={this.handleChange} placeholder="Nome" name="nome" value={data.nome ? data.nome : ''} />
                                <input type="text"  onChange={this.handleChange} placeholder="Sobrenome" name="sobrenome" value={data.sobrenome ? data.sobrenome : ''}/>
                            </div>
                            <div className={'form-group'}>
                                <InputMask mask="(99) 9 99999999" placeholder={"telefone"} name={"telefone"} onChange={this.handleChange} value={data.telefone ? data.telefone : ''}/>
                                <input type="email" onChange={this.handleChange} placeholder="E-mail" name="email" value={data.email ? data.email : ''}/>
                            </div>
                            <div className={'form-group'}>
                                <InputMask mask="999.999.999-99"  placeholder={"CPF"} name={"documento"} onChange={this.handleChange} value={data.documento ? data.documento : ''}/>
                                <InputMask mask="99/99/9999"  placeholder={"Data de Nascimento"} name={"dataDeNascimento"} onChange={this.handleChange} value={data.dataDeNascimento ? data.dataDeNascimento : ''}/>
                            </div>
                            </>
                        ) : (
                            <>
                            <div className="form-group">
                                <input type="text"  onChange={this.handleChange} placeholder="Razão Social" name="nome" value={data.nome ? data.nome : ''}/>
                            </div>
                            <div className="form-group">
                                <InputMask mask="99.999.999/9999-99"  placeholder={"CNPJ"} name={"documento"} onChange={this.handleChange} value={data.documento ? data.documento : ''}/>
                                <input type="text"  onChange={this.handleChange} placeholder="Nome fantasia" name="nomeFantasia" value={data.nomeFantasia ? data.nomeFantasia : ''}/>
                            </div>
                            <div className="form-group">
                                <InputMask mask="(99) 9 99999999"  placeholder={"telefone"} name={"telefone"} onChange={this.handleChange} value={data.telefone ? data.telefone : ''}/>
                                <input type="text"  onChange={this.handleChange} placeholder="E-mail" name="email" value={data.email ? data.email : ''}/>
                            </div>
                            </>
                        )}
                        <>
                            <div className="form-group">
                                <input type="password"  onChange={this.handleChange} placeholder="Senha" name="senha" value={data.senha ? data.senha : ''}/>
                                <input type="password"  onChange={this.handleChange} placeholder="Confirmar senha" name="confirmacaoSenha" value={data.confirmacaoSenha ? data.confirmacaoSenha : ''}/>
                            </div>
                            <div className="form-group">
                                <InputMask mask="999999-99"  placeholder={"CEP"} name={"cep"} onChange={this.handleChange} value={data.cep ? data.cep : ''}/>
                                <input type="text" onChange={this.handleChange} placeholder="Endereço" name="endereco" value={data.endereco ? data.endereco : ''}/>
                                <input type="number"  onChange={this.handleChange} placeholder="Número" name="numero" value={data.numero ? data.numero : ''}/>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={this.handleChange} placeholder="UF" name="uf" value={data.uf ? data.uf : ''}/>
                                <input type="text" onChange={this.handleChange} placeholder="Cidade" name="cidade" value={data.cidade ? data.cidade : ''}/>
                                <input type="text" onChange={this.handleChange} placeholder="Bairro" name="bairro" value={data.bairro ? data.bairro : ''}/>
                            </div>
                            <div className="last-checkbox">
                                <span>Atuação:</span>
                                <div>
                                    <input type="checkbox" checked={this.state.typeModuloAgricultura === "A" ? true : false} id="CheckBox-agricultura" onChange={this.handleChange} onClick={()=>{this.setTypeModuloAgricultura()}} name="agricultura" value="A" />
                                    <label htmlFor="CheckBox-agricultura">Agricultura</label>
                                    <input type="checkbox" checked={this.state.typeModuloPecuaria === "P" ? true : false} id="CheckBox-pecuaria" onChange={this.handleChange} onClick={()=>{this.setTypeModuloPecuaria()}} name="pecuaria" value="P"/>
                                    <label htmlFor="CheckBox-pecuaria">Pecuária</label>
                                </div>
                            </div>
                        </>
                    </form>
            </>
        )
    }

    render(){
        // this.test2(this.props.data.id)
        return(
            <Modal
                id="modalCreateUser"
                show={this.props.show}
                onHide={this.props.onHide}
            >
                 <Modal.Header closeButton={this.props.closeButton}>
                   {this.props.userDataDelete && (<h2 className="title-modalDelete">Confirme a exclusão</h2>)}
                   {this.props.userDataView && (<h2>Detalhes do usuário</h2>)}
                </Modal.Header>
                <Modal.Body>
                    {!this.props.userDataView && !this.props.userDataDelete && (
                        this.renderModaalCreateUser(this.state.data)
                    )}
                    {this.props.userDataView && !this.state.deteleUser && !this.props.userDataDelete ? (
                        <>
                            <ViewUser data={this.props.data}/>
                        </>
                    ):(null)}
                    {this.props.userDataDelete  ?  (
                        <>
                            <h3 className="body-modalDelete">Deseja realmente excluir o usuário?</h3>
                        </>
                    ):(null)}
                </Modal.Body>
                <Modal.Footer>
                    <GroupButton
                        ButtonCancel={this.props.userDataView ? this.props.handleDelete : this.props.handleClose} 
                        ButtonSubmit={
                            this.props.userDataView && !this.state.deteleUser ? this.props.handleClose : 
                            this.state.deteleUser || this.props.userDataDelete ? (e)=>{e.preventDefault();this.DeleteUser('95')} : 
                            this.handleSubmit(this.state.data, this.verification)}
                        ValueButtonCancel={this.props.userDataView && !this.state.deteleUser ? "EXCLUIR" : "CANCELAR"}
                        ValueButtonSubmit={this.props.userDataView && !this.state.deteleUser ? "VOLTAR" : "CONFIRMAR"}>
                    </GroupButton>
                </Modal.Footer>
            </Modal>
        )
    }
}