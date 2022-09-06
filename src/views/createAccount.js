export function createAccount() {
  //Contenedores de la sección crear cuenta
  const registerContainer = document.createElement("div");
  registerContainer.classList.add("registerContainer");

  // Sección principal de crear cuenta
  const headerRegister = document.createElement("div");
  headerRegister.classList.add("headerRegister");
  registerContainer.appendChild(headerRegister);

  //Flecha de crear cuenta
  const backArrow = document.createElement("img");
  backArrow.classList.add("backArrow");
  backArrow.setAttribute("src", "../images/backArrow.png");
  backArrow.id = ("backLogin");
  headerRegister.appendChild(backArrow);

  //Texto crear cuenta
  const registerTitle = document.createElement("h1");
  registerTitle.textContent = "Create account";
  registerTitle.classList.add("registerTitle");
  headerRegister.appendChild(registerTitle);

  //Formulario de crear cuenta
  const registerForm = document.createElement("registerForm");
  registerForm.classList.add("registerForm");
  registerContainer.appendChild(registerForm);

  //Input Nombre
  const inputNameRegister = document.createElement("input");
  inputNameRegister.classList.add("inputNameRegister");
  inputNameRegister.setAttribute("type", "text");
  inputNameRegister.setAttribute("placeholder", "   Full name");
  registerForm.appendChild(inputNameRegister);

  //Input Mail
  const inputMailRegister = document.createElement("input");
  inputMailRegister.classList.add("inputMail");
  inputMailRegister.setAttribute("type", "email");
  inputMailRegister.setAttribute("placeholder", "   Email");
  registerForm.appendChild(inputMailRegister);

  //Input contraseña
  const inputPasswordRegister = document.createElement("input");
  inputPasswordRegister.classList.add("inputPassword");
  inputPasswordRegister.setAttribute("type", "password");
  inputPasswordRegister.setAttribute("placeholder", "   Password");
  registerForm.appendChild(inputPasswordRegister);

  //Sección de aceptar términos
  const checkBoxContainer = document.createElement("div");
  checkBoxContainer.classList.add("checkBoxContainer");
  registerForm.appendChild(checkBoxContainer);

  const checkBox = document.createElement("input");
  checkBox.classList.add("checkBox");
  checkBox.setAttribute("type", "checkbox");
  checkBox.setAttribute("value", "conditionCheckbox");
  checkBoxContainer.appendChild(checkBox);

  const condition = document.createElement("p");
  condition.classList.add("condition");
  condition.textContent = "Agreed to terms and conditions";
  checkBoxContainer.appendChild(condition);

  //Botón de registrarse
  const singUp = document.createElement("input");
  singUp.classList.add("loginSubmit");
  singUp.setAttribute("type", "submit");
  singUp.setAttribute("value", "Sing up");
  registerForm.appendChild(singUp);

  return registerContainer;
}

