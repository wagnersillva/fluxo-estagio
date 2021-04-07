import {firebaseConfig} from '../../../config/firebase/Firebase'

const AuthenticationWhitFirebase = (email, password) => {
    return (
        firebaseConfig.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let userToken = firebaseConfig.auth().currentUser.getIdToken()
            let userEmail = firebaseConfig.auth().currentUser.email
            let user = userCredential.user;
            let statusAuthentication = true;
            const data ={
                user,
                userToken,
                userEmail,
                statusAuthentication
            }
            return data
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            let statusAuthentication = false;
            const data ={
                errorCode,
                errorMessage,
                statusAuthentication
            }
           return data
        })
    )
} 

export default AuthenticationWhitFirebase;