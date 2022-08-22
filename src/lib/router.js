//ECMAS ESTE ROUTER SI ES
import {login} from "../component/login.js";
import {register} from "../component/register.js";
//import {posts} from "../component/posts.js";
//import {iniciar} from "../src/main.js";


//console.log(login);
//creando rutas de SPA
//crear login
//constructor
//imprimir cosas de login js en contenedor padre en index html
 //constante router para crear varias rutas

//definir hash
const myRouter = (hash) => {
  const rootBox = document.getElementById('mainRoute');
  switch (hash) {
    case '#/':
    case '#/login':
      document.getElementById('mainRoute').innerHTML = '';
      rootBox.appendChild(login());
      break;
    case '#/register':
      document.getElementById('mainRoute').innerHTML = '';
      rootBox.appendChild(register());
      break;
      case '#/posts':
        document.getElementById('mainRoute').innerHTML = '';
        rootBox.appendChild(newContent(getUserData()));
        break;
    default:
      mainRoute.innerHTML = 'Esta página no existe'
  }

};

export {myRouter}

/*
export const myRouter = (hash) => {
    const routeBox = document.getElementById('mainRoute');
//para el login
    switch (hash) {
      case '#/':
        document.getElementById('mainRoute').innerHTML = '';
        routeBox.appendChild(login());
        break;
//para el registro
      case '#/register':
        document.getElementById('mainRoute').innerHTML = '';
        routeBox.appendChild(register());
        break;
//para los posts
      case '#posts/':
        document.getElementById('mainRoute').innerHTML = '';
        routeBox.appendChild(posts());
        break;
    //si escriben mal la URL o la pagina no existe. 
     default:
      mainRoute.innerHTML = 'Esta pagina no existe'
    }
  } 
  */