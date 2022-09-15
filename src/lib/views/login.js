import { paths } from "../router/routes.js";
import { signUp } from "./account.js";

export const createLogin = () => {

  // Animación splash screen out

  setTimeout(() => {
    init.classList.add('display-none');
  }, 2000);

  const root = document.createElement("div");
  // Creando div padre animación
  const init = document.createElement("div");
  init.className = "init";
  root.appendChild(init);
  // Creando hijo animación
  const fadeIn = document.createElement("div");
  fadeIn.className = "fadeIn";
  init.appendChild(fadeIn);
  // Creando imagen logo
  const logoAnimation = document.createElement("img");
  logoAnimation.className = "logoAnimation";
  logoAnimation.setAttribute("src", "img/logo.png");
  fadeIn.appendChild(logoAnimation);
  // Creando h1
  const titleHeader = document.createElement("h1");
  titleHeader.className = "title-header";
  fadeIn.appendChild(titleHeader);
  // Creando WELCOME
  const titleInit = document.createElement("span");
  titleInit.innerText = "WELCOME";
  titleInit.className = "tittle-init";
  titleHeader.appendChild(titleInit);
  // Párrafo TO
  const toInit = document.createElement("p");
  toInit.innerText = "TO";
  titleInit.appendChild(toInit);
  // Párrafo diShared
  const disharedInit = document.createElement("p");
  disharedInit.innerText = "diShared";
  disharedInit.className = "dishared-init";
  titleInit.appendChild(disharedInit);

  // Div padre 2
  const logo = document.createElement("div");
  logo.className = "name-social";
  root.appendChild(logo);
  // Agregar logo diShared
  const imgLogo = document.createElement("img");
  imgLogo.className = "img-logo";
  imgLogo.setAttribute("src", "img/logo.png");
  logo.appendChild(imgLogo);
  console.log("entra a create login");
  // Name app diShared
  const texLogo = document.createElement("h1");
  texLogo.innerText = "diShared";
  texLogo.className = "text-logo";
  logo.appendChild(texLogo);

  //Creando contenedor de la vista
  const container = document.createElement("div");
  container.className = "container";
  root.appendChild(container);
  //Creando contenedor del form
  const formContainer = document.createElement("form");
  formContainer.className = "form";
  container.appendChild(formContainer);
  //Creando H1 del form
  const title = document.createElement("h1");
  title.setAttribute("class", "title");
  title.textContent = "Hi there🥂";
  formContainer.appendChild(title);

  // Creando Label que contiene input de Email
  const inputLogin = document.createElement("label");
  inputLogin.className = "text-login";
  inputLogin.innerText = "Email";
  formContainer.appendChild(inputLogin);

  const directionMail = document.createElement("input");
  directionMail.setAttribute("type", "email");
  directionMail.setAttribute("placeholder", "dishared@gmail.com");
  directionMail.className = "input-field";
  directionMail.setAttribute("id", "user-email");
  inputLogin.appendChild(directionMail);

  // Creando Label que contiene input de Email
  const password = document.createElement("label");
  password.className = "text-login";
  password.innerText = "Password";
  formContainer.appendChild(password);
  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("placeholder", "password 🔒");
  inputPassword.className = "input-field";
  inputPassword.setAttribute("id", "user-password");
  password.appendChild(inputPassword);

  //Creando Botón
  const btnLogin = document.createElement("button");
  btnLogin.setAttribute("id", "btn-login");
  btnLogin.innerText = "Log In";
  formContainer.appendChild(btnLogin);
  // Creando el or Use
  const orUse = document.createElement("h4");
  orUse.innerText = "Or Use";
  orUse.className = "or-login";
  formContainer.appendChild(orUse);
  // Creando Div para Red Social
  const socialDiv = document.createElement("div");
  socialDiv.className = "social";
  formContainer.appendChild(socialDiv);
  // Crear icono de Facebook
  const facebookIcon = document.createElement("a");
  facebookIcon.setAttribute("href", "#");
  socialDiv.appendChild(facebookIcon);
  const facebook = document.createElement("i");
  facebook.className = "fa-brands fa-facebook fa-2x";
  facebookIcon.appendChild(facebook);
  // Crear icono de google
  const googleIcon = document.createElement("a");
  googleIcon.setAttribute("href", "#");
  socialDiv.appendChild(googleIcon);
  const google = document.createElement("i");
  google.className = "fa-brands fa-google-plus fa-2x";
  googleIcon.appendChild(google);
  // Para registrarse
  const registered = document.createElement("h5");
  registered.className = "registered";
  registered.innerText = "No registered yet? ";
  formContainer.appendChild(registered);
  const createAccount = document.createElement("span");
  // createAccount.setAttribute("href", "#");
  createAccount.setAttribute("id", "create-account");
  createAccount.className = "href";
  createAccount.innerText = "Create Account";
  createAccount.addEventListener("click", (e) => {
    e.preventDefault();

    location.hash = "/signUp"
    console.log("create account")

    console.log("hola");

  });
  // createAccount.querySelector("#create-account").addEventListener("click", () => {
  //   paths("#/singUp");
  // });

  registered.appendChild(createAccount);
  // Crear para cuando se olvida contraseña
  const yourPassword = document.createElement("h5");
  yourPassword.className = "registered";
  yourPassword.innerText = "Forgot your  ";
  formContainer.appendChild(yourPassword);
  const forgotPassword = document.createElement("a");
  forgotPassword.className = "href";
  forgotPassword.setAttribute("href", "#");
  forgotPassword.setAttribute("id", "forgot-password");
  forgotPassword.innerText = " Password?";
  yourPassword.appendChild(forgotPassword);
  //Creando contenedor del plato
  const platecontainer = document.createElement("div");
  platecontainer.className = "plate-container";
  container.appendChild(platecontainer);
  //Creando imagen plato
  const plateImg = document.createElement("img");
  plateImg.setAttribute("src", "img/plate.png");
  plateImg.className = "plate-img";
  platecontainer.appendChild(plateImg);
  return root;
};


console.log(createLogin);
