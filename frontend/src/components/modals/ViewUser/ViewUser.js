import React, { Component } from 'react'
import './index.css'

export default class ViewUser extends Component{
    constructor(props){
        super(props)
        this.state= {
            data: this.props.data
        }
        this.renderUser = this.renderUser.bind(this)
    }
    renderUser(data){
        return(
            <section className="detalhes-usuario">
               <div className="detalhe-item">
                    <p className="detalhe-label">NOME</p>
                    <p>{data.nome} {data.sobrenome}</p>
               </div>
               <div className="detalhe-item">
                    <p className="detalhe-label">CPF/CNPJ</p>
                    <p>{data.documento}</p>
               </div>
               <div className="detalhe-item">
                    <p className="detalhe-label">E-MAIL</p>
                    <p>{data.email}</p>
               </div>
               <div className="detalhe-item">
                    <p className="detalhe-label">TELEFONE</p>
                    <p>{data.telefone}</p>
               </div>
               <div className="detalhe-item localizacao">
                    <div>
                        <p className="detalhe-label">CEP</p>
                        <p>{data.cep}</p>
                    </div>
                    <div>
                        <p className="detalhe-label">CIDADE</p>
                        <p>{data.cidade}</p>
                    </div>
                    <div>
                        <p className="detalhe-label">BAIRRO</p>
                        <p>{data.bairro}</p>
                    </div>
                    <div >
                        <p className="detalhe-label">UF</p>
                        <p>{data.uf}</p>
                    </div>
               </div>
               <div className="detalhe-item">
                    <p className="detalhe-label">ENDEREÇO</p>
                    <p>{data.endereco}, {data.numero}</p>
               </div>
               <div className="detalhe-item">
                    <p className="detalhe-label">MÓDULOS PRETENDIDOS</p>
                    <p>
                        {data.modulos ==="A" && <>Agricultura</>}
                        {data.modulos ==="A - P" && <>Agricultura e Pecuária</>}
                        {data.modulos ==="P" && <>Pecuária</>}
                    </p>
               </div>
            </section>
        )
    }
    render(){
        return(
            <>
                {this.renderUser(this.props.data)}
            </>
        )
    }
}