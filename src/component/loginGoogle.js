export const loginGoogle = () => {
    const registrarseGoogle = document.createElement("div");

    registrarseGoogle.className = "container-loginGoogle";
    // logearse.textContent = "este es el loginGoogle!";
    //console.log(logearse);

    const logoPrincipal = document.createElement("img");
    logoPrincipal.setAttribute("width", "200px");
    logoPrincipal.setAttribute("src", "./component/logoNuevo.png");
    registrarseGoogle.appendChild(logoPrincipal)

    return registrarseGoogle;
}