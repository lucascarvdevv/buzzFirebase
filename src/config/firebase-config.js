import firebase from "firebase/compat/app"
import "firebase/compat/storage";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBqvkh1Ko3LyA73R597R4udsYDtYICA-18",
  authDomain: "buzz-5f794.firebaseapp.com",
  projectId: "buzz-5f794",
  storageBucket: "buzz-5f794.appspot.com",
  messagingSenderId: "168474885950",
  appId: "1:168474885950:web:1f48c6e3f09261de16f66f"
};


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
 
  export default firebase