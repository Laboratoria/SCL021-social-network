import { auth, logOut } from '../lib/firebase.js';

// estructura dentro de post
/*const nav = document.createElement('nav') 
nav.innerHTML = `<ul>
<li>Perfil</li>
<li>Tendencias</li>
<li>Amigos</li> 
<li>Cerrar Sesión</li>
</ul>`
*/


/*function navBar(){
  const nav = document.createElement('nav')
  nav.setAttribute('class', 'navPosts')
  let showNavBar = document.getElementsByClassName('navPosts').innerHTML =
  `<ul>
    <li>Perfil</li>
    <li>Tendencias</li>
    <li>Amigos</li> 
    <li>Cerrar Sesión</li>
  </ul>`
  
  return navBar
} */

// cerrar sesion
const posts = () => {
  // Crea Div que contiene Titulo titleContainer
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('postsContainer');


// Crea Nav Bar 

  // Crea logo
  const logo = document.createElement('img');
  logo.setAttribute('class', 'logogg')
  logo.src = './assets/audifonito-sin-pixelado.png';
  postsContainer.appendChild(logo);


  const dataUser = document.createElement('h4');
  dataUser.setAttribute('id', 'dataUser');
  // console.log(auth.currentUser.displayName);
  dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${auth.currentUser.displayName} <span class="h4bold">¿Qué estás jugando?</span>` ;
  postsContainer.appendChild(dataUser); 

  const inputMainContainer = document.createElement('div');
  inputMainContainer.setAttribute('class', 'inputMainContainer')
  postsContainer.appendChild(inputMainContainer);

  const inputForPost = document.createElement('input');
  inputForPost.setAttribute('placeholder', 'Cuentanos...');
  inputMainContainer.appendChild(inputForPost);

const buttonPost = document.createElement('button');
   buttonPost.setAttribute('id', 'buttonPost');
   buttonPost.innerHTML = 'Postear';
   inputMainContainer.appendChild(buttonPost);

   const divPosts = document.createElement('div');
   divPosts.classList.add('divPosts')
  postsContainer.appendChild(divPosts);

  const buttonForLogOut = document.createElement('button', 'a');
  buttonForLogOut.setAttribute('id', 'buttonLogOut');
  buttonForLogOut.setAttribute('type', 'click');
  buttonForLogOut.innerHTML = '<a href="#/login ">Cerrar sesión</a>';
  buttonForLogOut.innerHTML = 'Cerrar sesión';
  postsContainer.appendChild(buttonForLogOut);



  // REVISAR
  buttonForLogOut.addEventListener('click', () => {
    logOut();
  });

  return postsContainer;
};

export { posts };
