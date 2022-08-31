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
  
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import { app } from './firebaseconfig.js';
// importar sendPasswordResetEmail y sendEmailVerification

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
        alert(errorCode);
        return errorCode;
       
      }
      if (errorCode === 'auth/wrong-password') {
        alert (errorCode);
        return errorCode;
      }
      callback(false);
      return errorCode;
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

// ----------- Enviar correo de verificacion 
const emailVerification = () => { 
  sendEmailVerification(auth.currentUser) 
    .then(() => {
      alert('Se ha enviado un mensaje de verificación a tu correo electrónico, por favor revisalo y verifica tu registro. Luego inicia sesión.');
    });
}
/* function emailVerification(auth) {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      alert('Se ha enviado un mensaje de verificación a tu correo electrónico, por favor revisalo y verifica tu registro. Luego inicia sesión.');
    });
} */
// -------- Permite verificar si hay un usuario conectado 
const verification = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const currentUser = auth.currentUser; console.log(user);
      window.location.hash = '#/posts';
      return currentUser;
      
    }
    // window.alert('no estás logueada');
    window.location.hash = '#/login';
    return ('not logged');
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

//PENDIENTE DEBO VER
// ------------- Almacenamos el post --------------------

/*const googleUsers = async () => {
  const user = auth.currentUser;
  if (user !== null) {
    const docRef = await addDoc(collection(db, 'googleUsers'), {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      photo: user.photoURL,
    });
  }
};

// -------- Agregar data de post ------
export const addData = async (descripcion, titulo) => {
  const docRef = await addDoc(collection(db, 'publicaciones'), {
    userId: auth.currentUser.uid,
    name: auth.currentUser.displayName, 
    photo: auth.currentUser.photoURL,
    description: descripcion,
    titulos: titulo,
    likes: [],
    likesCounter: 0,
    datePosted: Timestamp.fromDate(new Date()),
  });
  return docRef;
};
*/

//---------- Publicar en el posts ----------------------
/*export const postOnTheWall = async () => {

  const allPost = query(collection(db, "Post"), orderBy('datepost', 'desc'));
  const querySnapshot = await getDocs(allPost);
  let html = '';
  querySnapshot.forEach((doc) => {
    const post = doc.data();

    html += `
    <div class="mainDash_board_publications_content">
      <div class="mainDash_board_publications_content_user">
        <h6>${post.name} publicó:</h6>`;

    if (post.uid === auth.currentUser.uid) {
      html += `
        <button type="btn" class="btnDelete" value="${doc.id}" data-id="myId"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <p class="mainDash_board_publications_content_text">${post.description}</p>
      <button class="btn-like mainDash_board_publications_content_starR" value="${doc.id}">
      <span id="star" class="star"><i class="fa-regular fa-star"></i></span> ${post.likesCounter} Likes</button>
    </div>`;
    } else {
      html += `
      </div>
      <p class="mainDash_board_publications_content_text">${post.description}</p>
      <button class="btn-like mainDash_board_publications_content_starR" value="${doc.id}">
      <span id="star" class="star"><i class="fa-regular fa-star"></i></span> ${post.likesCounter} Likes</button>
    </div>`;
    }
  });
  document.getElementById('container_posts').innerHTML = html;

  const btnDelete = document.querySelectorAll('.btnDelete');
  btnDelete.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (confirm("¿Estás segura de eliminar esta publicación?")) {
        deletePost(btn.value);
      }
    });
  });
  const likeBtn = document.querySelectorAll('.btn-like');
  likeBtn.forEach((btnL) => {
    btnL.addEventListener('click', async () => { */



export {
  app,
  auth,
  loginEmailPassword,
  logOut,
  verification,
  registerEmailPassword,
  signGoogle,
  getUserData,
  resetPass

};
