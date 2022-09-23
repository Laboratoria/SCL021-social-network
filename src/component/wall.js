import { createPost , unsub } from "../lib/firebase.js";

export const wall = () => {

    //let post = [];

    const muroPrinc = document.createElement("div");
    muroPrinc.className = "container-muroPrinc";
    //muroPrinc.setAttribute("id", "muro");
    // logearse.textContent = "este es el mainWall!";
    //console.log(logearse);

    const logoPrincipal = document.createElement("img");
    logoPrincipal.setAttribute("width", "200px");
    logoPrincipal.setAttribute("src", "./component/logoTrans.png");
    muroPrinc.appendChild(logoPrincipal);

    muroPrinc.appendChild(document.createElement("br"));
    muroPrinc.appendChild(document.createElement("br"));

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

    
    const botonPublicar = document.createElement("button");
    botonPublicar.className = "btnpost";
    botonPublicar.textContent = "Publicar";
    botonPublicar.addEventListener("click", function () {
        document.getElementsByClassName = "btnpost";
        divPosteo.innerHTML = "";
        createPost(posteo.value);
    });
    muroPrinc.appendChild(botonPublicar);

    muroPrinc.appendChild(posteo);

    muroPrinc.appendChild(document.createElement("br"));
    muroPrinc.appendChild(document.createElement("br"));

    const divPosteo = document.createElement("div");
    muroPrinc.appendChild(divPosteo);

   

    
    unsub((post)=> {
        console.log("yo estoy en wall" , post)
        const postCard = document.createElement("textarea");
        postCard.setAttribute("readonly", "");
        postCard.setAttribute("id", "posteo");
        postCard.className = "post";
        postCard.innerText= post.content;
        divPosteo.appendChild(postCard)
    });

    

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






//dar aqui el lugar donde estaran alojados los post, usar for each
// export const showPosts = (posts) => {
//     let boxPrinc = document.getElementById("muro");
//     //boxPrinc.innerHTML = "";
//     for (let post of posts) {
//         const el = document.createElement("div");
//         el.className = "post";
//         el.textContent = post.content;

//         console.log(post);
//         boxPrinc.appendChild(el);
//     }
// };

