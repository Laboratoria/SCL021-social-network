import {registerEmailPassword} from "../lib/firebase.js"

    //Crea Div que contiene Titulo titleContainer
const register = () => {
    const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");

    //Crea logo
const logo = document.createElement("img");
    logo.src = './assets/logo-gggirls.png';
    titleContainer.appendChild(logo);  

    //Crea parrafo o titulo
const title = document.createElement("p");
    title.textContent = '/GGgirls';
    titleContainer.appendChild(title);

    //Crea form para ingresar datos de Email y Password
const formRegister= document.createElement("form");
    formRegister.classList.add("formRegister");
    titleContainer.appendChild(formRegister);

    //Crea ingreso de Email
const inputEmail = document.createElement("input");
    inputEmail.setAttribute("value", "");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "emailRegister");
    inputEmail.setAttribute("placeholder", "Ingresa tu correo o usuario");
    inputEmail.setAttribute("size", "25");
    inputEmail.setAttribute("maxlength", "40");
    inputEmail.setAttribute("required", "");
    titleContainer.appendChild(inputEmail);

    // Crea ingreso de Password
const inputPassword = document.createElement("input");
    inputPassword.setAttribute("value", "");
    inputPassword.setAttribute("onclick", "showPassword", "<i class=`fa-solid fa-eye`></i>");
    inputPassword.setAttribute("onclick", "hidePassword", "<i class=`fa-solid fa-eye-slash`></i>");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "passwordRegister");
    inputPassword.setAttribute("placeholder", "Ingresa tu contraseña, letras y números");
    inputPassword.setAttribute("minlength", "6");
    inputPassword.setAttribute("maxlength", "12");
    inputPassword.setAttribute("required", "");
    titleContainer.appendChild(inputPassword);

    //Boton de Crear Cuenta
const buttonForNewAccount = document.createElement("button");
    buttonForNewAccount.setAttribute("id","buttonLogin");
    buttonForNewAccount.setAttribute("type", "button");
    buttonForNewAccount.innerHTML = 'Crear cuenta';
    titleContainer.appendChild(buttonForNewAccount);

    //Cuadrito que lleva a Login en caso de cuenta ya creada
 const registerContainer = document.createElement("div");
    registerContainer.classList.add("registerContainer");
    titleContainer.appendChild(registerContainer);

    //Link volver al login si ya tienes cuenta gg
const parrRegister = document.createElement("p");
    parrRegister.innerHTML = `¿Ya tienes una cuenta?`;
    registerContainer.appendChild(parrRegister);

const loginForRegister = document.createElement("a");
    loginForRegister.innerHTML = `<a href="#/login">Ingresa</a>`;
    loginForRegister.setAttribute("id", "linkRegist");
    registerContainer.appendChild(loginForRegister);
    
    // Guardar información de usuario para crear cuenta
buttonForNewAccount.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("emailRegister").value;
    const password = document.getElementById("passwordRegister").value;
    console.log(email, password);
    registerEmailPassword(email, password); 
   // window.location.hash = "#/posts";
    });

return titleContainer;
 };
 
 export {register}
