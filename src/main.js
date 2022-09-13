import { paths } from "./lib/router/routes.js";
import { createLogin } from "./lib/views/login.js";

// let root = () => {
//   let rootLogin = document.getElementById("root");
//   rootLogin.appendChild(signUp());
// };
// root();

const init = () => {
  window.location.href = 'http://localhost:3000/#/';
  const root = document.getElementById('root');
  root.appendChild(createLogin());

  window.addEventListener("hashchange", () => {
    // root.innerHTML = '';
    paths(window.location.hash);
  });
};