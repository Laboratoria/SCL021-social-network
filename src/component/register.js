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
    const formLogin = document.createElement("form");
        formLogin.classList.add("formLogin");
titleContainer.appendChild(formLogin);

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

    return titleContainer;
 };
 
 export {register}
 
