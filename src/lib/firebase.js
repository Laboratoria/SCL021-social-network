
import {app} from './firebaseconfig.js';
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js";
import {getAuth, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

//firebase Login
const auth = getAuth();


  const loginEmailPassword = (email, password, callback) => {
    signInWithEmailAndPassword(auth, email, password)
      /*.then((userCredential) => {
        callback(true);
      })*/
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
  
        if (errorCode === 'auth/user-not-found') {
          alert('Usuario no registrado');
  
        } else if (errorCode === 'auth/wrong-password') {
          alert('Tu contraseña es incorrecta');
        }
        callback(false);
      });
  
  }
/*export const loginEmailPassword = (email, password) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          console.log(userCredential);
          // const user = userCredential.user.email.split('@');
          // const nameUser = user[0];
          // console.log('Hola User!!!!! ', user.uid);
          // const dataUser = document.getElementById('dataUser');
          // dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${nameUser}`;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
    
          if (errorCode === 'auth/user-not-found') {
            alert('usuario no regristrado');
    
          } else if (errorCode === 'auth/wrong-password') {
            alert('Contraseña incorrecta');
          }
          callback(false);
        });} */
    

  export {
    auth, loginEmailPassword, createUserWithEmailAndPassword, 
    signInWithEmailAndPassword }

  //Login

  //crear una función aquí y exportarla
  //la función debe mandar los datos a database creo
  //const db
  //export const saveCredential (email,password) =>
  //addDoc(collection(db, "credenciales"), {email, password})


  
  //Register