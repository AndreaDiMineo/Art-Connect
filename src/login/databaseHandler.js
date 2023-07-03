import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuS2XlUhzGh1RT75BAbDgoHmk2bO-NMgQ",
  authDomain: "artconnect-51cd2.firebaseapp.com",
  projectId: "artconnect-51cd2",
  storageBucket: "artconnect-51cd2.appspot.com",
  messagingSenderId: "626833594338",
  appId: "1:626833594338:web:aa3d20cd30e10c7c2acbbb",
  measurementId: "G-HQ7GSTC4YX",
};
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); // if already initialized, use that one
}

export default app;
