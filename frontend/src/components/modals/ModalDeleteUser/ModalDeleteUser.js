import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import GroupButton from '../../buttons/GroupButton/GroupButton'
import './index.css';

export default function ModalDeleteUser (props) {



    return(
        <Modal
            id="modalDeleteUser"
            show={props.show}
            onHide={props.onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                   <h2 className="title-modalDelete">Confirme a exclusão</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3 className="body-modalDelete">Deseja realmente excluir o usuário {props.data.nome}?</h3>
            </Modal.Body>
            <Modal.Footer>
                <GroupButton 
                    ButtonCancel={props.handleClose} ButtonSubmit={props.handleDeleteUser} 
                    ValueButtonCancel="CANCELAR" ValueButtonSubmit="EXCLUIR">
                </GroupButton>
            </Modal.Footer>
        </Modal>
    )
}