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
  dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${auth.currentUser.displayName}`;
  mainContainer.appendChild(dataUser);

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
