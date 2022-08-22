//ECMAS
//import {register} from "../component/register.js";
import { auth, loginEmailPassword, 
  signInWithEmailAndPassword } from '../lib/firebase.js';

const login = () => { 
    
    //crea div
const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");

    //crea logo
const logo = document.createElement("img"); 
    logo.src = './assets/logo-gggirls.png';
    
    titleContainer.appendChild(logo);  

    //crea parrafo o titulo
const title = document.createElement("p");
    title.textContent = '/GGgirls';
    
    titleContainer.appendChild(title);
    
    
    //crea form
const formLogin = document.createElement("form");
    formLogin.classList.add("formLogin");
    titleContainer.appendChild(formLogin);
    
    //form email
const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "emailLogin");
    inputEmail.setAttribute("placeholder", "Ingresa tu correo o usuario");
    inputEmail.setAttribute("size", "25");
    inputEmail.setAttribute("maxlength", "40");
    inputEmail.setAttribute("required", "");
    
    titleContainer.appendChild(inputEmail);
    
    //form password
const inputPassword = document.createElement("input");
    inputPassword.setAttribute("value", "hideandshow");
    inputPassword.setAttribute("onclick", "showPassword", "<i class=`bi bi-eye-slash` id=`togglePassword`></i> ");
    inputPassword.setAttribute("onclick", "hidePassword", "<i class=`bi bi-eye-slash` id=`togglePassword`></i> ");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "passwordLogin");
    inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
    inputPassword.setAttribute("minlength", "6");
    inputPassword.setAttribute("maxlength", "12");
    inputPassword.setAttribute("required", "");
  
    titleContainer.appendChild(inputPassword);

    console.log(titleContainer.innerHTML);
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

    //botones
const buttonForLogin = document.createElement("button", "a");
    buttonForLogin.setAttribute("id","buttonLogin");
    buttonForLogin.setAttribute("type", "click");
    buttonForLogin.innerHTML = 'Iniciar sesión';
    titleContainer.appendChild(buttonForLogin);

const buttonForGoogle = document.createElement("button", "a");
    buttonForGoogle.setAttribute("type", "button"); 
    buttonForGoogle.setAttribute("id", "googleButton"); 
    buttonForGoogle.innerHTML = `<a href="#/posts">Iniciar sesión con Google</a>`; 
    titleContainer.appendChild(buttonForGoogle);
    
    // olvidaste contraseña
    const forgotPassword = document.createElement("h3");
    forgotPassword.textContent = '¿Olvidaste tu contraseña?';
    titleContainer.appendChild(forgotPassword);

  //cuadrito
const registerContainer = document.createElement("div");
    registerContainer.classList.add("registerContainer");

  titleContainer.appendChild(registerContainer);

// p cuadrito no tener cuenta
const pRegister = document.createElement("p");
     pRegister.innerHTML = `¿No tienes una cuenta?`;
     registerContainer.appendChild(pRegister);

const linkRegister = document.createElement("a"); /* id="linkReg" */
    linkRegister.innerHTML = `<a href="#/register">Regístrate</a>`;
    linkRegister.setAttribute("id", "linkRegist");
    registerContainer.appendChild(linkRegister);



     // Eventlistener botón login
     //aqui estoy ahoraaaaaaaaa pero no sé cómo hacer que tome el botón
     //let buttonToLogin = document.getElementById("buttonLogin");
     buttonForLogin.addEventListener("click", (e) => {
        e.preventDefault();
        const email = document.getElementById("emailLogin").value;
        const password = document.getElementById("passwordLogin").value;
        
        console.log(email, password);
        //estrella es nombre de cualquier cosa porque en verdad no sabemos como indicar que te logueaste o no
        //las chiquillas lo hacen con catch error
        //necesitamos recoger eso para ver si el botón te lleva a post o a ningun lado 
        /*const alertaLogin = (estrella) => {
          if (valid) {
            window.location.hash = '#/posts';
          } /*else (invalid){  */
         // invalid.alert("No es posible ingresar a tu sesion. Intenta de nuevo!") + `window.location.hash = '#/login'`
         //};
         // alertaLogin()
        //};
      loginEmailPassword(email, password, alertaLogin);

      
       });
      
    //acá tenemos que usar la función de firebase que recogía los datos
      //const loginForm = document getelementbyid
      //loginForm.addeventlistener submit e funcion flecha preventdefault
      //crea constantes email y pass
      //usa funcion de guardar importada desde firebase y le pasa user value y pass value


    // Obtener datos desde el DOM y ejecutar loginEmail
  /*  let mail = titleContainer.querySelector('#emailLogin').value;
    let password = titleContainer.querySelector('#passwordLogin').value;
    signInWithEmailAndPassword(auth, mail, password)
  }); */


  return titleContainer;

};
    export {login}