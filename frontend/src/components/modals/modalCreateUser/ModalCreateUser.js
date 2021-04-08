import React from 'react'
import Modal from 'react-bootstrap/Modal'
import './index.css'

export default function ModalCreateUser(props) {
    return (
        <Modal
            id="modalCreateUser"
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Body>
                <form>
                    <div className="title-createUser">
                        <span>Tipo:</span>
                        <div>
                            <input type="radio" name="pessoa"  value="Pessoa física" />
                            <p>Pessoa física</p>
                        </div>
                        <div>
                            <input type="radio" name="pessoa"  value="Pessoa jurídica" />
                            <p>Pessoa Jurídica</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="width-190-margin-30" placeholder="Nome" name="Nome" />
                        <input type="text" className="width-310" placeholder="Sobrenome" name="Sobrenome" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="width-190-margin-30" placeholder="Telefone" name="telefone"/>
                        <input type="text" className="width-310" placeholder="E-mail" name="email"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="width-190-margin-30" placeholder="CPF" name="cpf"/>
                        <input type="text" className="width-310" placeholder="Data de Nascimento" name="dataDeNascimento"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="width-250-margin-30" placeholder="Senha" name="senha"/>
                        <input type="password" className="width-245" placeholder="Confirmar senha" name="confirmacaoSenha"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="CEP" name="cep"/>
                        <input type="text" placeholder="Endereço" name="endereco"/>
                        <input type="text" placeholder="Número" name="numero"/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="UF" name="uf"/>
                        <input type="text" placeholder="Cidade" name="cidade"/>
                        <input type="text" placeholder="Bairro" name="bairro"/>
                    </div>
                    <div className="last-checkbox">
                        <span>Atuação:</span>
                        <div>
                            <input type="checkbox" name="agricultura" value="Agricultura" />
                            <p>Agricultura</p>
                            <input type="checkbox" name="aecuaria" value="Pecuária" />
                            <p>Pecuária</p>
                        </div>
                    </div>
                    <div className="cancel-submit">
                        <input type="button" value="CANCELAR" onClick={props.handleClose}/>
                        <input type="submit" value="ENVIAR"/>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}