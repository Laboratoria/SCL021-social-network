// import { welcome } from "./views/welcome.js"
import { routes, onNavigate } from "./lib/routes.js"
const root = document.getElementById("root")
console.log(window.location.pathname)
root.appendChild(routes[window.location.pathname])


window.onpopstate = () => {
    console.log("estoy funcionando")
    onNavigate(location.pathname)
    //rootDiv.innerHTML = routes[window.location.pathname]
    //root.appendChild(routes[window.location.pathname])
}



