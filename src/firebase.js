import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyArscFtSgt_CmVI18pM_MkMo-TRowHUol8",
  authDomain: "discord-clone-8ef22.firebaseapp.com",
  projectId: "discord-clone-8ef22",
  storageBucket: "discord-clone-8ef22.appspot.com",
  messagingSenderId: "438258908178",
  appId: "1:438258908178:web:38f2b0d1ade488b27d6ccb",
  measurementId: "G-NJE30KLXGZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
