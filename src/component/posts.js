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

/* WIP EMI Y CARLA

function navBar(){
  const nav = document.createElement('nav')
  nav.setAttribute('class', 'navbar')
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("Four"));
  ul.appendChild(li)
  
  return navBar
}
*/

/*
If you need to set the id , you can do so by

li.setAttribute("id", "element4"); */


// cerrar sesion
const posts = () => {

  // Crea Nav Bar 
  const navbarContainer = document.createElement('div');
  navbarContainer.setAttribute('id','navbarContainer');
  mainRoute.appendChild(navbarContainer);

  const logo = document.createElement('img');
  logo.setAttribute('class', 'logogg');
  logo.src = './assets/audifonito-sin-pixelado.png';
  navbarContainer.appendChild(logo);

  const title = document.createElement('h2');
  title.innerHTML = 'GGgirls';
  navbarContainer.appendChild(title);
  
  const buttonForLogOut = document.createElement('button', 'a');
  buttonForLogOut.setAttribute('id', 'buttonLogOut');
  buttonForLogOut.setAttribute('type', 'click');
  buttonForLogOut.innerHTML = '<a href="#/login ">Cerrar sesión</a>';
  buttonForLogOut.innerHTML = 'Cerrar sesión';
  navbarContainer.appendChild(buttonForLogOut);

  // Crea Div grande que contiene todos los posts
  const postsContainer = document.createElement('div');
  postsContainer.classList.add('postsContainer');

  // Crea Div de izquierda y sus dos hijos User y Trending
  const userDataContainer = document.createElement('div');
  userDataContainer.setAttribute('class','userDataContainer');
  postsContainer.appendChild(userDataContainer); 
  
  const userDataDiv = document.createElement('div');
  userDataDiv.setAttribute('id','userDataDiv');
  userDataDiv.classList.add('insidePost');
  userDataContainer.appendChild(userDataDiv); 

  const trendingDataDiv = document.createElement('div');
  trendingDataDiv .setAttribute('id','trendingDataDiv');
  trendingDataDiv.classList.add('insidePost');
  userDataContainer.appendChild(trendingDataDiv ); 

  // Crea Div padre en donde se publica y muestran los Posts
  const divPosts = document.createElement('div');
  divPosts.classList.add('divPosts');
  postsContainer.appendChild(divPosts);

  const dataUser = document.createElement('h4');
  dataUser.setAttribute('id', 'dataUser');
  //console.log(auth.currentUser.displayName);
  let showName = auth.currentUser.displayName;
  
  if (showName == null) {
    let emailAdress = auth.currentUser.email;
    showName = emailAdress.substring(0, emailAdress.lastIndexOf("@"));
  }
  //if displayName = null, mostrar email hasta la @
  dataUser.innerHTML = `<span class="h4bold">¡Hola</span> ${showName}! <br> <span class="h4bold">¿Qué estás jugando?</span>` ;
  // prueba
  console.log(auth.currentUser);
  divPosts.appendChild(dataUser); 

  // caja principal
  const inputMainContainer = document.createElement('div');
  inputMainContainer.setAttribute('class', 'inputMainContainer')
  divPosts.appendChild(inputMainContainer);

 let showPicture = auth.currentUser.photoURL;
  
  
  console.log(showPicture)
  

/* const profileNull = document.createElement('img');
  profileNull.setAttribute('class', 'nulito');
  profileNull.src = './assets/audifonito-sin-pixelado.png'; */
  // inputMainContainer.appendChild(profileNull);
  
if (showPicture == null) {
    let profileNull = './assets/audifonito-sin-pixelado.png';
    showPicture = profileNull;
   // let = auth.currentUser.photoURL;
  }

  const profilePicturePost = document.createElement('img');
  profilePicturePost.setAttribute('class', 'profilePicturePost ');
  profilePicturePost.src = ` ${showPicture}`;
  inputMainContainer.appendChild(profilePicturePost);

 
  const inputForPost = document.createElement('input');
  inputForPost.setAttribute('placeholder', 'Cuentanos...');
  inputMainContainer.appendChild(inputForPost);

const buttonPost = document.createElement('button');
   buttonPost.setAttribute('id', 'buttonPost');
   buttonPost.innerHTML = 'Postear';
   inputMainContainer.appendChild(buttonPost);

   // Funcionalidad
  buttonForLogOut.addEventListener('click', () => {
    logOut();
  });

  return postsContainer;
};


// fotico de perfil

/*export const newPost = () => {
  const containerPost = document.getElementById('postContainer');
  containerPost.innerHTML = '';
  const postContent = (data) => {
    let themePost = `<div class="home__publicaciones">
    <div class="containerImgUsuaria">
      <img class="home__imgUsuaria" src="${data.element.data.photo}" alt="Img-perfil">
    </div>
    <div class="home__inputPublicar" id="editarPost">
     <div class="containerNameUsarieYdelete">
        <h3 class="nombreUsuarie">${data.element.data.name}</h3>
        `
return newPost

  }}; */
export { posts }
