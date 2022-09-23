export const getPassword = () => {
    const recuperar = document.createElement("div");

    recuperar.className = "container-getPasword";
    // logearse.textContent = "este es el getPassword!";
    //console.log(logearse);

    const logoPrincipal = document.createElement("img");
    logoPrincipal.setAttribute("width", "200px");
    logoPrincipal.setAttribute("src", "./component/logoTrans.png");
    recuperar.appendChild(logoPrincipal)

    const tituloUno = document.createElement("h1");
    tituloUno.textContent = "Ingresa tu correo para recuperar contraseña";
    recuperar.appendChild(tituloUno);

    const mailRecuperar = document.createElement("input");
    mailRecuperar.setAttribute("placeholder", "E-mail");
    recuperar.appendChild(mailRecuperar);

    // const botonRegistrarse = document.createElement("button");
    // botonRegistrarse.innerHTML = "Enviar";
    // recuperar.appendChild(botonRegistrarse);

    const botonRegistrarse = document.createElement("button");
    botonRegistrarse.innerHTML = "<a href ='#/createNewPass'>Enviar</a>";
    recuperar.appendChild(botonRegistrarse);



    return recuperar;
};