// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js';
import { onNavigate } from './routes.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  sendEmailVerification,
  FacebookAuthProvider,
  updateProfile
    
} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDK4nEJBdxtHlVvaSviLxjqxpCs8kdnJBY',
  authDomain: 'technology-red-social.firebaseapp.com',
  projectId: 'technology-red-social',
  storageBucket: 'technology-red-social.appspot.com',
  messagingSenderId: '420784754996',
  appId: '1:420784754996:web:745dbc5c51893af2e55561',
  measurementId: 'G-R840DKR320',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerFace = new FacebookAuthProvider();
const providerFaceL = new FacebookAuthProvider();
const db = getFirestore(app);


export const logOut = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = '#/welcome';
      // console.log(`bai bai`);
    })
    .catch((error) => {
      // console.log(error);
    });
};


/**** Creando usuario Email/Contraseña****/
const auth = getAuth();
export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
	  window.location.hash = 'login#';
	  //updateProfile(auth.currentUser)
      // ...
    })
    .then(function(){
      verificateEmail()
    })
    .catch((error) => {
      console.log(error)
      const errorCode = error.code;
      const errorMessage = error.message;
  });
    
}

export const observer = () => {
  onAuthStateChanged(auth, (userLogin) => {
    /*if (user.userLogin) {*/
    if (userLogin) {
     // window.location.hash = '/wall';
     onNavigate ("/wall")
      const uid = userLogin.uid;
      console.log("este usuario esta activo")
      console.log(`bienvenida ${uid}`);
    /*} else if (!use.userLoginr) {*/
    } else if (!userLogin) {
      console.log("este usuario no esta activo")
      if (window.location.hash !== '#/register') {
        logOut();
      }
    }
  });
}

/**** Ingreso usuario Email/Contraseña****/
export const  userLogin = (emailSing, passwordSing) => {
    if (emailSing === '' || passwordSing === '') {
    alert('email o contraseña no ingresados');
  } else {
    signInWithEmailAndPassword(auth, emailSing, passwordSing)
      .then((userCredential  ) => {
        const user = userCredential.user;
        //window.location.hash = 'wall#';
        //history.pushState({}, "", 'wall#')
        //onNavigate ("/wall")
        console.log(user)
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return errorCode + errorMessage;
        console.log(error)
      });
  }
};

/**** Ingreso usuario con Google****/
export const loginWithGoogle = (googleLogin) => {
  signInWithPopup(auth, provider)
    // getRedirectResult(auth)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // console.log(user.displayName);
      // console.log('usuario creado con google');
      return `${user} + logged in with google + ${token}`;
    })
      .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // console.log(error);
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // console.log('usuario no creado');
      return errorMessage + errorCode + email + credential;
    });
};

/*export const registerPage = () => {
  console.log("diste un click")
};*/

/**** Creando usuario con Google****/
const googleAuth = getAuth();
export function createUserGoogle(googleL) {
  signInWithPopup(googleAuth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    //validar envio de correo en google
    .then(function(){
      verificateEmail()
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

/**** Ingreso usuario con Facebook desde login****/
const authFacebookL = getAuth();
export function loginWithfacebook(facebookLogin) {
  signInWithPopup(authFacebookL, providerFaceL)
    .then((result) => {
      //console.log(result)
      //console.log("facebook")
      // The signed-in user info.
      //const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      //const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      //const errorMessage = error.message;
      // The email of the user's account used.
      //const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
  }

  /**** Envio email de verificacion****/
const authVerification = getAuth();
export function verificateEmail() {
  sendEmailVerification(authVerification.currentUser)
    .then(() => {
      alert('Se ha enviado una confirmación a su correo, por favor válide antes de empezar.');
      // ...
    });
}

/**** Ingreso usuario con Facebook desde  registro****/
const authFacebook = getAuth();
export function facebookLogin(facebookL) {
  signInWithPopup(authFacebook, providerFace)
    .then((result) => {
      //console.log(result)
      //console.log("facebook")
      // The signed-in user info.
      //const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      //const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      //const errorMessage = error.message;
      // The email of the user's account used.
      //const email = error.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
}