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

export {
  app,
  auth,
  loginEmailPassword,
  logOut,
  verification,
  registerEmailPassword,
  signGoogle,
  getUserData,
  resetPass,
};
