import React, { Component } from 'react'

export default class CreateUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            handleChange: { 
                Nome: this.props.ChangeNome,
                Sobrenome: this.props.ChangeSobrenome,
                Telefone: this.props.ChangeTelefone,
                Email: this.props.ChangeEmail,
                CPF: this.props.ChangeCPF,
                DataDenascimento: this.props.ChangeDataDeNascimento,
                Senha: this.props.ChangeSenha,
                ConfirmarSenha: this.props.ChangeConfirmarSenha,
                CEP: this.props.ChangeCEP,
                Endereco: this.props.ChangeEndereco,
                Numero: this.props.ChangeNumero,
                UF: this.props.ChangeUF,
                Cidade: this.props.ChangeCidade,
                Bairro: this.props.ChangeBairro,
                Agricultura: this.props.ChangeAgricultura,
                Pecuaria: this.props.ChangePecuaria,
            },
            classFormGroup: this.props.classFormGroup
        }
    }

    render() {
        return (
            <>
                <div className={this.state.classFormGroup}>
                    <input type="text" onChange={this.state.handleChange.Nome} placeholder="Nome" name="Nome" />
                    <input type="text" onChange={this.state.handleChange.Sobrenome} placeholder="Sobrenome" name="Sobrenome" />
                </div>
                <div className={this.state.classFormGroup}>
                    <input type="text" onChange={this.state.handleChange.Telefone} placeholder="Telefone" name="telefone" />
                    <input type="text" onChange={this.state.handleChange.Email} placeholder="E-mail" name="email" />
                </div>
                <div className={this.state.classFormGroup}>
                    <input type="text" onChange={this.state.handleChange.CPF} placeholder="CPF" name="cpf" />
                    <input type="text" onChange={this.state.handleChange.DataDenascimento} placeholder="Data de Nascimento" name="dataDeNascimento" />
                </div>
                <div className={this.state.classFormGroup}>
                    <input type="password" onChange={this.state.handleChange.Senha} placeholder="Senha" name="senha" />
                    <input type="password" onChange={this.state.handleChange.ConfirmarSenha} placeholder="Confirmar senha" name="confirmacaoSenha" />
                </div>
                <div className={this.state.classFormGroup}>
                    <input type="text" onChange={this.state.handleChange.CEP} placeholder="CEP" name="cep" />
                    <input type="text" onChange={this.state.handleChange.Endereco} placeholder="Endereço" name="endereco" />
                    <input type="text" onChange={this.state.handleChange.Numero} placeholder="Número" name="numero" />
                </div>
                <div className={this.state.classFormGroup}>
                    <input type="text" onChange={this.state.handleChange.UF} placeholder="UF" name="uf" />
                    <input type="text" onChange={this.state.handleChange.cidade} placeholder="Cidade" name="cidade" />
                    <input type="text" onChange={this.state.handleChange.bairro} placeholder="Bairro" name="bairro" />
                </div>
                <div className="last-checkbox">
                    <span>Atuação:</span>
                    <div>
                        <input type="checkbox" onChange={this.state.handleChange} name="agricultura" value="Agricultura" />
                        <p>Agricultura</p>
                        <input type="checkbox" onChange={this.state.handleChange} name="pecuaria" value="Pecuária" />
                        <p>Pecuária</p>
                    </div>
                </div>
            </>
        )
    }
}