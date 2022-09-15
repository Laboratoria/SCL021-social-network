export const feed = () => {
  //Crear etiqueta nav
  const nav = document.createElement("nav");
  // Crear div
  const containerNav = document.createElement("div");
  containerNav.className = "container-nav";
  nav.appendChild(containerNav);
  //Creando logo
  const nameLogo = document.createElement("h2");
  nameLogo.className = "logo";
  containerNav.appendChild(nameLogo);
  //Crear img logo
  const imgLogo = document.createElement("img");
  imgLogo.setAttribute("src", "img/logo.png");
  nameLogo.appendChild(imgLogo);
  // Crear title de red social
  const title = document.createElement("h3");
  title.innerText = "diShared";
  containerNav.appendChild(title);
  // Crear div para input de búsqueda
  const searchBar = documen.createElement("div");
  searchBar.className = "search-bar";
  containerNav.appendChild(searchBar);
  // Crear icono de busqueda
  const iconSearch = document.createElement("i");
  iconSearch.className = "uil uil-search";
  searchBar.appendChild(iconSearch);
  // Crear input de búsqueda
  const inputSearch = document.createElement("input");
  inputSearch.setAttribute("type", "search");
  inputSearch.setAttribute("placeholder", "What are you looking for?");
  searchBar.appendChild(inputSearch);
  // Crear div para el create
  const create = document.createElement("div");
  create.className = "create";
  containerNav.appendChild(create);
  // Crear botón
  const buttonCreate = document.createElement("label");
  buttonCreate.className = "btn btn-primary";
  buttonCreate.setAttribute("for", "create-post");
  buttonCreate.innerText = "Create";
  create.appendChild(buttonCreate);
  // Crear div con img de perfil
  const divProfile = document.createElement("div");
  divProfile.className = "profile-photo";
  create.appendChild(divProfile);
  // Insertar img de perfil
  const imgProfile = document.createElement("img");
  imgProfile.setAttribute("src", "img/profile-1.jpg");
  divProfile.appendChild(imgProfile);

  //  Crear etiqueta main
  const main = document.createElement("main");
  // Crear container
  const feedContainer = document.createElement("div");
  feedContainer.className = "container-feed";
  main.appendChild(feedContainer);
  //Create container sidebar with name
  const sidebarleft = document.createElement("div");
  sidebarleft.className = "sidebar-left";
  feedContainer.appendChild(sidebarleft);
  //Crear etiqueta a
  const profileLeft = document.createElement("a");
  profileLeft.className = "profile-left";
  sidebarleft.appendChild(profileLeft);
  //Crear div profile photo
  const profilePhoto = document.createElement("div");
  profilePhoto.className = "profile-photo";
  profileLeft.appendChild(profilePhoto);
  // Crear etiqueta img
  const imgProfileLeft = document.createElement("img");
  imgProfileLeft.setAttribute("src", "img/profile-1.jpg");
  profilePhoto.appendChild(imgProfileLeft);
  // Div text
  const handle = document.createElement("div");
  handle.className = "handle";
  profileLeft.appendChild(handle);
  // Crear h4 text name
  const textName = document.createElement("h4");
  textName.setAttribute("text", "Rosita");
  handle.appendChild(textName);
  // Create username text
  const username = document.createElement("p");
  username.className = "text-muted";
  handle.appendChild(username);
  username.setAttribute("text", "@Rosita");
  // Crear sidebar
  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  sidebarleft.appendChild(sidebar);
  // Create label a
  const iconHome = document.createElement("a");
  iconHome.className = "menu-item";
  sidebar.appendChild(iconHome);
  // Create span
  const spanHome = document.createElement("span");
  iconHome.appendChild(spanHome);

  return nav;
};