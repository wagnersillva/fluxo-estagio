import React, {useState, useEffect } from 'react'
import "./index.css"
import {Logout} from './Logout'
import Table from 'react-bootstrap/Table'
import Header from '../../components/header/Header'
import RowTable from '../../components/Table/RowTable'
import Button from '../../components/buttons/Button/Button'
import { FaSearch, FaUserEdit, FaEye, FaTimes, } from "react-icons/fa"
import CreateUser from '../../components/modals/CreateUser/CreateUser'
import { getUsers } from '../../api/users/apiUsers'


function HomePage() {

    
    const [{userData, userDataView, userDataDelete}, setDataModal] = useState({})
    const [{users, usersPreview},setUsers] = useState([]);
    const [query, setQuery] = useState('');
    const [url, setUrl] = useState('http://localhost:3333/users')
    const [userEmail] = useState(localStorage.getItem('userEmail'));
    const [{show}, setShow] = useState(false);
    const handleShowModal = (fn) => fn;
    const handleCloseModal = (fn) => fn;

    useEffect(() =>{
        async function fetchData(){
            const resp = await getUsers(url).then(e =>{ return e});
            let data = resp.data
            let preview=[]
            if(data.result){
                data.result.forEach(user => {
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
            }
            setUsers({users: data.result, usersPreview: preview})
        }
        fetchData()
    }, [url])

    const clearQuery = ()=>{
        setUrl(`${url}`); 
        window.location=''
    }
    
    return (
        <>
            <Header 
                userEmail={userEmail} 
                methodLogout={()=>Logout()}
            />
            <section className="content"> 
                <div className="campoPesquisa ">
                    <input type="text" placeholder="Buscar empresa" value={query} onChange={event =>{event.preventDefault(); setQuery(event.target.value)}} id="inputSearch" />
                    <i ><FaSearch className="icon" onClick={()=> { query ? setUrl(`${url}?query=${query}`) : clearQuery()}}/></i>
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
                        {usersPreview && usersPreview.map((value, index)=>{
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
                    { !usersPreview && 
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
                closeButton={false}
            />
        </>
    )
}

export default HomePage;