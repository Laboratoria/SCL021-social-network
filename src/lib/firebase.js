import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword , sendSignInLinkToEmail } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
const provider = new GoogleAuthProvider();
import { auth, db } from './config.js';
import {
  collection, addDoc, query, onSnapshot,  // collection, query, onSnapshot
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
import { changeRoute } from './ruta.js';
//import { db } from './config.js';
//import { showPosts } from '../component/wall.js';


export const createUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });



export const loginWithGoogle = () => {
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      changeRoute("#/wall")
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(error)
    });
}


// Add a new document in collection "cities"
async function createPost(texto) {
  console.log(db);
  await addDoc(collection(db, "post"), {
    content: texto,
  });

}


const unsub = (callback) => {
  onSnapshot(query(collection(db, "post")), (docs) => {
    docs.forEach(doc => {
      //console.log("Current data: ", doc.data());
      callback(doc.data())
    });

  });
}

//export const createUser = (email, password) =>
export const ingresarConUsuario = (email, password) => {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export const mailVerificacion = ();
sendSignInLinkToEmail(auth, email, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });

export { createPost, unsub };
