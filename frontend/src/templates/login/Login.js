import React from 'react';
import useForms from './useForms'
import './index.css';

function Login(){

    const [{values}, handleChange, handleSubmit] = useForms();

    const verifyEmail = (email) => {
        return new Promise((resolve)=> {
            if(email !== '' && email !== null && email !== undefined){
               if(email.indexOf("@") !== -1){
                    return resolve({status: true})
               }else{
                    return resolve({status: false})
               }
            }else {
                return resolve({status: false})
            }
        })
    }

    const authentication = () => {
        verifyEmail(values.email)
            .then(e => {
               if(e.status){
                    alert('Email válido')
                }else {
                    alert("Email inválido")
               }
            })
    }

    return (
            <div className="telaLogin">
                <h3>Acesse sua conta</h3>
                <form onSubmit={handleSubmit(authentication)}>
                    <input onChange={handleChange} type="text" name="email" id="email" placeholder="E-mail"/>
                    <input onChange={handleChange} type="password" name="password" id="password" placeholder="Senha"/>
                    <input type="submit" value="ENTRAR" />
                </form>
            </div>
    )
}

export default Login;