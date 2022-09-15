export const signUp = () => {
  const root = document.createElement("div");
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
  //Creando Arrow
  const btnArrow = document.createElement("button");
  btnArrow.className = "arrow";
  btnArrow.setAttribute("id", "arrow");
  root.appendChild(btnArrow);
  // Add icon arrow
  const iconArrow = document.createElement("i");
  iconArrow.className = "fa-solid fa-chevron-left fa-2x";
  btnArrow.appendChild(iconArrow);

  btnArrow.addEventListener("click", () => {});
  // Creando div contenedor
  const container = document.createElement("div");
  container.className = "container";
  root.appendChild(container);
  //Creando form
  const formContainer = document.createElement("form");
  formContainer.className = "form";
  container.appendChild(formContainer);
  // Creando form 2
  const form = document.createElement("div");
  form.className = "form-2";
  formContainer.appendChild(form);
  // Creando H1 title
  const title = document.createElement("h1");
  title.className = "title";
  title.innerText = "Create Account";
  form.appendChild(title);
  // Creando Input de Email
  const email = document.createElement("label");
  email.className = "text-create";
  email.innerText = "Email";
  form.appendChild(email);
  // Create input with placeholder email
  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "text");
  inputEmail.setAttribute("id", "user-email");
  inputEmail.className = "input-field";
  inputEmail.setAttribute("placeholder", "dishared@gmail.com");
  email.appendChild(inputEmail);
  // Creando Input de Password
  const password = document.createElement("label");
  password.className = "text-create";
  password.innerText = "Password";
  form.appendChild(password);
  // Create input with placeholder
  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "user-password");
  inputPassword.className = "input-field";
  inputPassword.setAttribute("minlength", "6");
  inputPassword.setAttribute("maxlength", "12");
  inputPassword.setAttribute("placeholder", "password 🔒");
  password.appendChild(inputPassword);
  //Creando botón Continue
  const btnContinue = document.createElement("button");
  btnContinue.setAttribute("id", "btn-create");
  btnContinue.innerText = "Continue";
  form.appendChild(btnContinue);
  // Creando H4 Or Use
  const orCreate = document.createElement("h4");
  orCreate.className = "or-create";
  orCreate.innerText = "Or Use";
  form.appendChild(orCreate);
  // Creando div social
  const social = document.createElement("div");
  social.className = "social";
  form.appendChild(social);
  //Creando logo facebook
  const facebookLogo = document.createElement("a");
  facebookLogo.setAttribute("href", "#");
  social.appendChild(facebookLogo);
  const facebook = document.createElement("i");
  facebook.className = "fa-brands fa-facebook fa-2x";
  facebookLogo.appendChild(facebook);
  // Creando logo Google
  const googleLogo = document.createElement("a");
  googleLogo.setAttribute("href", "#");
  social.appendChild(googleLogo);
  const google = document.createElement("i");
  google.className = "fa-brands fa-google-plus fa-2x";
  googleLogo.appendChild(google);
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
