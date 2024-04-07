import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

 const firebaseConfig = {
  apiKey: "AIzaSyDlgAne8zZxWWSpIlFtbgdxSBSwACuLvws",
  authDomain: "bloom-2cd2d.firebaseapp.com",
  projectId: "bloom-2cd2d",
  storageBucket: "bloom-2cd2d.appspot.com",
  messagingSenderId: "605497377282",
  appId: "1:605497377282:web:75d1fb7f2fac91c53b1d1b",
  measurementId: "G-P1SBXBET31"
 }

 let app;
 if (firebase.apps.length === 0) {
   app = firebase.initializeApp(firebaseConfig);
 } else {
   app = firebase.app()
 }
 
 const auth = firebase.auth()
 
 export { auth };



