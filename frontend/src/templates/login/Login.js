import React,{useState} from 'react';
import useForms from './useForms'
import verifyDatas from './verifyDatas'
import './index.css';

function Login(){

    const [{values}, handleChange, handleSubmit] = useForms();
    const [verifyPassword, verifyEmail] = verifyDatas();
    const [{classFormEmail, statusFormEmail}, setClassFormEmail ] = useState({classFormEmail: "", statusFormEmail: true});
    const [{classFormPassword, statusFormPassword}, setClassFormPassword ] = useState({classFormPassword: "", statusFormPassword: true});

    const authentication = () => {
        verifyEmail(values.email)
            .then(e => {
               if(e.status){
                    setClassFormEmail({classFormEmail: "input-formLogin-Success", statusFormEmail: true});
                    verifyPassword(values.password)
                        .then(e => {
                            if(e.status){
                                setClassFormPassword({classFormPassword: "input-formLogin-Success", statusFormPassword: true});
                            }else{
                                setClassFormPassword({classFormPassword: "input-formLogin-Error", statusFormPassword: false});
                            }
                        })
                }else {
                    setClassFormEmail({classFormEmail: "input-formLogin-Error", statusFormEmail: false});
                    setClassFormPassword({classFormPassword: "input-formLogin-Error", statusFormPassword: false});
               }
            })
    }

    return (
            <div className="telaLogin">
                <h3>Acesse sua conta</h3>
                <form onSubmit={handleSubmit(authentication)}>
                    <>
                        {!statusFormEmail && (
                            <span id="messageErrorEmail">Endereço de e-mail inválido!</span>
                        )}
                    </>
                    <input onChange={handleChange} type="text" className={classFormEmail} name="email" id="email" placeholder="E-mail"/>
                    <>
                        {!statusFormPassword && (
                            <span id="messageErrorPassword">Senha inválida ou incorreta!</span>
                        )}
                    </>
                    <input onChange={handleChange} type="password" className={classFormPassword} name="password" id="password" placeholder="Senha"/>
                    <input type="submit" value="ENTRAR" />
                </form>
            </div>
    )
}

export default Login;