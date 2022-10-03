import {
  signInWithEmailAndPassword,
  auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  getRedirectResult,
  signInWithRedirect,
  provider,
  signInWithPopup,
  FacebookAuthProvider,
  providerFacebook,
  //db,
  signOut,
  sendPasswordResetEmail
} from "./init.js";

//Función de promesa para CREAR usuario con email y contraseña
export const signCreate = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

//Funcion y promesa para ingresar a la cuenta
export const signInFunction = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      location.hash = "/feed";
    })
    .catch((error) => {
      console.log(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};


// Function redirect to google
export const accessGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      console.log(credential);
      const token = credential.accessToken;
      const user = result.user;
      location.hash = "/feed";
      // ...
    })
    .catch((error) => {

      const errorMessage = error.message;
      alert('No fue posible ingresar con Google');
    });
};

export const loginWithFacebook = () => {
  signInWithPopup(auth, providerFacebook)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      console.log(credential);
      const accessToken = credential.accessToken;

      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
};
export const resetPass = (email, callback) => {
  sendPasswordResetEmail(auth, email)
    .then((userCredential) => {
      callback(true);
      alert('We sent you an email, please check your spam folder!');
      return userCredential;
      // console.log('entraste jeje');
    })
    .catch((error) => {
      callback(false);
      alert("We couldn't recover your password");
      // const errorCode = error.code;
      const errorMessage = error.message;
      return errorMessage;
    });
};

// collection 

/* const getCollection = () => {

  const query = query(collection(db, "posts"));
  const unsubscribe = onSnapshot(query, (querySnapshot) => {
     const myPosts = [];
     querySnapshot.forEach((doc) => {
     myPosts.push(doc.data().name);
  });
  console.log("Current cities in CA: ", cities.join(", "));
});

} */


// Log out
export const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      location.hash = "#/login"
    })
    .catch((error) => {
      // An error happened.
    });
};
