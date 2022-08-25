//import {register} from "../component/register.js";
import {loginEmailPassword, signGoogle} from '../lib/firebase.js';


const login = () => { 
    
    //Crea Div que contiene Titulo titleContainer
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
const formLogin = document.createElement("form");
    formLogin.classList.add("formLogin");
    titleContainer.appendChild(formLogin);
    
    //Crea ingreso de Email
const inputEmail = document.createElement("input");
    inputEmail.setAttribute("value", "");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "emailLogin");
    inputEmail.setAttribute("placeholder", "Ingresa tu correo o usuario");
    inputEmail.setAttribute("size", "25");
    inputEmail.setAttribute("maxlength", "40");
    inputEmail.setAttribute("required", "");
    titleContainer.appendChild(inputEmail);
    
    //Crea ingreso de Password
const inputPassword = document.createElement("input");
    inputPassword.setAttribute("value", ""); 
    inputPassword.setAttribute("onclick", "showPassword");
  //  inputPassword.setAttribute("<i class=`bi bi-eye-slash` id=`togglePassword`></i> ");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "passwordLogin");
    inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
    inputPassword.setAttribute("minlength", "6");
    inputPassword.setAttribute("maxlength", "12");
    inputPassword.setAttribute("required", "");
    titleContainer.appendChild(inputPassword);

    //funcion de ojito para el password

//PRUEBA 2


/*const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
console.log(togglePassword); */
/*togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});*/


//PRUEBA 1
/*
/*function hideAndShowPassword(){
    var passwordType = document.querySelectorAll("passwordLogin");
    if (passwordType.getAttribute('type') === "password") {
    passwordType.type = "text", passwordType.getAttribute("onclick", "hidePassword");
    } else {
      passwordType.type = "text", passwordType.getAttribute("onclick", "showPassword"); 
    }
    return hideAndShowPassword; 
  }; */

    //Botones para Login e inicio de sesión con Google
const buttonForLogin = document.createElement("button", "a");
    buttonForLogin.setAttribute("id","buttonLogin");
    buttonForLogin.setAttribute("type", "click");
    buttonForLogin.innerHTML = `<a href="#/posts">Iniciar sesión</a>`;
    titleContainer.appendChild(buttonForLogin);

const buttonForGoogle = document.createElement("button", "a");
    buttonForGoogle.setAttribute("type", "button"); 
    buttonForGoogle.setAttribute("id", "googleButton"); 
    buttonForGoogle.innerHTML = `<a href="#/posts">Iniciar sesión con Google</a>`; 
    titleContainer.appendChild(buttonForGoogle);
    
    // Olvidaste contraseña
  const forgotPassword = document.createElement("h3");
    forgotPassword.textContent = '¿Olvidaste tu contraseña?';
    titleContainer.appendChild(forgotPassword);

    //Crea Div dentro de Div principal el donde se encuentra link a Register
const registerContainer = document.createElement("div");
    registerContainer.classList.add("registerContainer");

  titleContainer.appendChild(registerContainer);

    //Crea texto y link que da a pagina de Register
const pRegister = document.createElement("p");
     pRegister.innerHTML = `¿No tienes una cuenta?`;
     registerContainer.appendChild(pRegister);

const linkRegister = document.createElement("a"); /* id="linkReg" */
    linkRegister.innerHTML = `<a href="#/register">Regístrate</a>`;
    linkRegister.setAttribute("id", "linkRegist");
    registerContainer.appendChild(linkRegister);

    // Funcionalidad de botón para Login con addEventListener
     //aqui estoy ahoraaaaaaaaa pero no sé cómo hacer que tome el botón
     //let buttonToLogin = document.getElementById("buttonLogin");
buttonForLogin.addEventListener("click", (e) => {
    e.preventDefault();
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;
        
console.log(email, password); 
       
const alertaLogin = (valid) => {
    if (valid) {
    window.location.hash = '#/posts';
    } else{

    }
    // invalid.alert("No es posible ingresar a tu sesion. Intenta de nuevo!") + `window.location.hash = '#/login'`   
   //alertaLogin()
    };
    loginEmailPassword(email, password, alertaLogin); 
    });

buttonForGoogle.addEventListener("click", signGoogle);
      

  return titleContainer;

};
  export {login}
