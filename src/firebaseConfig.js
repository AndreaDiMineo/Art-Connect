import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "museum-2023.firebaseapp.com",
  projectId: "museum-2023",
  storageBucket: "museum-2023.appspot.com",
  messagingSenderId: "643310035784",
  appId: "1:643310035784:web:XXXXXXXXXXXXXXXX",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();
export { firebase, db, storage };
