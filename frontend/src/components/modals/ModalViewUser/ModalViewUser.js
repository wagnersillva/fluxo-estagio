import React, { Component } from 'react'
import './index.css'
import Modal from 'react-bootstrap/Modal'
import GroupButton from '../../buttons/GroupButton/GroupButton'

export default class ModalViewUser extends Component{
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
                        <p>{data.localizacao.cep}</p>
                    </div>
                    <div>
                        <p className="detalhe-label">CIDADE</p>
                        <p>{data.localizacao.cidade}</p>
                    </div>
                    <div>
                        <p className="detalhe-label">BAIRRO</p>
                        <p>{data.localizacao.bairro}</p>
                    </div>
                    <div >
                        <p className="detalhe-label">UF</p>
                        <p>{data.localizacao.uf}</p>
                    </div>
               </div>
               <div className="detalhe-item">
                    <p className="detalhe-label">ENDEREÇO</p>
                    <p>{data.localizacao.rua}, {data.localizacao.numero}</p>
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
            <Modal
                id="modalViewUser"
                show={this.props.show}
                onHide={this.props.onHide}
            >  
                <Modal.Header closeButton>
                    <h2>Detalhes do usuário</h2>
                </Modal.Header>
                {this.props.show && this.renderUser(this.props.data)}
                <Modal.Footer>
                    <GroupButton
                        ButtonCancel={this.props.handleDelete} ValueButtonCancel="EXCLUIR"
                        ButtonSubmit={this.props.handleClose} ValueButtonSubmit="VOLTAR"
                    />
                </Modal.Footer>
                
            </Modal>
        )
    }
}