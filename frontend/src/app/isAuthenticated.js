export const isAuthenticated = () => {
    if(localStorage.getItem('userCredentials')!==null && localStorage.getItem('userCredentials')!== undefined){
        if(localStorage.getItem('userEmail')!==null && localStorage.getItem('userEmail')!== undefined){
            if(localStorage.getItem('userToken')!==null && localStorage.getItem('userToken')!== undefined){
                return true
            }else {
                return false
            }
        }else {
            return false
        }
    } else {
        return false
    }
}