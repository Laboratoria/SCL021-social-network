// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";


// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXWRPMHayz45z1jGWzz9qXoIFQDHcRhaI",
  authDomain: "catbook-aea4b.firebaseapp.com",
  projectId: "catbook-aea4b",
  storageBucket: "catbook-aea4b.appspot.com",
  messagingSenderId: "1003768129096",
  appId: "1:1003768129096:web:b2f16b88bf815f720a5a7d",
  measurementId: "G-9CB45JTZBF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);