export const wall = () => {
    const wallDiv = document.createElement("div")
    let wallPage = `

    <header id="header">
    <div class="container__header">
        <div class="logo">
            <img src="./utilitys/img/logo.png" alt="">
        </div>
        <div class="container__nav">
            <nav id="nav">
                <ul>
                    <li><a href="/"  class="select" onclick="onNavigate('/'); return false;">HOME</a></li>
                    <li><a href="register#" onclick="onNavigate('/register'); return false;">REGISTER</a></li>
                    <li><a href="login#" onclick="onNavigate('/login'); return false;">LOGIN</a></li>
                    <li><a href="wall#" id="logout">CIERRE SESION</a></li>
                </ul>
            </nav>          
            <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
        </div>
    </div>
    <div class="user-icon">
          <img src="./utilitys/img/usuario.png" alt="user" />
    </div>
    <div> <h1 class="saludoUser"> "¡Bienvenido Usuario Tech!"</h1></div>
    </header>
    <div class="containerPages">
        <div class="wall-container"> 
        <section class = "containerWall">
          <div class="textarea-container"><textarea class="post-message" id="postMessage" cols="10" rows="3"
          placeholder="Comparte  tu opinión  y/o Tips"></textarea>
          </div>
       <button class="buttonL" id="postBtn" type="submit">Publicar</button>
        </section>
       </div>
    </div>
    <Footer>
    <div class="container__footer">
       <img src="./utilitys/img/waves.gif" alt="">
       </div>
  </Footer>
</div> ` 

    wallDiv.innerHTML = wallPage

    return wallDiv
}