import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBEhM5Zr27bHGunFpPohoHWvN124ON8G-E",
    authDomain: "disneyplus-clone-6e0af.firebaseapp.com",
    projectId: "disneyplus-clone-6e0af",
    storageBucket: "disneyplus-clone-6e0af.appspot.com",
    messagingSenderId: "1000698268540",
    appId: "1:1000698268540:web:15429c7bcb8c5ee217b2f9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;