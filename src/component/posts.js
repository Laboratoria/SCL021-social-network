
import {auth, logOut, getUserData, verification} from "../lib/firebase.js";
// import { logOut } from "../lib/firebase.js";

//estructura dentro de post
  




//cerrar sesion
const posts = () => {  
    //Crea Div que contiene Titulo titleContainer
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");
  
    //Crea logo
    const logo = document.createElement("img"); 
    logo.src = './assets/logo-gggirls.png';
    titleContainer.appendChild(logo);  
  
    const dataUser = document.createElement('h4');
    dataUser.setAttribute('id', 'dataUser');
    console.log(auth.currentUser.displayName);
    dataUser.innerHTML = `<span class="h4bold">Hola!</span> ${auth.currentUser.displayName}`;
    titleContainer.appendChild(dataUser);

    const buttonForLogOut = document.createElement("button", "a");
        buttonForLogOut.setAttribute("id","buttonLogOut");
        buttonForLogOut.setAttribute("type", "click");
        buttonForLogOut.innerHTML = `<a href="#/login ">Cerrar sesión</a>`;
        buttonForLogOut.innerHTML = 'Cerrar sesión';
        titleContainer.appendChild(buttonForLogOut);


//REVISAR
buttonForLogOut.addEventListener('click', () => {
    logOut();
});
return titleContainer; 
}     
 
 export {posts} 



