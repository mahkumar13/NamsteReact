// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO5uHsk2rOpKjStctxUxo90qubyd1RdBM",
  authDomain: "netflixgpt-9ff73.firebaseapp.com",
  projectId: "netflixgpt-9ff73",
  storageBucket: "netflixgpt-9ff73.appspot.com",
  messagingSenderId: "115633084242",
  appId: "1:115633084242:web:1a2f545bae872bbad48c8b",
  measurementId: "G-QL9RLDM48Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
 export const auth = getAuth();