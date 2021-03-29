import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const  firebaseConfig = {
    apiKey: "AIzaSyBSEPI2Z0FRUJ9iKXlSgC-li7OVAlWhWo4",
    authDomain: "react-my-one.firebaseapp.com",
    projectId: "react-my-one",
    storageBucket: "react-my-one.appspot.com",
    messagingSenderId: "813239529077",
    appId: "1:813239529077:web:5c36286d9ddf5ede47523c"
    };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}