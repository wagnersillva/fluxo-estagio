import React,{useState} from 'react';
import useForms from './components/useForms'
import verifyDatas from './components/verifyDatas'
import AuthenticationWhitFirebase from './components/AuthenticationWhitFirebase'
import './index.css';
import Button from '../../components/buttons/Button/Button';

function Login(){

    
    const [{values}, handleChange, handleSubmit] = useForms();
    const [verifyPassword, verifyEmail] = verifyDatas();
    const [{classFormEmail, statusFormEmail}, setClassFormEmail ] = useState({classFormEmail: "", statusFormEmail: true});
    const [{classFormPassword, statusFormPassword}, setClassFormPassword ] = useState({classFormPassword: "", statusFormPassword: true});

    const verifications = () => {
        verifyEmail(values.email)
            .then(e => {
               if(e.status){
                    setClassFormEmail({classFormEmail: "input-formLogin-Success", statusFormEmail: true});

                    verifyPassword(values.password)
                        .then(e => {
                            if(e.status){
                                setClassFormPassword({classFormPassword: "input-formLogin-Success", statusFormPassword: true});
                                AuthenticationWhitFirebase(values.email, values.password)
                                    .then(auth => {
                                        if(!auth.statusAuthentication){
                                            setClassFormEmail({classFormEmail: "input-formLogin-Error", statusFormEmail: false});
                                            setClassFormPassword({classFormPassword: "input-formLogin-Error", statusFormPassword: false});
                                        } else{
                                            localStorage.setItem('userEmail', auth.userEmail)
                                            localStorage.setItem('userCredentials', auth.user)
                                            localStorage.setItem('userToken', auth.userToken)
                                            window.location="/"
                                        }
                                    })
                            }else{
                                setClassFormPassword({classFormPassword: "input-formLogin-Error", statusFormPassword: false});
                            }
                        })

                }else {
                    setClassFormEmail({statusFormEmail: false});
                    setClassFormPassword({statusFormPassword: false});
               }
            })
    }

    return (
            <div className="telaLogin">
                <h3>Acesse sua conta</h3>
                <form >
                    <>
                        {!statusFormEmail && (
                            <span id="messageErrorEmail">Endereço de e-mail inválido!</span>
                        )}
                    </>
                    <input onChange={handleChange} type="text"  name="email" id="email" placeholder="E-mail"/>
                    <>
                        {!statusFormPassword && (
                            <span id="messageErrorPassword">Senha inválida!</span>
                        )}
                    </>
                    <input onChange={handleChange} type="password"  name="password" id="password" placeholder="Senha"/>
                    <Button type="submit" onClick={handleSubmit(verifications)} className="success" valueButtton="ENTRAR"/>
                    {/* <input type="submit" value="ENTRAR" /> */}
                </form>
            </div>
    )
}

export default Login;