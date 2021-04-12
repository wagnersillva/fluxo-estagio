import React, {useState} from 'react'
import Header from '../../components/header/Header'
import Table from 'react-bootstrap/Table'
import ModalCreateUser from '../../components/modals/modalCreateUser/ModalCreateUser'
import ModalDeleteUser from '../../components/modals/ModalDeleteUser/ModalDeleteUser'
import { FaSearch, FaUserEdit, FaEye, FaTimes } from "react-icons/fa"
import {Logout} from './Logout'

import "./index.css"
import Button from '../../components/buttons/Button/Button'
import RowTable from '../../components/Table/RowTable'

function HomePage() {

    const [userEmail] = useState(localStorage.getItem('userEmail'));
    const [{modalCreate, modalDelete, modalView, modalUpdate}, setShow] = useState(false);
    const [userData, setUserData] = useState('')
    const handleCloseModal = (fn) => fn;
    const handleShowModal = (fn) => fn;
    const fnDeleteUser = (param) => alert(`excluindo ${param}`)

    const users = [
        {nome: 'wagner 01',cnpj: '10.000.000/0001-00',email: 'email4@exemplo.com',telefone: '(85) 0 0000-0000',modulos: "A",},
        {nome: 'wagner 02',cpf: '200.000.000-00',email: 'emailemailemailemailemail',telefone: '(85) 0 0000-0000',modulos: "A-B",},
        {nome: 'wagner 03',cpf: '300.000.000-00',email: 'email8@exemplo.com',telefone: '(85) 0 0000-0000',modulos: "B",},
        {nome: 'wagner 04',cpf: '050.000.000-00',email: 'email7@exemplo.com',telefone: '(85) 0 0000-0000',modulos: "B",},
        {nome: 'wagner 05',cpf: '009.000.000-00',email: 'email6@exemplo.com',telefone: '(85) 0 0000-0000',modulos: "B",}
    ]



    return (
        <>
            <Header 
                userEmail={userEmail} 
                methodLogout={()=>Logout()}
            />
            <section className="content"> 
                <div className="campoPesquisa ">
                    <input type="text" placeholder="Buscar empresa" id="inputSearch" />
                    <i ><FaSearch className="icon" /></i>
                </div>
                <div className="btnCreate-and-pagination">
                    <Button className="primary" valueButtton="CRIAR NOVO USUÁRIO" onClick={()=>handleShowModal(setShow({modalCreate: true}))}/>
                    <div className="table-pagination">
                        pagination 
                    </div>
                </div>
                <Table striped bordered className="table-users">
                    <thead>
                        <tr>
                            <RowTable  dataKey={'email'} data={["NOME","CPF/CNPJ","E-MAIL","TELEFONE","MÓDULOS","AÇÕES"]}/>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((value, index)=>{
                            return(
                                <tr key={index}>
                                    <RowTable dataKey={'email'} data={value}/>
                                    <td className="td-actions">
                                        <div>
                                            <FaUserEdit className="icon actionUserEdit" 

                                            />
                                            <FaEye className="icon actionUserView" 
                                            
                                            />
                                            <FaTimes
                                                className="icon actionUserDelete"
                                                onClick={() => {
                                                    handleShowModal(setShow({ modalDelete: true }))
                                                    setUserData(value.nome)
                                                }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            )})}
                    </tbody>
                </Table>
            </section>

            <ModalCreateUser 
                show={modalCreate} 
                onHide={()=> handleCloseModal(setShow({modalCreate: false}))} 
                handleClose={(e)=>{
                    e.preventDefault()
                    handleCloseModal(setShow({modalCreate: false}))
                    console.log(e)
                }}
            />

            <ModalDeleteUser
                show={modalDelete} 
                onHide={()=> handleCloseModal(setShow({modalDelete: false}))} 
                handleClose={(e)=>{
                    e.preventDefault()
                    handleCloseModal(setShow({modalDelete: false}))
                }}
                handleDeleteUser={()=>{
                    fnDeleteUser(userData)
                }}
                user={userData}
            />

        </>
    )
}

export default HomePage;