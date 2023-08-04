import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1teSoxObZOEECx8dIZpoemaauWa8D3Mg",
  authDomain: "discordclone-a64e6.firebaseapp.com",
  projectId: "discordclone-a64e6",
  storageBucket: "discordclone-a64e6.appspot.com",
  messagingSenderId: "142701847003",
  appId: "1:142701847003:web:62fa12c9909447fe6287fe"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
