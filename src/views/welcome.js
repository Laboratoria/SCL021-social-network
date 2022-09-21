import { onNavigate } from "../lib/routes.js"

//export const welcomePage = () => {
//  const containerwelcome = document.createElement('section');
// containerwelcome.className = 'welcome';
//  const viewwelcome =

export const welcome = () => {
  const welcomeDiv = document.createElement("div")
  let viewWelcome =
    `
    <header id="header">
    <div class="container__header">
        <div class="titulo">
        <h1> Tecnology Red Social</h1>
            <!--img src="./utilitys/img/logo.png" alt=""-->
        </div>
                <div class="container__nav">
            <nav id="nav">
              <ul>
                <li><a href="/"  class="select" onclick="onNavigate('/'); return false;">HOME</a></li>
                <li><a href="register#" onclick="onNavigate('/register'); return false;">REGISTER</a></li>
                <li><a href="login#" onclick="onNavigate('/login'); return false;">LOGIN</a></li>
                <li><a href="wall#" onclick="onNavigate('/wall'); return false;">WALL</a></li>
              </ul>
            </nav>          
            <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
        </div>
    </div>
  </header>
  <div class="containerWelcome">
    <div class="parrafo">Bienvenidos a Social Tech, una red social de tecnología que busca la conectividad entre personas de distintas partes del mundo.</div>
      <!--base href="utilitys/img"-->
        <div id="captioned-gallery">
        <figure class="slider">
          <figure>
            <img src="/utilitys/img/960x0.png" alt="technology">
            <figcaption>Techonolgy in the World</figcaption>
          </figure>
          <figure>
            <img src="/utilitys/img/scroll.png" alt="friends">
            <figcaption>Comparte contenido, agrega amigos, <br> postea y busca tips sobre tecnología</figcaption>
            <!--p class="imageP">Comparte contenido, agrega amigos,<br> postea y busca tips sobre tecnología<p-->
          </figure>
          <figure>
            <img src="/utilitys/img/scroll1.png" alt="friendscel">
            <figcaption>Adaptable a todo tipo de dispositivos.<br> Para usarla en todo momento y en todo lugar </figcaption>
          </figure>
          <figure>
            <img src="/utilitys/img/960x0.png" alt="technology">
            <figcaption>Techonolgy in the World</figcaption>
          </figure>
          <figure>
          <img src="/utilitys/img/scroll.png" alt="friends">
          <figcaption>Comparte contenido, agrega amigos, <br> postea y busca tips sobre tecnología</figcaption>
          <!--p class="imageP">Comparte contenido, agrega amigos,  postea y busca tips sobre tecnología<p-->
        </figure>			
        </figure>
      </div>
      <div class="parrafo">Nuestra meta es dar a conocer avances tecnologícos, programas para el uso profesional o recreativo y nuevos dispositivos para mejorar la calidad de vida y el funcionamiento de la sociedad, para que puedan compartir y conocer nuevas tecnologías de interés común.</div>
      <div class="buttonCover">        
      <button type="button" class="button"  id="Inicio" onclick="location.href='register.html';"> ¡Quiero Ingresar! </button>
  </div>
</div> `
  welcomeDiv.innerHTML = viewWelcome
  return welcomeDiv
}

//containerwelcome.innerHTML = viewwelcome;
//return containerwelcome;
//};
