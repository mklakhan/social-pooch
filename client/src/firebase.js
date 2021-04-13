import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyCXYPhEAT9_5Z0WzHHHtERuROmKkkhLMz0",
    authDomain: "social-pooch-production.firebaseapp.com",
    projectId: "social-pooch-production",
    storageBucket: "social-pooch-production.appspot.com",
    messagingSenderId: "944905579733",
    appId: "1:944905579733:web:1f5a908ff7f3e8eabd465c",
    measurementId: "G-388FE7DWMJ"


})

export const auth = firebaseConfig.auth()
export default firebaseConfig