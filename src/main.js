import { paths } from "./lib/router/routes.js";
import { createLogin } from "./lib/views/login.js";

window.addEventListener("load", () => {
  window.location.href = "http://localhost:3000/#/";
  const root = document.getElementById("root");
  console.log("root", root);
  // root.appendChild(createLogin());
  paths(window.location.hash);
  window.addEventListener("hashchange", () => {
    
    paths(window.location.hash);

  });
});