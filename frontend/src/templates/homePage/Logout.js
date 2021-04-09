import {firebaseConfig} from '../../config/firebase/Firebase'

export const Logout = () => {
    firebaseConfig.auth().signOut().then(() => {
        localStorage.removeItem('userEmail')
        localStorage.removeItem('userCredentials')
        localStorage.removeItem('userToken')
        window.location.reload()
    }).catch((error) => {
        console.log(error)
    });
}