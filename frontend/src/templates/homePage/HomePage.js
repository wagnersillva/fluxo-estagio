import React, {useState} from 'react'
import Header from '../../components/header/Header'
import Table from 'react-bootstrap/Table'
import ModalCreateUser from '../../components/modals/modalCreateUser/ModalCreateUser'
import { FaSearch, FaUserEdit, FaEye, FaTimes } from "react-icons/fa"
import {firebaseConfig} from '../../config/firebase/Firebase'

import "./index.css"

function HomePage() {

    const [userEmail] = useState(localStorage.getItem('userEmail'));

    const [show, setShow] = useState(false);
    const handleCloseModalCreateUser = () => setShow(false);
    const handleShowModalCreateUser = () => setShow(true);



        const users = [
        {
            nome: 'nome completo', 
            cpf: '00.000.000/0001-00', 
            email: 'email@exemplo.com',
            telefone: '(85) 0 0000-0000',
            modulos: "A",
        },
        {
            nome: 'nome completo mais completo', 
            cpf: '000.000.000-00', 
            email: 'emailemailemailemailemail',
            telefone: '(85) 0 0000-0000',
            modulos: "A-B",
        },
        {
            nome: 'nome completo', 
            cpf: '000.000.000-00', 
            email: 'email@exemplo.com',
            telefone: '(85) 0 0000-0000',
            modulos: "B",
        },
    ]

    const Logout = () => {
        firebaseConfig.auth().signOut().then(() => {
            localStorage.removeItem('userEmail')
            localStorage.removeItem('userCredentials')
            localStorage.removeItem('userToken')
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <>
            <Header 
                userEmail={userEmail} 
                methodLogout={Logout}
            />
            <section className="content"> 
                <div className="campoPesquisa ">
                    <input type="text" placeholder="Buscar empresa" id="inputSearch" />
                    <i ><FaSearch id="iconSearch" /></i>
                </div>
                <div className="btnCreate-and-pagination">
                    <button className="btnCreateUser" onClick={handleShowModalCreateUser}>
                        CRIAR NOVO USUÁRIO
                    </button>
                    <div className="table-pagination">
                    pagination 
                    </div>
                </div>
                <Table striped bordered className="table-users">
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>CPF/CNPJ</th>
                            <th>E-MAIL</th>
                            <th>TELEFONE</th>
                            <th>MÓDULOS</th>
                            <th>AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((value, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{value.nome}</td>
                                    <td>{value.cpf}</td>
                                    <td>{value.email}</td>
                                    <td>{value.telefone}</td>
                                    <td>{value.modulos}</td>
                                    <td className="td-actions">
                                        <div>
                                            <FaUserEdit className="iconAction actionUserEdit"/>
                                            <FaEye className="iconAction actionUserView"/>
                                            <FaTimes className="iconAction actionUserDelete"/>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </section>

            <ModalCreateUser 
                show={show} 
                onHide={()=> setShow(false)} 
                handleClose={()=>handleCloseModalCreateUser()}
            />
        </>
    )
}

export default HomePage;