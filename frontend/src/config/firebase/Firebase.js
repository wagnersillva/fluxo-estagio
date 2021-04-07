import firebase from 'firebase'

const firebaseConfigurations = {
    apiKey: "AIzaSyAsPeOsTZJ1QGSWAnf4tQO_6sh1XgpEF7Q",
    authDomain: "login-with-firebase-e5d72.firebaseapp.com",
    projectId: "login-with-firebase-e5d72",
    storageBucket: "login-with-firebase-e5d72.appspot.com",
    messagingSenderId: "687074454945",
    appId: "1:687074454945:web:70732f7393577a8e242fe0"
  };
  // Initialize Firebase
  
export const firebaseConfig = firebase.initializeApp(firebaseConfigurations);