import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import "./index.css";

export default class ModalUpdateUser extends Component {
    constructor(props){
        super(props)
        this.state= {
            data: this.props.data
        }
    }

    render(){
        return(
            <Modal>
                <Modal.Header></Modal.Header>
                
                <Modal.Footer></Modal.Footer>
            </Modal>
        )
    }
}