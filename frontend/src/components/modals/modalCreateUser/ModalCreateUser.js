import React,{Component} from 'react'
import Modal from 'react-bootstrap/Modal'
import GroupButton from '../../buttons/GroupButton/GroupButton'
import './index.css';
import InputMask from "react-input-mask";


export default class ModalCreateUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            typeChecked: "Pessoa física",
            typeModuloAgricultura: '',
            typeModuloPecuaria: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setTypeChecked = this.setTypeChecked.bind(this)
        this.setTypeModuloAgricultura = this.setTypeModuloAgricultura.bind(this)
        this.setTypeModuloPecuaria = this.setTypeModuloPecuaria.bind(this)
        this.setModulos = this.setModulos.bind(this)
        this.test = this.test.bind(this)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.data !== prevProps.data) {
            this.setState({data: this.props.data})
            if(this.props.data.pessoa !== undefined){
                this.setTypeChecked(this.props.data.pessoa)
                this.setModulos(this.props.data.modulos)
            }
        }
      }

    handleChange(event) {
        const data = {...this.state.data}
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        data[name] = value
        this.setState({
            data: data
        });
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

    handleSubmit = (data, callback) => (event) => {
       event.preventDefault()
       callback(data)
    }

    setTypeChecked(value){
        this.setState({typeChecked: value})
    }

    test(p){
        if(p.pessoa === undefined ){ p.pessoa = "Pessoa física"}
        if(p.pessoa === "Pessoa física"){
            delete p.nomeFantasia;
            delete p.cnpj;
        }else{
            delete p.sobrenome;
            delete p.cpf;
        }

        console.log(p)
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
                                <input type="text" onChange={this.handleChange} placeholder="Nome" name="nome" value={data.nome ? data.nome : ''} />
                                <input type="text" onChange={this.handleChange} placeholder="Sobrenome" name="sobrenome" value={data.sobrenome ? data.sobrenome : ''}/>
                            </div>
                            <div className={'form-group'}>
                                <InputMask mask="(99) 99999-9999" placeholder={"telefone"} name={"telefone"} onChange={this.handleChange} value={data.telefone ? data.telefone : ''}/>
                                <input type="email" onChange={this.handleChange} placeholder="E-mail" name="email" value={data.email ? data.email : ''}/>
                            </div>
                            <div className={'form-group'}>
                                <InputMask mask="999.999.999-99" placeholder={"CPF"} name={"documento"} onChange={this.handleChange} value={data.documento ? data.documento : ''}/>
                                <InputMask mask="99/99/9999" placeholder={"Data de Nascimento"} name={"dataDeNascimento"} onChange={this.handleChange} value={data.dataDeNascimento ? data.dataDeNascimento : ''}/>
                            </div>
                            </>
                        ) : (
                            <>
                            <div className="form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Razão Social" name="nome" value={data.nome ? data.nome : ''}/>
                            </div>
                            <div className="form-group">
                                <InputMask mask="99.999.999/9999-99" placeholder={"CNPJ"} name={"documento"} onChange={this.handleChange} value={data.documento ? data.documento : ''}/>
                                <input type="text" onChange={this.handleChange} placeholder="Nome fantasia" name="nomeFantasia" value={data.nomeFantasia ? data.nomeFantasia : ''}/>
                            </div>
                            <div className="form-group">
                            <InputMask mask="(99) 99999-9999" placeholder={"telefone"} name={"telefone"} onChange={this.handleChange} value={data.telefone ? data.telefone : ''}/>
                                <input type="text" onChange={this.handleChange} required placeholder="E-mail" name="email" value={data.email ? data.email : ''}/>
                            </div>
                            </>
                        )}
                        <>
                            <div className="form-group">
                                <input type="password" onChange={this.handleChange} placeholder="Senha" name="senha" value={data.senha ? data.senha : ''}/>
                                <input type="password" onChange={this.handleChange} placeholder="Confirmar senha" name="confirmacaoSenha" value={data.senha ? data.senha : ''}/>
                            </div>
                            <div className="form-group">
                                <InputMask mask="999999-99" placeholder={"CEP"} name={"cep"} onChange={this.handleChange} value={data.cep ? data.cep : ''}/>
                                <input type="text" onChange={this.handleChange} placeholder="Endereço" name="endereco" value={data.endereco ? data.endereco : ''}/>
                                <input type="number" onChange={this.handleChange} placeholder="Número" name="numero" value={data.numero ? data.numero : ''}/>
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
                 <Modal.Title>
                   {this.props.deleteUser ? (<h2 className="title-modalDelete">Confirme a exclusão</h2>) : null}
                </Modal.Title>
                <Modal.Body>
                    {!this.props.deleteUser ? (
                        this.renderModaalCreateUser(this.state.data)
                    ):(
                        <>
                            <h3 className="body-modalDelete">Deseja realmente excluir o usuário {this.props.data.nome}?</h3>
                        </>
                    )}
                        <GroupButton 
                                ButtonCancel={this.props.handleClose}  
                                ButtonSubmit={!this.props.deleteUser ? this.handleSubmit(this.state.data, this.test) : null} 
                                ValueButtonCancel="CANCELAR" ValueButtonSubmit="SUBMIT">
                        </GroupButton>
                </Modal.Body>
            </Modal>
        )
    }
}