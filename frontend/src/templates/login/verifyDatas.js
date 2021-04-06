export default function verifyDatas(){

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

    const verifyPassword = (password) => {
        return new Promise(resolve => {
            if(password !== null && password !== undefined && password !== ''){
                resolve({status: true});
            } else {
                resolve({status: false});
            }
        })
    }

    return [verifyPassword, verifyEmail]
}