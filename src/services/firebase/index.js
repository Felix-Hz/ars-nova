// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChZgkNWZ0bcZPNlUZsoUWdfhjfxD5HdRM",
  authDomain: "ars-nova-aef39.firebaseapp.com",
  projectId: "ars-nova-aef39",
  storageBucket: "ars-nova-aef39.appspot.com",
  messagingSenderId: "995172657204",
  appId: "1:995172657204:web:a99d6d6fea802c78320261",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Getting the ddbb
export const db = getFirestore(app);
