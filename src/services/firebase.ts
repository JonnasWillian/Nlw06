import firebase  from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyASn26MlzBVlvu61nDmSkGBIXxAg1G5WGc",
    authDomain: "letmeask-projeto-nlw.firebaseapp.com",
    projectId: "letmeask-projeto-nlw",
    storageBucket: "letmeask-projeto-nlw.appspot.com",
    messagingSenderId: "301604003037",
    appId: "1:301604003037:web:700ae98a1f1160bf9fcf34",
    measurementId: "G-B66CRK0JP9"
  };

  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth()
  const database = firebase.database()
  
  
  export { firebase, auth, database };