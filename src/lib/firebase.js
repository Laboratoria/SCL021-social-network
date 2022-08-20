/*

//ECMAS
import { app, analytics} from './firebaseconfig';
import { getAuth, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from "firebase/auth";

//firebase Login
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  export { auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword }
    
    */