export const createNewPass = () => {
    const crearNuevaContraseña = document.createElement("div");

    crearNuevaContraseña.className = "container-createNewPasword";
    // logearse.textContent = "este es el createNewPassword!";
    //console.log(logearse);

    const logoPrincipal = document.createElement("img");
    logoPrincipal.setAttribute("width", "200px");
    logoPrincipal.setAttribute("src", "./component/logoNuevo.png");
    crearNuevaContraseña.appendChild(logoPrincipal)

    const tituloUno = document.createElement("h1");
    tituloUno.textContent = "Crea tu nueva contraseña";
    crearNuevaContraseña.appendChild(tituloUno);

    const nuevoPass = document.createElement("input");
    nuevoPass.setAttribute("placeholder", "Nueva Contraseña");
    crearNuevaContraseña.appendChild(nuevoPass);

    crearNuevaContraseña.appendChild(document.createElement("br"));
    crearNuevaContraseña.appendChild(document.createElement("br"));

    const repNuevoPass = document.createElement("input");
    repNuevoPass.setAttribute("placeholder", "Reingresa Nueva Contraseña");
    crearNuevaContraseña.appendChild(repNuevoPass);

    crearNuevaContraseña.appendChild(document.createElement("br"));
    crearNuevaContraseña.appendChild(document.createElement("br"));
    // // const botonNuevoPass = document.createElement("button");
    // // botonNuevoPass.innerHTML = "Crear Nueva Contraseña";
    // // botonNuevoPass.appendChild(botonRegistrarse);

    const botonNuevoPass = document.createElement("button");
    botonNuevoPass.innerHTML = "<a href ='#/login'>Crear Nueva Contraseña</a>";
    crearNuevaContraseña.appendChild(botonNuevoPass);

    return crearNuevaContraseña;
};