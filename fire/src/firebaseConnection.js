import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyAoDjn1SSbAnObnppmGZ4yaMTUaLjIHUWk",
    authDomain: "curso-1fb59.firebaseapp.com",
    projectId: "curso-1fb59",
    storageBucket: "curso-1fb59.appspot.com",
    messagingSenderId: "94656076618",
    appId: "1:94656076618:web:a70d51c4e4a13ff4f67fb3",
    measurementId: "G-LBL9MY68SE"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
export default firebase;
  