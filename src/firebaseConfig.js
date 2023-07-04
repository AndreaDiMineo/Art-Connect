import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
const firebaseConfig2 = {
  apiKey: "AIzaSyA1v9aX7PdJEcD0XB_agjPib2uAGvga0WE",
  authDomain: "museum-2023.firebaseapp.com",
  projectId: "museum-2023",
  storageBucket: "museum-2023.appspot.com",
  messagingSenderId: "643310035784",
  appId: "1:643310035784:web:c25ef8cb54825c9bb7097d",
  measurementId: "G-7KDP6CMWS3",
};

export const appDb = firebase.initializeApp(firebaseConfig2, "hello");
