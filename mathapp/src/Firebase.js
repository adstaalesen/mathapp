// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {collection, query, orderBy, onSnapshot, where, getDocs} from "firebase/firestore"
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8iFPGE8oC_BTLM7DzdZfAKaAoT3KX4-0",
  authDomain: "letus-math.firebaseapp.com",
  projectId: "letus-math",
  storageBucket: "letus-math.appspot.com",
  messagingSenderId: "1016397280787",
  appId: "1:1016397280787:web:dd8af03fcf991937b5f1e6",
  measurementId: "G-2ZJQFJH58E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}
