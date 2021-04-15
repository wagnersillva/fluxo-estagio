import React, {useState} from 'react'
import "./index.css"
import {Logout} from './Logout'
import Table from 'react-bootstrap/Table'
import Header from '../../components/header/Header'
import RowTable from '../../components/Table/RowTable'
import Button from '../../components/buttons/Button/Button'
import { FaSearch, FaUserEdit, FaEye, FaTimes, } from "react-icons/fa"
import CreateUser from '../../components/modals/CreateUser/CreateUser'

function HomePage() {

    
    const [{userData, userDataView, userDataDelete}, setDataModal] = useState({})
    const [usersPreview,setUserPreview] = useState([]);
    const [userEmail] = useState(localStorage.getItem('userEmail'));
    const [{show}, setShow] = useState(false);
    const handleShowModal = (fn) => fn;
    const handleCloseModal = (fn) => fn;

    // dados provisório
    const users = [
        {
           id:1 , nome: 'wagner alves', nomeFantasia:"Algum nome fantasia" , pessoa:'Pessoa jurídica' ,documento: '10.000.000/0001-00',email: 'email4@exemplo.com', dataDeNascimento: '20/20/2000',senha: 123456,
            telefone: '(85) 0 0000-0000',modulos: "A", uf: "CEARA",bairro:"Algum bairro", cidade:"fortaleza",cep:"13213516",  endereco: "rua A", numero: 123
        },
        {
            id:2, nome: 'joao souza', nomeFantasia:"Algum nome fantasia" ,pessoa:'Pessoa jurídica',documento: '10.200.000/0001-00',email: 'jalberto@exemplo.com',dataDeNascimento: '20/20/2000', senha: 123456,
            telefone: '(85) 0 0000-0000',modulos: "A", uf: "CEARA",bairro:"Algum bairro", cidade:"fortaleza",cep:"13213516",  endereco: "rua A", numero: 123 
        },
        {
            id:3, nome: 'lucas andre', nomeFantasia:"Algum nome fantasia" ,pessoa:'Pessoa jurídica',documento: '15.000.000/0001-00',email: 'souza@exemplo.com',dataDeNascimento: '20/20/2000',senha: 123456,
            telefone: '(85) 0 0000-0000',modulos: "A - P", uf: "CEARA",bairro:"Algum bairro", cidade:"fortaleza",cep:"13213516", endereco: "rua A", numero: 123 
        },
        {
            id:4, nome: 'abraão',  sobrenome: ' almeida',pessoa:'Pessoa física',documento: '050.000.000-00',email: 'almeida@exemplo.com',dataDeNascimento: '20/20/2000',senha: 123456,
            telefone: '(85) 0 0000-0000',modulos: "A", uf: "CEARA",bairro:"Algum bairro", cidade:"fortaleza",cep:"13213516",  endereco: "rua A", numero: 123 
        },
        {
            id:5, nome: 'carlos', sobrenome: ' algusto',pessoa:'Pessoa física',documento: '009.000.000-00',email: 'algusto@exemplo.com',dataDeNascimento: '20/20/2000',senha: 123456,
            telefone: '(85) 0 0000-0000',modulos: "P", uf: "CEARA",bairro:"Algum bairro", cidade:"fortaleza",cep:"13213516",  endereco: "rua A", numero: 123 
        },
    ]
    
    window.addEventListener('load', ()=>{
        const preview = []
        users.forEach(user => {
            if(user.sobrenome){
                user.nome = `${user.nome} ${user.sobrenome}`
            }
            const data = {
                nome: user.nome,
                documento: user.documento,
                email: user.email,
                telefone: user.telefone,
                modulos: user.modulos
            }
            preview.push(data)
        })
        setUserPreview(preview);
    })
    

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
                    <Button className="primary" valueButtton="CRIAR NOVO USUÁRIO" onClick={(e)=>{e.preventDefault();setDataModal({userData: {}, userView: false});setShow({show: true})}}/>
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
                        {usersPreview.map((value, index)=>{
                            return(
                                <tr key={index}>
                                    <RowTable dataKey={'email'} data={value}/>
                                    <td className="td-actions">
                                        <div>
                                            <FaUserEdit className="icon actionUserEdit" 
                                                onClick={(e)=>{e.preventDefault();handleShowModal(setShow({ show: true })); setDataModal({userData: users[index], userDataView: false, userDataDelete: false})}} />
                                            <FaEye className="icon actionUserView" 
                                                onClick={(e)=>{e.preventDefault();handleShowModal(setShow({ show: true })); setDataModal({userData: users[index], userDataView: true, userDataDelete: false})}}/>  
                                            <FaTimes className="icon actionUserDelete" 
                                                onClick={(e)=>{e.preventDefault(); handleShowModal(setShow({ show: true })); setDataModal({userData: users[index], userDataView: false, userDataDelete: true})}}/>
                                        </div>
                                    </td>
                                </tr>
                        )})}
                    </tbody>
                </Table>
                    { !usersPreview.length && 
                        <div >
                            <p className="msg-SemUsuarios">Não há usuários cadastrados</p>
                        </div>
                    }
            </section>

            <CreateUser 
                show={show} 
                onHide={()=> {handleCloseModal(setShow({show: false})); setDataModal({userData: {}, userDataView: false, userDataDelete: false })}}
                handleClose={(e)=>{ e.preventDefault(); handleCloseModal(setShow({show: false})); setDataModal({userData: {}, userDataView: false, userDataDelete: false})}}
                handleDelete={(e)=>{e.preventDefault(); handleShowModal(setShow({ show: true })); setDataModal({userData: userData, userDataView: false, userDataDelete: true})}}
                userDataDelete={userDataDelete}
                userDataView={userDataView}
                data={userData}
            />
        </>
    )
}

export default HomePage;