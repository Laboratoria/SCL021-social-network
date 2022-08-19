import { myRouter } from "./lib/router.js";
import { login } from "./component/login.js";
// cargamos la pantalla de login 


const iniciar = () => {
   document.getElementById("mainRoute").appendChild(login());
 } 
 window.addEventListener('hashchange', () => {
   myRouter(window.location.hash);
});

window.addEventListener('load',iniciar);
