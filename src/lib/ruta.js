import { getPassword } from '../component/getPassword.js';
import { login } from '../component/login.js';
import { register } from '../component/register.js';
import { loginGoogle } from '../component/loginGoogle.js';
import { wall } from '../component/wall.js';
import { createNewPass } from '../component/createNewPass.js';



export const changeRoute = (hash) => {
    const rootContainer = document.getElementById("root");
    rootContainer.innerHTML = '';
    // si el hash es #/register entonces le hago appendChild del componente register

    if (hash === '#/login') {
        rootContainer.appendChild(login())
    }
    if (hash === '#/register') {
        rootContainer.appendChild(register())
    }
    if (hash === '#/getPassword') {
        rootContainer.appendChild(getPassword())
    }
    if (hash === '#/createNewPass') {
        rootContainer.appendChild(createNewPass())
    }
    if (hash === '#/loginGoogle') {
        rootContainer.appendChild(loginGoogle())
    }
    if (hash === '#/wall') {
        rootContainer.appendChild(wall())
    }


}