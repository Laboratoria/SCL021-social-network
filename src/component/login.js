
const login = () => {
   
   /*
    //Se crea Div principal que contiene HTML de Login 
    const containerLogin = document.createElement("div");
    containerLogin.classList.add("mainLogin");
    //const logoForSpa = document.createElement("img");
   // logoForSpa
    const textReset = document.createElement("p");
    textReset.textContent = `Login`;
    containerLogin.appendChild(textReset)
    */

    //logo
    //y titulo
    
    //crea div
const titleContainer = document.createElement("div");
    titleContainer.classList.add("titleContainer");

    //crea imagen
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
    inputEmail.setAttribute("placeholder", "Ingresa tu Correo o Usuario");
    inputEmail.setAttribute("size", "25");
    inputEmail.setAttribute("maxlength", "40");
    inputEmail.setAttribute("required", "");
    
    titleContainer.appendChild(inputEmail);
    
    //form password
const inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "passwordLogin");
    inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
    inputPassword.setAttribute("minlength", "6");
    inputPassword.setAttribute("maxlength", "12");
    inputPassword.setAttribute("required", "");
  
    titleContainer.appendChild(inputPassword);

    //botones
const buttonForLogin = document.createElement("button");
    buttonForLogin.setAttribute("type", "button");
    buttonForLogin.innerHTML = 'Iniciar sesión';
    titleContainer.appendChild(buttonForLogin);

const buttonForGoogle = document.createElement("button");
    buttonForGoogle.setAttribute("type", "button") 
    buttonForGoogle.setAttribute("id", "googleButton") 
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
const linkRegister = document.createElement("p");
    linkRegister.innerHTML = `¿No tienes una cuenta? <a href="#/register" id="linkReg">Regístrate</a>`;
    registerContainer.appendChild(linkRegister);

  return titleContainer;

};

export {login}





