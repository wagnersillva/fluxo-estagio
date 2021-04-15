export  function verifyEmail(email){
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

export  function verifyPassword(password){
    return new Promise(resolve => {
        if(password !== null && password !== undefined && password !== ''){
            resolve({status: true});
        } else {
            resolve({status: false});
        }
    })
}

export  function  generalDatas(param){
    return new Promise(resolve => {
        if(!param){
            resolve({status: false, message: param})
        }else {
            resolve({status: true, message: param})
        }
    })
}

export function CheckInput(data){
    return new Promise (resolve =>{
        verifyEmail(data.email).then(e =>{
            if(e.status){
                if(data.senha === data.confirmacaoSenha){
                    if(data.senha.length >= 6) {
                        if(data.telefone.length === 16){
                            if(data.documento.length === 14 || data.documento.length === 18){
                                if(data.cep.length === 9){
                                    return resolve({Status: true})
                                }else{
                                    return resolve({Status: false, Message:"Insira um CEP válido."})
                                }
                            } else{
                                return resolve({Status: false, Message: "Insira um CPF ou CNPJ válido."})
                            }
                        }else{
                            return resolve({Status: false, Message: data.telefone})
                        }
                    }else{
                        return resolve({Status: false, Message: "Insira uma senha de pelo menos 6 caracteres."})
                    }
                }else{
                    return resolve({Status: false, Message: "Senhas não coicidem."})
                }
            }else{
                return resolve({Status: false, Message: "Insira um email válido"})
            }
        })
    })
}
