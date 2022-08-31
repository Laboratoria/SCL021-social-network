import {Component} from '../component.js';

    const currentPath=  window.location.hash;
    console.log(currentPath);
    const menu=(currentPath === '#/login' || currentPath==='#/register') ? '' : `<ul id="ul-nav">
    <li> <a href="Sing In">Sing In </a></li>
    <li> <a href="Sing Up">Sing Up </a></li>
    </ul>`


const template = `
    <nav>
    <div class="logo">
    <img class="logo" src="img/Logo/logo-header.png">
    </div>
    ${menu}
    </nav>
`;

export const nav= new Component(template, undefined, 'nav');