import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyD4zjVBeHSdl4ZU6xBUrIJ4UGIdM7P8eGI",
  authDomain: "pppp-a2a1b.firebaseapp.com",
  databaseURL: "https://pppp-a2a1b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pppp-a2a1b",
  storageBucket: "pppp-a2a1b.appspot.com",
  messagingSenderId: "623104743181",
  appId: "1:623104743181:web:ae0dc419a54a413f648244"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();

export default db;
