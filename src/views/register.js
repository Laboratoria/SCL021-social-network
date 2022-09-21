


import { createUser, createUserGoogle, facebookLogin } from "../lib/firebase.js";

export const register = () => {
  const registerDiv = document.createElement("div")
  let viewRegister =
    `
    <header id="header">
    <div class="container__header">
        <div class="logo">
            <img src="./utilitys/img/logo.png" alt="">
        </div>
        <div class="container__nav">
            <nav id="nav">
                <ul>
                  <li><a href="/"  class="select" onclick="onNavigate('/'); return false;">HOME</a></li>
                  <li><a href="register#" onclick="onNavigate('/register'); return false;">REGISTER</a></li>
                  <li><a href="login#" onclick="onNavigate('/login'); return false;">LOGIN</a></li>
                  <li><a href="wall#" onclick="onNavigate('/wall'); return false;">WALL</a></li>
                </ul>
            </nav>          
            <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
        </div>
    </div>
  </header>
<div class="containerPages">
  <div class="register-container">
    <section class = "containerLogin">
      <h3 class="login-title">Registrarse </h3>
      <input class="Inputs-L"  
      id="userSignUp" 
      type="text" 
      placeholder="Usuario / Correo"
      maxlength="30"
      autocomplete="on">
      </input>
      <input
        class="Inputs-L"
        id="passwordSignUp"
        type="password"
        placeholder="Contraseña"
        maxlength="10"
        autocomplete="current-password"
        required
      />
      <input
      class="Inputs-L"
      id="passwordValidate"
      type="password"
      placeholder="Repetir contraseña"
      maxlength="10"
      autocomplete="current-password"
      required
    />
      <br/>
      <a href="#" ><h5 class="simple" >¿Olvidaste tu Contraseña?</h5></a>
      <button class="buttonL" id="register"   type="submit">Regístrar</button>
      
    </section>
    <h5 class="test" >Ingresa con</h5>
    <center><div class="logo-container">
    <button id= "googleButton"> 
    <img
          class="logo"
          id= "googleLogo"
          src="utilitys/img/logo-google.png"
          alt="google-logo"
        />
        </button>
        <button id= "facebookButton"> 
        <img
          class="logo"
          id="facebookLogo"
          src="utilitys/img/Fb.svg"
          alt="facebook-logo"
        />
        </button>
    </div></center>
  </div>
  <Footer>
    <div class="container__footer">
      <div class="logo_footer">
      <!--img src="./utilitys/img/waves.gif" alt=""-->
      </div>
    </div>
  </Footer>
</div> `
  registerDiv.innerHTML = viewRegister
  let remPassword = registerDiv.querySelector("#passwordValidate").value;
  registerDiv.querySelector("#register").addEventListener("click", function () {
    let email = registerDiv.querySelector("#userSignUp").value;
    let password = registerDiv.querySelector("#passwordSignUp").value;
    if (email === '' || password === '') {
      alert('Por favor completa todos los campos');
    } else if (password.length < 6) {
      alert('Tu contraseña debe ser mayor a 6 caracteres');
    } else {  
  createUser(email, password);}

  });

  registerDiv.querySelector("#googleButton").addEventListener("click", function () {
    let googleL = registerDiv.querySelector("#googleLogo")
    createUserGoogle(googleL);
    });


  registerDiv.querySelector("#facebookButton").addEventListener("click", function () {
    let facebookL = registerDiv.querySelector("#facebookLogo")
    facebookLogin(facebookL);
  });




  return registerDiv
}
