export const error404 = () => {
  const div404 = document.createElement("div");
  const message404 = ` 
 <body class="body-404">
  <div class="container-main">
    <div class="container404">
      <h1 class="page-not-found"> 404 </h1>
      <h2 class="text-404"> Ooops! you weren't supossed too see this </h2>
      <p class="paragraph-404">Return to the <a class="hyperlink-404" href="#">home page</a></p>
    </div>
    <img class="img-404" src="img/gif-unscreen.gif" alt="Computer man">
  </div>
 </body>
  `;
  div404.innerHTML = message404;
  return div404;
};
