//ECMAS
import {login} from "./component/login.js";
import {register} from "./component/register.js";
import {posts} from "./component/posts.js";
//import {headerLogo} from "./lib/index.js"

//console.log(login);
//creando rutas de SPA
//crear login
//constructor
//imprimir cosas de login js en contenedor padre en index html
 //constante router para crear varias rutas

//definir hash
console.log(register);

const myRouter = (hash) => {
    const routeBox = document.appendChild("div");
    console.log(routeBox);
//para el login
    switch (hash) {
      case '#/':
        document.getElementById('mainRoute').innerHTML = '';
        routeBox.appendChild(login());
        rootBox.appendChild(headerLogo());
        break;
//para el registro
      case '#/register':
        document.getElementById('mainRoute').innerHTML = '';
        routeBox.appendChild(register());
        rootBox.appendChild(headerLogo());
        break;
//para los posts
      case '#posts/':
        document.getElementById('mainRoute').innerHTML = '';
        routeBox.appendChild(posts());
        rootBox.appendChild(headerLogo());
        break
        
    //si escriben mal la URL o la pagina no existe. 
     default:
      mainRoute.innerHTML = 'Esta pagina no existe'
    }
};

//para inicializar la ruta.
const iniciar = () => {
    let mainRoute = document.getElementById("mainRoute")
    mainRoute.append(login());
 } 
 console.log(iniciar);
 window.addEventListener('hashchange', () => {
    myRouter(window.location.hash);
 });
 window.addEventListener('load',iniciar);