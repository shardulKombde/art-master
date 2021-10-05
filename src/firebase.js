// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBy0KCFc9pEMRncBeavk8m4QUOU8LN3GuU",
    authDomain: "artistic-968fa.firebaseapp.com",
    projectId: "artistic-968fa",
    storageBucket: "artistic-968fa.appspot.com",
    messagingSenderId: "957390588073",
    appId: "1:957390588073:web:5439f3df431f40758581b8",
    measurementId: "G-F4QX67Z8WY"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db , auth }