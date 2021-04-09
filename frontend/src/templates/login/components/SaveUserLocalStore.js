export default function SaveUserLocalStore(data){
    localStorage.setItem('userEmail', data.userEmail)
    localStorage.setItem('userCredentials', data.user)
    localStorage.setItem('userToken', data.userToken)
    window.location="/"
}