import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCaeVfpzotiFXWX_JN649vAolyjklGtfPM",
  authDomain: "linkedin-clone-ead79.firebaseapp.com",
  projectId: "linkedin-clone-ead79",
  storageBucket: "linkedin-clone-ead79.appspot.com",
  messagingSenderId: "877243852072",
  appId: "1:877243852072:web:0848dd32737ac456d29c1d",
  measurementId: "G-VEHLLFYKCH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
