import { createPost } from "../lib/firebase.js";

export const wall = () => {

    //let post = [];

    const muroPrinc = document.createElement("div");

    muroPrinc.className = "container-muroPrinc";
    // logearse.textContent = "este es el mainWall!";
    //console.log(logearse);

    const logoPrincipal = document.createElement("img");
    logoPrincipal.setAttribute("width", "200px");
    logoPrincipal.setAttribute("src", "./component/logoTrans.png");
    muroPrinc.appendChild(logoPrincipal);

    // const barraNav = document.createElement("nav")   
    // //const ul = document.createElement("ul") 
    // const list = document.createElement("li") 
    // barraNav.textContent = "Adoptame!!";
    // barraNav.textContent = "Datos Curiosos";
    // barraNav.textContent = "Tips Generales";
    // //barraNav.setAttribute("width", "200px");
    // muroPrinc.appendChild(barraNav);
    // //muroPrinc.appendChild(ul);
    // muroPrinc.appendChild(list);

    // const form = document.createElement("form");
    // form.setAttribute("placeholder", "publica tu estado");
    // muroPrinc.appendChild(form);

    const posteo = document.createElement("textarea");
    posteo.setAttribute("placeholder", "publica tu estado");
    posteo.setAttribute("maxLength", "200");
    posteo.setAttribute("required", "");
    posteo.setAttribute("id", "text-description");
    muroPrinc.appendChild(posteo);

    muroPrinc.appendChild(document.createElement("br"));
    muroPrinc.appendChild(document.createElement("br"));

    const botonPublicar = document.createElement("button");
    botonPublicar.className = "btnpost";
    botonPublicar.textContent = "Publicar";
    botonPublicar.addEventListener("click", function () {
        document.getElementsByClassName = "btnpost";
        document.getElementById("root").innerHTML = "";
        createPost(posteo.value);
    });
    muroPrinc.appendChild(botonPublicar);

    // const botonPublicar = document.createElement("button");
    // //botonPublicar.setAttribute("type", "submit");
    // botonPublicar.classList.add("btn-post");
    // botonPublicar.innerHTML = "publicar";

    // botonPublicar.addEventListener("click", function () {
    //     //document.getElementsByClassName = "btnRegister";
    //     document.getElementById("root").innerHTML = "";
    //     createPost(textArea.value).then(() => {
    //         window.location(textAreaDos)
    //     });
    // })

    // botonPublicar.addEventListener("click", function () {



    // }
    // );
    // console.log(botonPublicar);
    // muroPrinc.appendChild(botonPublicar);

    muroPrinc.appendChild(document.createElement("br"));
    muroPrinc.appendChild(document.createElement("br"));

    // const textAreaDos = document.createElement("textarea");
    // //textAreaDos.setAttribute("placeholder", "publica tu estado");
    // textAreaDos.setAttribute("maxLength", "200");
    // textAreaDos.setAttribute("required", "");
    // textAreaDos.setAttribute("id", "text-description");
    // muroPrinc.appendChild(textAreaDos);





    return muroPrinc;
}

