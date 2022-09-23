// // Este es el punto de entrada de tu aplicacion
import { login } from "./component/login.js";
import { changeRoute } from './lib/ruta.js';

// function start (){
    
// }
// start();

window.addEventListener('popstate', changeRoute => {    
    console.log(changeRoute.state); 
    // state data of history (remember history.state ?)
})

window.addEventListener("load", ()=> {
    document.getElementById("root").append(login());
    window.addEventListener("hashchange", () =>{
        console.log(window.location.hash);
        changeRoute(window.location.hash)
    })
})

