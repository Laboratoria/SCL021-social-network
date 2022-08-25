import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import { app } from './firebaseconfig.js';

// -----------Firebase Login autorización
const auth = getAuth();
const provider = new GoogleAuthProvider();

const getUserData = () => auth.currentUser;
// let user = ;

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
        return errorCode;
      }
      if (errorCode === 'auth/wrong-password') {
        return errorCode;
      }
      callback(false);
      return 'hola';
    });
};

// console.log(verification.currentUser);
// -------------- Cerrar sesión
const logOut = () => {
  signOut(auth)
    .then(() => {
      // window.location.hash = '#/login';
      // console.log('cerraste sesion');
      /* if (user.auth.currentUser === user) {
      await user.auth.signOut(); */
    })
    .catch((error) => error);
};

// -------- Permite verificar si hay un usuario conectado -----------
const verification = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // console.log('el estado del usuario cambio', user);
      const currentUser = auth.currentUser;
      // const uid = user.uid;
      // console.log('te logeastes');
      // console.log(currentUser);
      return currentUser;
    }
    if (window.location.hash === '#/login') {
      logOut();
      // console.log('USUARIO NO LOGGEADO', user);
      // User is signed out
    }
    return 'hola';
  });
};
const registerEmailPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.hash = '#/posts';
      // Signed in
      const user = userCredential.user;
      // const userId = user.uid;
      // console.log(user);
      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      // const errorMessage = error.message;
      // console.log(user);
      return errorCode;
    });
};

// Igreso con google gg
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

export {
  app,
  auth,
  loginEmailPassword,
  logOut,
  verification,
  registerEmailPassword,
  signGoogle,
  getUserData,
};
