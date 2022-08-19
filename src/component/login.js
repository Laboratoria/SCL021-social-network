/*import { auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "../lib/firebase"; */

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
    inputPassword.setAttribute("onclick", "showPassword", "<i class=`fa-solid fa-eye`></i>");
    inputPassword.setAttribute("onclick", "hidePassword", "<i class=`fa-solid fa-eye-slash`></i>");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "passwordLogin");
    inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
    inputPassword.setAttribute("minlength", "6");
    inputPassword.setAttribute("maxlength", "12");
    inputPassword.setAttribute("required", "");
  
    titleContainer.appendChild(inputPassword);

    
    //funcion de ojito para el password
//PROBANDO REVISAR DESPUES

/*

PARTE HTML 

 <input class="form" type="text" id="creditCard" name="number" placeholder="Ingrese Nº de tarjeta"/>
        <i class="far fa-eye" id="toggleCreditCard" style="margin-left: -30px; cursor: pointer;"></i>
        <p id="error-card" class="error-message hide">Tarjeta de crédito inválida</p>
        
  maskify: (creditCard) => {
    return creditCard.replace(/.(?=.{4})/g, "#");
  },

};

function cardReplace() {
    const creditCard = creditCardNumber.value;
    cardNumber = creditCard.replace(/[^\d]/g, '');
    const nums = creditCard.replace(/[^\d.#]/g, '');
    creditCardNumber.value = nums; 

    function toggleCredit() {
        if (!isToggle) {
          cardNumber = creditCardNumber.value;
        }
        isToggle = !isToggle;
        if (isToggle) {
          let cardNumber = creditCardNumber.value;
          creditCardNumber.value = validator.maskify(cardNumber);
          return;
        }
    
      creditCardNumber.value = cardNumber;
    
    } */


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
const buttonForLogin = document.createElement("button");
    buttonForLogin.setAttribute("id","buttonLogin");
    buttonForLogin.setAttribute("type", "button");
    buttonForLogin.innerHTML = 'Iniciar sesión';
    titleContainer.appendChild(buttonForLogin);

const buttonForGoogle = document.createElement("button");
    buttonForGoogle.setAttribute("type", "button"); 
    buttonForGoogle.setAttribute("id", "googleButton"); 
    buttonForGoogle.innerHTML = 'Iniciar sesión con Google'; 
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
     titleContainer
.querySelector('#buttonLogin')
.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener datos desde el DOM y ejecutar loginEmail
    let mail = titleContainer.querySelector('#emailLogin').value;
    let password = titleContainer.querySelector('#passwordLogin').value;
    signInWithEmailAndPassword(auth, mail, password)
  });


  return titleContainer;

};
    export {login}