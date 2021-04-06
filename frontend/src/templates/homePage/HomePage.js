import React from 'react'
import "./index.css"
import Header from '../../components/header/Header'
import Table from 'react-bootstrap/Table'
import { FaSearch, FaUserEdit, FaEye, FaTimes } from "react-icons/fa"

function HomePage() {
    
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

    return (
        <>
            <Header userEmail="agroceara@mail.com" />
            <section className="content">
                <div className="campoPesquisa">
                    <input type="text" placeholder="Buscar empresa" />
                    <i><FaSearch /></i>
                </div>
                <div className="btnCreate-and-pagination">
                    <button className="btnCreateUser">CRIAR NOVO USUÁRIO</button>
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
                        {/* <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr> */}
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default HomePage;