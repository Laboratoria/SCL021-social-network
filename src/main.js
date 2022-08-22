import {myRouter} from "./lib/router.js"; 
//import {login} from "./component/login.js";
// cargamos la pantalla de login 


const init = () => {
  window.location.hash = '#/login';
  myRouter(window.location.hash);
};

init()
 
 window.addEventListener('hashchange', () => {
  myRouter(window.location.hash);
}); 