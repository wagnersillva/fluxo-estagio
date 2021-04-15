import React,{useState} from 'react';
import useForms from '../../functions/useForms/useForms'
import {verifyPassword, verifyEmail} from '../../functions/verifyDatas/verifyDatas'
import AuthenticationWhitFirebase from './components/AuthenticationWhitFirebase'
import SaveUserLocalStore from './components/SaveUserLocalStore'
import './index.css';
import Button from '../../components/buttons/Button/Button';

function Login(){
    
    const [{values}, handleChange, handleSubmit] = useForms();
    const [{statusEmail, statusPassword}, setStatusVerifications ] = useState({statusEmail: true, statusPassword: true});

    const verifications = (data) => {
        verifyEmail(data.email)
            .then(e => {
                if(e.status){
                    setStatusVerifications({statusEmail: true});
                    verifyPassword(data.password)
                        .then(e => {
                            if(e.status){
                                setStatusVerifications({statusFormPassword: true});
                                AuthenticationWhitFirebase(data.email, data.password).then(auth => {
                                        if(auth.statusAuthentication===false){
                                            setStatusVerifications({statusEmail: false, statusPassword: false});
                                            console.log(auth.statusAuthentication)
                                        } else{
                                            SaveUserLocalStore(auth)
                                        }
                                    })
                            }else{
                                setStatusVerifications({statusPassword: false});
                            }
                        })
                }else {
                    setStatusVerifications({statusEmail: false, statusPassword: false});
               }
            })
    }

    return (
            <div className="telaLogin">
                <h3>Acesse sua conta</h3>
                <form >
                    <>
                        {statusEmail===false && (
                            <span id="messageErrorEmail">Endereço de e-mail inválido!</span>
                        )}
                    </>
                    <input onChange={handleChange} type="text"  name="email" id="email" placeholder="E-mail"/>
                    <>
                        {statusPassword===false && (
                            <span id="messageErrorPassword">Senha inválida!</span>
                        )}
                    </>
                    <input onChange={handleChange} type="password"  name="password" id="password" placeholder="Senha"/>
                    <Button type="submit" onClick={handleSubmit(values, verifications)} className="success" valueButtton="ENTRAR"/>
                </form>
            </div>
    )
}

export default Login;