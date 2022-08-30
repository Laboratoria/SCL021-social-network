import { auth, logOut } from '../lib/firebase.js';
// import { logOut } from "../lib/firebase.js";

// estructura dentro de post

// cerrar sesion
const posts = () => {
  // Crea Div que contiene Titulo titleContainer
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('mainContainer');

  // Crea logo
  const logo = document.createElement('img');
  logo.src = './assets/audifonito-sin-pixelado.png';
  mainContainer.appendChild(logo);

  const dataUser = document.createElement('h4');
  dataUser.setAttribute('id', 'dataUser');
  // console.log(auth.currentUser.displayName);
  dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${auth.currentUser.displayName} <span class="h4bold">¿Qué estás jugando?</span>` ;
  mainContainer.appendChild(dataUser); 

  const inputMainContainer = document.createElement('div');
  inputMainContainer.setAttribute('class', 'inputMainContainer')
  mainContainer.appendChild(inputMainContainer);

  const inputForPost = document.createElement('input');
  inputForPost.setAttribute('placeholder', 'Cuentanos...');
  inputMainContainer.appendChild(inputForPost);

const buttonPost = document.createElement('button');
   buttonPost.setAttribute('id', 'buttonPost');
   buttonPost.innerHTML = 'Postear';
   inputMainContainer.appendChild(buttonPost);

   const divPosts = document.createElement('div');
   divPosts.classList.add('divPosts')
  mainContainer.appendChild(divPosts);

  const buttonForLogOut = document.createElement('button', 'a');
  buttonForLogOut.setAttribute('id', 'buttonLogOut');
  buttonForLogOut.setAttribute('type', 'click');
  buttonForLogOut.innerHTML = '<a href="#/login ">Cerrar sesión</a>';
  buttonForLogOut.innerHTML = 'Cerrar sesión';
  mainContainer.appendChild(buttonForLogOut);



  // REVISAR
  buttonForLogOut.addEventListener('click', () => {
    logOut();
  });

  return mainContainer;
};

export { posts };
