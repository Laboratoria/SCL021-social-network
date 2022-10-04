import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithRedirect,
	getRedirectResult,
	FacebookAuthProvider,
	signOut,
	onAuthStateChanged,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { firebaseConfig } from './firebaseConfig.js';

import {
getFirestore,
collection,
onSnapshot,
addDoc,
doc
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const providerFacebook = new FacebookAuthProvider(app);
const db = getFirestore(app);



export {
	initializeApp,
	signInWithEmailAndPassword,
	auth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	provider,
	signInWithRedirect,
	getRedirectResult,
	FacebookAuthProvider,
	providerFacebook,
	signOut,
	db,
	onSnapshot,
	collection,
	onAuthStateChanged,
    sendPasswordResetEmail,
	doc
};