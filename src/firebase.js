// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA-g9z2INCzoEDwaRf1_ie4-4LxXdCOPcY",
	authDomain: "chatapp-d96e7.firebaseapp.com",
	projectId: "chatapp-d96e7",
	storageBucket: "chatapp-d96e7.appspot.com",
	messagingSenderId: "582665611429",
	appId: "1:582665611429:web:1e1961cc391058e305c54c",
	measurementId: "G-JBQVRDFBCP"
  };
initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore();

export { auth, provider, db };
