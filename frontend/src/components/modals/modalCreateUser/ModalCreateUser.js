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
            typeChecked: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setTypeChecked = this.setTypeChecked.bind(this)
        this.test = this.test.bind(this)
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

    render(){
        // this.test2(this.props.data.id)
        return(
            <Modal
                id="modalCreateUser"
                show={this.props.show}
                onHide={this.props.onHide}
            >
                <Modal.Body>
                    <form>
                        {/* <CreateUser handleChange={handleChange}/> */}
                        <div className="title-createUser">
                                <span>Tipo:</span>
                            <div>
                                <input defaultChecked type="radio" id="radio-Pessoafisica" onChange={this.handleChange} onClick={()=>{this.setTypeChecked(false)}} name="pessoa"  value="Pessoa física"/>
                                <label htmlFor="radio-Pessoafisica" >Pessoa física</label>
                            </div>
                            <div>
                                <input type="radio" id="radio-Pessoajuridica" onChange={this.handleChange} onClick={()=>this.setTypeChecked(true)} name="pessoa"  value="Pessoa jurídica" />
                                <label htmlFor="radio-Pessoajuridica" >Pessoa jurídica</label>
                            </div>
                        </div>
                        {!this.state.typeChecked ? (
                            <>
                            <div className={'form-group'}>
                                <input type="text" onChange={this.handleChange} required placeholder="Nome" name="nome" />
                                <input type="text" onChange={this.handleChange} placeholder="Sobrenome" name="sobrenome"/>
                            </div>
                            <div className={'form-group'}>
                                <InputMask mask="(99) 99999-9999" placeholder={"telefone"} name={"telefone"} onChange={this.handleChange}/>
                                <input type="email" onChange={this.handleChange} placeholder="E-mail" name="email"/>
                            </div>
                            <div className={'form-group'}>
                                <InputMask mask="999.999.999-99" placeholder={"CPF"} name={"cpf"} onChange={this.handleChange}/>
                                <InputMask mask="99/99/9999" placeholder={"Data de Nascimento"} name={"dataDeNascimento"} onChange={this.handleChange}/>
                            </div>
                            </>
                        ) : (
                            <>
                            <div className="form-group">
                                <input type="text" onChange={this.handleChange} placeholder="Razão Social" name="razaoSocial" />
                            </div>
                            <div className="form-group">
                                <InputMask mask="99.999.999/9999-99" placeholder={"CNPJ"} name={"cnpj"} onChange={this.handleChange}/>
                                <input type="text" onChange={this.handleChange} placeholder="Nome fantasia" name="nomeFantasia"/>
                            </div>
                            <div className="form-group">
                            <InputMask mask="(99) 99999-9999" placeholder={"telefone"} name={"telefone"} onChange={this.handleChange}/>
                                <input type="text" onChange={this.handleChange} required placeholder="E-mail" name="e-mail"/>
                            </div>
                            </>
                        )}
                        <>
                        <div className="form-group">
                                <input type="password" onChange={this.handleChange} placeholder="Senha" name="senha"/>
                                <input type="password" onChange={this.handleChange} placeholder="Confirmar senha" name="confirmacaoSenha"/>
                            </div>
                            <div className="form-group">
                                <InputMask mask="999999-99" placeholder={"CEP"} name={"cep"} onChange={this.handleChange}/>
                                <input type="text" onChange={this.handleChange} placeholder="Endereço" name="endereco"/>
                                <input type="number" onChange={this.handleChange} placeholder="Número" name="numero"/>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={this.handleChange} placeholder="UF" name="uf"/>
                                <input type="text" onChange={this.handleChange} placeholder="Cidade" name="cidade"/>
                                <input type="text" onChange={this.handleChange} placeholder="Bairro" name="bairro"/>
                            </div>
                            <div className="last-checkbox">
                                <span>Atuação:</span>
                                <div>
                                    <input type="checkbox" id="CheckBox-agricultura" onChange={this.handleChange} name="agricultura" value="A" />
                                    <label htmlFor="CheckBox-agricultura">Agricultura</label>
                                    <input type="checkbox" id="CheckBox-pecuaria" onChange={this.handleChange} name="pecuaria" value="P"/>
                                    <label htmlFor="CheckBox-pecuaria">Pecuária</label>
                                </div>
                            </div>
                        </>
                        <GroupButton 
                                ButtonCancel={this.props.handleClose} ButtonSubmit={this.handleSubmit(this.state.data, this.test)} 
                                ValueButtonCancel="CANCELAR" ValueButtonSubmit="SUBMIT">
                        </GroupButton>
                    </form>
                </Modal.Body>
            </Modal>
        )
    }
}