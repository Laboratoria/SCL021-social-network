//ECMAS
import {} from "../lib/firebase.js"

 const register = () => {
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
    const formRegister= document.createElement("form");
    formRegister.classList.add("formRegister");
titleContainer.appendChild(formRegister);

 //formulario de nombre de usuario
    const inputUser = document.createElement("input");
        inputUser.setAttribute("type", "text");
        inputUser.setAttribute("id", "usuarioRegister");
        inputUser.setAttribute("placeholder", "Crea tu nombre de usuario");
        inputUser.setAttribute("size", "25");
        inputUser.setAttribute("maxlength", "40");
        inputUser.setAttribute("required", "");

titleContainer.appendChild(inputUser);

 //form email
    const inputEmail = document.createElement("input");
        inputEmail.setAttribute("type", "email");
        inputEmail.setAttribute("id", "emailRegister");
        inputEmail.setAttribute("placeholder", "Ingresa tu correo o usuario");
        inputEmail.setAttribute("size", "25");
        inputEmail.setAttribute("maxlength", "40");
        inputEmail.setAttribute("required", "");
 
titleContainer.appendChild(inputEmail);

 //form crear password
    const inputPassword = document.createElement("input");
        inputPassword.setAttribute("value", "hideandshow");
        inputPassword.setAttribute("onclick", "showPassword", "<i class=`fa-solid fa-eye`></i>");
        inputPassword.setAttribute("onclick", "hidePassword", "<i class=`fa-solid fa-eye-slash`></i>");
        inputPassword.setAttribute("type", "password");
        inputPassword.setAttribute("id", "passwordRegister");
        inputPassword.setAttribute("placeholder", "Ingresa tu contraseña");
        inputPassword.setAttribute("minlength", "6");
        inputPassword.setAttribute("maxlength", "12");
        inputPassword.setAttribute("required", "");
    
    titleContainer.appendChild(inputPassword);

//Boton de inicio de sesion
    const buttonForNewAccount = document.createElement("button");
    buttonForNewAccount.setAttribute("id","buttonLogin");
    buttonForNewAccount.setAttribute("type", "button");
    buttonForNewAccount.innerHTML = 'Crear cuenta';
        titleContainer.appendChild(buttonForNewAccount);

   

 //cuadrito
 const registerContainer = document.createElement("div");
 registerContainer.classList.add("registerContainer");
 titleContainer.appendChild(registerContainer);

//link volver al login si ya tienes cuenta gg
    const parrRegister = document.createElement("p");
        parrRegister.innerHTML = `¿Ya tienes una cuenta?`;
        registerContainer.appendChild(parrRegister);

    const loginForRegister = document.createElement("a");
        loginForRegister.innerHTML = `<a href="#/posts">Ingresa</a>`;
        loginForRegister.setAttribute("id", "linkRegist");
        registerContainer.appendChild(loginForRegister);

    
        // guardar informacion de usuario para crear cuenta
        formRegister.addEventListener("button", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
        
            registerUser(email, password);
        });

    return titleContainer;
 };
 
 export {register}
