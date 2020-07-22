import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCtTFVQs444atjyyiNUEioIE3vfcdE09zc",
    authDomain: "clone-messenger-fd60e.firebaseapp.com",
    databaseURL: "https://clone-messenger-fd60e.firebaseio.com",
    projectId: "clone-messenger-fd60e",
    storageBucket: "clone-messenger-fd60e.appspot.com",
    messagingSenderId: "464062282057",
    appId: "1:464062282057:web:2bfcfe24f839ae7136c298",
    measurementId: "G-2E24NGKXR5"
});

const db = firebaseApp.firestore();

export default db;