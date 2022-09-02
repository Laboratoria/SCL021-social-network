/* eslint import/no-unresolved: [2, { ignore: ['gstatic'] }] */
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  sendEmailVerification,
} from './firebasemodules.js';

import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";

import { app } from './firebaseconfig.js';

// -----------Firebase Login autorización
const auth = getAuth();
const provider = new GoogleAuthProvider();

const getUserData = () => auth.currentUser;

// let user = ;

// -----------Ingresar con Email y contraseña
const loginEmailPassword = (email, password, callback) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      callback(true);
      return userCredential;
      // console.log('entraste jeje');
    })
    .catch((error) => {
      const errorCode = error.code;
      //  const errorMessage = error.message;
      if (errorCode === 'auth/user-not-found') {
        /*  alert(errorCode); */
        return errorCode;
      }
      if (errorCode === 'auth/wrong-password') {
        /*  alert(errorCode); */
        return errorCode;
      }
      callback(false);
      return errorCode;
    });
};

// ----------- Enviar correo de verificacion
const emailVerification = () => {
  sendEmailVerification(auth.currentUser).then(() => {
    /* alert(
      'Se ha enviado un mensaje de verificación a tu correo electrónico'); */
  });
};

// -----------Registrarse con Email y Contraseña
const registerEmailPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.hash = '#/posts';
      // Signed in
      const user = userCredential.user;
      emailVerification(auth);
      //  const userId = user.uid;
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(user);
      return errorCode;
    });
};

// -------- Permite verificar si hay un usuario conectado
const verification = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentUser = auth.currentUser;
      // console.log(user);
      window.location.hash = '#/posts';
      return currentUser;
    }
    // window.alert('no estás logueada');
    window.location.hash = '#/login';
    return 'not logged';
    // location.reload();
  });
};

// -------------- Cerrar sesión

const logOut = () => {
  signOut(auth)
    // alert('tesalistes')
    .then(() => {
      window.location.hash = '#/login';
    })
    .catch((error) => error);
};

// ----------- Ingreso con Google
const signGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
      // console.log('resultó google jeje');
      return credential;
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      return errorCode;
    });
};

// ----------- Reestablecer contraseña olvidada
const resetPass = (email, callback) => {
  sendPasswordResetEmail(auth, email)
    .then((userCredential) => {
      callback(true);
      return userCredential;
      // console.log('entraste jeje');
    })
    .catch((error) => {
      callback(false);
      // const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
};

const db = getFirestore();

//TAREAS PARA MAÑANA
//ir a buscar el input y ponerlo en description
//trabajar en las reglas de firestore para que pida autenticación
//enchufar los otros atributos, no sé (?)
//TAREA EMOCIONANTE es crear funcion que imprima posts
//que los appendchildee y que sea un foreach para cada post del database
//jejeje saludos emi <3

const newPosts = async (textInput) => {
  const user = auth.currentUser;
  const userName = user.displayName;
  if (user !== null) {
    const docRef = await addDoc(collection(db, "google"), {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      description: [textInput],
      likes: [],
      likesCount: 0,
      date: Timestamp.fromDate(new Date()), 
    });
    console.log("Document written with ID: ", docRef.id);
  } 
};

export {
  db,
  app,
  auth,
  loginEmailPassword,
  logOut,
  verification,
  registerEmailPassword,
  signGoogle,
  getUserData,
  resetPass,
  newPosts
};
