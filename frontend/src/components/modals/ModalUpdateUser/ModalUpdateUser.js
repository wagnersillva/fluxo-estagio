import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import GroupButton from '../../buttons/GroupButton/GroupButton'
import './index.css';
import InputMask from "react-input-mask";

export default class ModalCreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {},
            typeChecked: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.setTypeChecked = this.setTypeChecked.bind(this)
        this.test = this.test.bind(this)
    }

    // componentDidUpdate() {
    //        console.log(this.props.data)
    // }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
          this.setState({data: this.props.data});
        }
      }

    handleChange(event) {
        const data = { ...this.props.data }
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

    setTypeChecked(value) {
        this.setState({ typeChecked: value })
    }

    test(p) {
        if (p.pessoa === undefined) { p.pessoa = "Pessoa física" }
        if (p.pessoa === "Pessoa física") {
            delete p.nomeFantasia;
            delete p.cnpj;
        } else {
            delete p.sobrenome;
            delete p.cpf;
        }
        if(p.pecuaria===true && p.agricultura === false){
            // this.setState({data.modulos: "A"})
        }
        console.log(this.state.data)
    }

    render() {
        return (
            <Modal
                id="modalUpdateUser"
                show={this.props.show}
                onHide={this.props.onHide}
            >
                <Modal.Body>
                    <form>
                        <div className="title-createUpdate">
                            <span>Tipo:</span>
                            {!this.props.data.pessoa ? (
                                <>
                                    <div>
                                        <input defaultChecked type="radio" id="radio-Pessoafisica" onChange={this.handleChange} onClick={() => { this.setTypeChecked(false) }} name="pessoa" value="Pessoa física" />
                                        <label htmlFor="radio-Pessoafisica" >Pessoa física</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="radio-Pessoajuridica" onChange={this.handleChange} onClick={() => this.setTypeChecked(true)} name="pessoa" value="Pessoa jurídica" />
                                        <label htmlFor="radio-Pessoajuridica" >Pessoa jurídica</label>
                                    </div>
                                </>
                            ) : (
                                <>
                                <div>
                                    <input type="radio" id="radio-Pessoafisica" onChange={this.handleChange} onClick={() => { this.setTypeChecked(false) }} name="pessoa" value="Pessoa física" />
                                    <label htmlFor="radio-Pessoafisica" >Pessoa física</label>
                                </div>
                                <div>
                                    <input defaultChecked type="radio" id="radio-Pessoajuridica" onChange={this.handleChange} onClick={() => this.setTypeChecked(true)} name="pessoa" value="Pessoa jurídica" />
                                    <label htmlFor="radio-Pessoajuridica">Pessoa jurídica</label>
                                </div>
                            </>
                            )}
                        </div>
                        {!this.state.typeChecked ? (
                            <>
                                <div className={'form-group'}>
                                    <input type="text" onChange={this.handleChange} required placeholder="Nome" name="nome" value={this.state.data.nome} />
                                    <input type="text" onChange={this.handleChange} placeholder="Sobrenome" name="sobrenome" value={this.state.data.sobrenome} />
                                </div>
                                <div className={'form-group'}>
                                    <InputMask mask="(99) 99999-9999" placeholder={"telefone"} name={"telefone"} onChange={this.handleChange} value={this.state.data.telefone} />
                                    <input type="email" onChange={this.handleChange} placeholder="E-mail" name="email" value={this.state.data.email} />
                                </div>
                                <div className={'form-group'}>
                                    <InputMask mask="999.999.999-99" placeholder={"CPF"} name={"cpf"} onChange={this.handleChange} value={this.state.data.documento} />
                                    <InputMask mask="99/99/9999" placeholder={"Data de Nascimento"} name={"dataDeNascimento"} onChange={this.handleChange} value={this.state.data.dataDeNascimento} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="form-group">
                                    <input type="text" onChange={this.handleChange} placeholder="Razão Social" name="razaoSocial" value={this.state.data.nome}/>
                                </div>
                                <div className="form-group">
                                    <InputMask mask="99.999.999/9999-99" placeholder={"CNPJ"} name={"cnpj"} onChange={this.handleChange} value={this.state.data.documento}/>
                                    <input type="text" onChange={this.handleChange} placeholder="Nome fantasia" name="nomeFantasia" value={this.state.data.nomeFantasia}/>
                                </div>
                                <div className="form-group">
                                    <InputMask mask="(99) 99999-9999" placeholder={"telefone"} name={"telefone"} onChange={this.handleChange} value={this.state.data.telefone}/>
                                    <input type="text" onChange={this.handleChange} required placeholder="E-mail" name="e-mail" value={this.state.data.email}/>
                                </div>
                            </>
                        )}
                        <>
                            <div className="form-group">
                                <input type="password" onChange={this.handleChange} placeholder="Senha" name="senha" value={this.state.data.senha}/>
                                <input type="password" onChange={this.handleChange} placeholder="Confirmar senha" name="confirmacaoSenha" value={this.state.data.senha}/>
                            </div>
                            <div className="form-group">
                                <InputMask mask="999999-99" placeholder={"CEP"} name={"cep"} onChange={this.handleChange} value={this.state.data.cep}/>
                                <input type="text" onChange={this.handleChange} placeholder="Endereço" name="endereco" value={this.state.data.endereco}/>
                                <input type="number" onChange={this.handleChange} placeholder="Número" name="numero" value={this.state.data.numero}/>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={this.handleChange} placeholder="UF" name="uf" value={this.state.data.uf}/>
                                <input type="text" onChange={this.handleChange} placeholder="Cidade" name="cidade" value={this.state.data.cidade}/>
                                <input type="text" onChange={this.handleChange} placeholder="Bairro" name="bairro" value={this.state.data.bairro}/>
                            </div>
                            <div className="last-checkbox">
                                <span>Atuação:</span>
                                <div>
                                    <input type="checkbox" id="CheckBox-agricultura" onChange={this.handleChange} name="agricultura" value="A" />
                                    <label htmlFor="CheckBox-agricultura">Agricultura</label>
                                    <input type="checkbox" id="CheckBox-pecuaria" onChange={this.handleChange} name="pecuaria" value="P" />
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