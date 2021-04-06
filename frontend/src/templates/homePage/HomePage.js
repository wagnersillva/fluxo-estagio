import React from 'react'
import "./index.css"
import Header from '../../components/header/Header'
import Table from 'react-bootstrap/Table'
import { FaSearch } from "react-icons/fa"

function HomePage() {


    return (
        <>
            <Header userEmail="agroceara@mail.com" />
            <section className="content">
                <div className="campoPesquisa">
                    <input type="text" placeholder="Buscar empresa" />
                    <i><FaSearch /></i>
                </div>
                <div>
                    <button></button>
                </div>
                <Table striped bordered hover>
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
                        <tr>
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
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default HomePage;