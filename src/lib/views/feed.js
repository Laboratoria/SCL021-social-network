import { logOut, usuario} from "../../firebase/auth.js";
import { savePost } from "../../firebase/firestore.js";


export const feed = () => {
  const root = document.createElement("div");
  root.className = "feed-container";
  //Crear etiqueta nav
  const nav = document.createElement("nav");
  root.appendChild(nav);
  // Crear div
  const containerNav = document.createElement("div");
  containerNav.className = "container-nav";
  nav.appendChild(containerNav);
  //Creando logo
  const nameLogo = document.createElement("div");
  nameLogo.className = "logo-nav";
  containerNav.appendChild(nameLogo);
  //Crear img logo
  const imgLogo = document.createElement("img");
  imgLogo.className = "img-nav";
  imgLogo.setAttribute("src", "img/logo-feed.png");
  nameLogo.appendChild(imgLogo);
  // Crear title de red social
  const title = document.createElement("h3");
  title.className = "text-dishared";
  title.innerText = "diShared";
  nameLogo.appendChild(title);
  // Crear div para input de búsqueda
  const searchBar = document.createElement("div");
  searchBar.className = "search-bar";
  containerNav.appendChild(searchBar);
  // Crear icono de busqueda
  const iconSearch = document.createElement("i");
  iconSearch.className = "fa-sharp fa-solid fa-magnifying-glass";
  searchBar.appendChild(iconSearch);
  // Crear input de búsqueda
  const inputSearch = document.createElement("input");
  inputSearch.setAttribute("type", "search");
  inputSearch.setAttribute("placeholder", "What are you looking for?");
  searchBar.appendChild(inputSearch);

  //Div with photo and log out

  const divProfileNav = document.createElement("div");
  divProfileNav.className = "divNav";
  containerNav.appendChild(divProfileNav);

  // Crear div con img de perfil
  const divProfile = document.createElement("div");
  divProfile.className = "profile-photo";
  divProfileNav.appendChild(divProfile);
  // Insertar img de perfil
  let imageUser = usuario.photoURL;
  const imgProfile = document.createElement("img");
  imgProfile.className = "profilePhoto";
  imgProfile.src = imageUser != null ? imageUser : "img/profile-17.jpg" //se img es null utiliza el logo como img de perfil
  divProfile.appendChild(imgProfile);

  //Create logout icon

  const logOutDiv = document.createElement("div");
  logOutDiv.className = "logOut-div";
  divProfileNav.appendChild(logOutDiv);

  const iconLogOut = document.createElement("i");
  iconLogOut.className = "fa-solid fa-right-from-bracket fa-2x";
  logOutDiv.appendChild(iconLogOut);
  // Evento para salir de la APP
  iconLogOut.addEventListener("click", () => {
    console.log("hola hola");
    logOut();
  });

  ////////////////////////////////     MAIN       ///////////////////////////
  //  Crear etiqueta main
  const main = document.createElement("main");
  root.appendChild(main);
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
  imgProfileLeft.className = "profilePhoto";
  imgProfileLeft.setAttribute("src", "img/profile-1.jpg");
  profilePhoto.appendChild(imgProfileLeft);
  // Div text
  const handle = document.createElement("div");
  handle.className = "handle";
  profileLeft.appendChild(handle);
  // Crear h4 text name
  const textName = document.createElement("h4");
  textName.setAttribute("text", "Rositaaaaaaaaaaa");
  handle.appendChild(textName);
  // Create username text
  const username = document.createElement("p");
  username.className = "text-muted";
  handle.appendChild(username);
  username.setAttribute("text", "@Rosita");

  ///////////////////////      SIDEBAR /////////////////

  const sidebar = document.createElement("div");
  sidebar.className = "sidebar";
  sidebarleft.appendChild(sidebar);
  // Create label a
  const aHome = document.createElement("a");
  aHome.className = "menu-item";
  sidebar.appendChild(aHome);
  // Create span
  const spanHome = document.createElement("span");
  aHome.appendChild(spanHome);
  // Create icon home
  const iconHome = document.createElement("i");
  iconHome.className = "fa-solid fa-house-chimney fa-lg";
  spanHome.appendChild(iconHome);
  //Create h3 Home
  const textHome = document.createElement("h3");
  textHome.textContent = "Home";
  aHome.appendChild(textHome);
  //Create a explore
  const aExplore = document.createElement("a");
  aExplore.className = "menu-item";
  sidebar.appendChild(aExplore);
  // Create span explore
  const spanExplore = document.createElement("span");
  aExplore.appendChild(spanExplore);
  //Create icon Explore
  const iconExplore = document.createElement("i");
  iconExplore.className = "fa-regular fa-compass fa-lg";
  spanExplore.appendChild(iconExplore);
  //Create H3 Explore
  const textExplore = document.createElement("h3");
  textExplore.textContent = "Explore";
  aExplore.appendChild(textExplore);
  //Create a Notification
  const aNotification = document.createElement("a");
  aNotification.className = "menu-item";
  aNotification.setAttribute("id", "notifications");
  sidebar.appendChild(aNotification);
  // Create span Notification
  const spanNotification = document.createElement("span");
  aNotification.appendChild(spanNotification);
  //Create icon Notification
  const iconNotification = document.createElement("i");
  iconNotification.className = "fa-solid fa-bell fa-lg";
  spanNotification.appendChild(iconNotification);
  // Create small Notification
  const smallNotification = document.createElement("small");
  smallNotification.className = "notification-count";
  smallNotification.textContent = "9+";
  iconNotification.appendChild(smallNotification);
  //Create H3 Notification
  const textNotification = document.createElement("h3");
  textNotification.textContent = "Notification";
  aNotification.appendChild(textNotification);
  // Create a message notification
  const aNotMess = document.createElement("a");
  aNotMess.className = "menu-item";
  aNotMess.setAttribute("id", "messages-notifications");
  sidebar.appendChild(aNotMess);
  // Create span message notification
  const spanMessage = document.createElement("span");
  aNotMess.appendChild(spanMessage);
  // Create icon Message
  const iconMessage = document.createElement("i");
  iconMessage.className = "fa-solid fa-envelope fa-lg";
  spanMessage.appendChild(iconMessage);
  //Create small notification message
  const smallNotMessage = document.createElement("small");
  smallNotMessage.className = "notification-count";
  smallNotMessage.textContent = "6";
  iconMessage.appendChild(smallNotMessage);
  // Create h3 Message
  const textMessage = document.createElement("h3");
  textMessage.className = "Messages";
  textMessage.textContent = "Messages";
  aNotMess.appendChild(textMessage);

  // middle container

  const middle = document.createElement("div");
  middle.className = "middle";
  feedContainer.appendChild(middle);

  //STORIES
  // stories container

  // const storiesContainer = document.createElement("div");
  // storiesContainer.className = "stories";
  // middle.appendChild(storiesContainer);
  // // story container
  // const story = document.createElement("div");
  // story.className = "story";
  // storiesContainer.appendChild(story);
  // // story photo 1
  // const storyPhoto = document.createElement("div");
  // storyPhoto.className = "profile-photo";
  // story.appendChild(storyPhoto);
  // const storyImg = document.createElement("img");
  // storyImg.className = "profilePhoto";
  // storyImg.setAttribute("src", "/img/profile-12.jpg");
  // storyImg.setAttribute("alt", "User's story")
  // story.appendChild(storyImg);
  // const storyName = document.createElement("p")
  // storyName.className = "storyName";
  // storyName.textContent = "Your story";
  // story.appendChild(storyName);

  // // story2 container
  // const story2 = document.createElement("div");
  // story2.className = "story";
  // storiesContainer.appendChild(story2);
  // // story photo 2

  // const storyPhoto2 = document.createElement("div");
  // storyPhoto2.className = "profile-photo";
  // story2.appendChild(storyPhoto2);
  // const storyImg2 = document.createElement("img");
  // storyImg2.className = "profilePhoto";
  // storyImg2.setAttribute("src", "/img/profile-15.jpg");
  // storyImg2.setAttribute("alt", "User's story")
  // story2.appendChild(storyImg2);
  // const storyName2 = document.createElement("p")
  // storyName2.className = "storyName";
  // storyName2.textContent = "Juanito Perez";
  // story2.appendChild(storyName2);

  // // story3 container
  // const story3 = document.createElement("div");
  // story3.className = "story";
  // storiesContainer.appendChild(story3);
  // // story photo 3

  // const storyPhoto3 = document.createElement("div");
  // storyPhoto3.className = "profile-photo";
  // story3.appendChild(storyPhoto3);
  // const storyImg3 = document.createElement("img");
  // storyImg3.className = "profilePhoto";
  // storyImg3.setAttribute("src", "/img/profile-10.jpg");
  // storyImg3.setAttribute("alt", "User's story")
  // story3.appendChild(storyImg3);
  // const storyName3 = document.createElement("p")
  // storyName3.className = "storyName";
  // storyName3.textContent = "Lilla James";
  // story3.appendChild(storyName3);

  // // story4 container
  // const story4 = document.createElement("div");
  // story4.className = "story";
  // storiesContainer.appendChild(story4);
  // // story photo 4

  // const storyPhoto4 = document.createElement("div");
  // storyPhoto4.className = "profile-photo";
  // story4.appendChild(storyPhoto4);
  // const storyImg4 = document.createElement("img");
  // storyImg4.className = "profilePhoto";
  // storyImg4.setAttribute("src", "/img/profile-13.jpg");
  // storyImg4.setAttribute("alt", "User's story")
  // story4.appendChild(storyImg4);
  // const storyName4 = document.createElement("p")
  // storyName4.className = "storyName";
  // storyName4.textContent = "Pepito";
  // story4.appendChild(storyName4);

  // // story5 container
  // const story5 = document.createElement("div");
  // story5.className = "story";
  // storiesContainer.appendChild(story5);
  // // story photo 5

  // const storyPhoto5 = document.createElement("div");
  // storyPhoto5.className = "profile-photo";
  // story5.appendChild(storyPhoto5);
  // const storyImg5 = document.createElement("img");
  // storyImg5.className = "profilePhoto";
  // storyImg5.setAttribute("src", "/img/profile-16.jpg");
  // storyImg5.setAttribute("alt", "User's story")
  // story5.appendChild(storyImg5);
  // const storyName5 = document.createElement("p")
  // storyName5.className = "storyName";
  // storyName5.textContent = "Barack Obama";
  // story5.appendChild(storyName5);

  // // story6 container
  // const story6 = document.createElement("div");
  // story6.className = "story";
  // storiesContainer.appendChild(story6);
  // // story photo 6

  // const storyPhoto6 = document.createElement("div");
  // storyPhoto6.className = "profile-photo";
  // story6.appendChild(storyPhoto6);
  // const storyImg6 = document.createElement("img");
  // storyImg6.className = "profilePhoto";
  // storyImg6.setAttribute("src", "/img/profile-20.jpg");
  // storyImg6.setAttribute("alt", "User's story")
  // story6.appendChild(storyImg6);
  // const storyName6 = document.createElement("p")
  // storyName6.className = "storyName";
  // storyName6.textContent = "Goku";
  // story6.appendChild(storyName6);

  // Create post form
  const createPost = document.createElement("form");
  createPost.className = "create-post";
  middle.appendChild(createPost);
  /// profile img
  const divProfPh = document.createElement("div");
  divProfPh.className = "profile-photo";
  createPost.appendChild(divProfPh);
  const profileImg = document.createElement("img");
  profileImg.className = "profilePhoto";
  profileImg.setAttribute("src", "/img/profile-1.jpg");
  divProfPh.appendChild(profileImg);
  //create post
  const postInput = document.createElement("input");
  postInput.className = "text-input";
  postInput.setAttribute("type", "text");
  postInput.setAttribute("placeholder", "What's on your mind?");
  createPost.appendChild(postInput);
  // post buttom
  const submitBtn = document.createElement("input");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("value", "Post");
  submitBtn.className = "btn btn-primary";
  createPost.appendChild(submitBtn);
  //Evento create post
  createPost.addEventListener("submit", (e) => {
    e.preventDefault();
    const textPost = document.querySelector(".text-input");
    savePost(textPost.value);
    // para resetear el input de texto createPost.reset();
  });

  // feeds div
  const feeds = document.createElement("div");
  feeds.className = "feeds";
  middle.appendChild(feeds);

  // feed
  const divFeed = document.createElement("div");
  divFeed.className = "feed";
  feeds.appendChild(divFeed);
  

  // feeds
  const divFeeds = document.createElement("div");
  divFeeds.className = "feeds";
  middle.appendChild(divFeeds);


  // create right container
  const right = document.createElement("div");
  right.className = "right";
  feedContainer.appendChild(right);
  // messages
  const rightMessage = document.createElement("div");
  rightMessage.className = "messages";
  right.appendChild(rightMessage);
  const heading = document.createElement("div");
  heading.className = "heading";
  rightMessage.appendChild(heading);
  const textMessageRight = document.createElement("h4");
  textMessageRight.textContent = "Messages";
  heading.appendChild(textMessageRight);
  // right message icon
  const rightMessIcon = document.createElement("i");
  rightMessIcon.className = "uil uil-edit";
  heading.appendChild(rightMessIcon);

  //message search bar
  const searchMessage = document.createElement("div");
  searchMessage.className = "search-bar";
  heading.appendChild(searchMessage);
  //icon
  const searchMessIcon = document.createElement("i");
  searchMessIcon.className = "uil uil-search";
  searchMessage.appendChild(searchMessIcon);

  //  Input search Messages
  const inputMessage = document.createElement("input");
  inputMessage.setAttribute("type", "search");
  inputMessage.setAttribute("placeholder", "Search messages");
  inputMessage.setAttribute("id", "message-search");
  searchMessage.appendChild(inputMessage);
  // Message Category
  const categoryMessage = document.createElement("div");
  categoryMessage.className = "category";
  rightMessage.appendChild(categoryMessage);
  // Message Active
  const activeMesage = document.createElement("h6");
  activeMesage.className = "active";
  activeMesage.textContent = "Primary";
  categoryMessage.appendChild(activeMesage);
  // General
  const general = document.createElement("h6");
  general.textContent = "General";
  categoryMessage.appendChild(general);
  // Message request
  const messageRequest = document.createElement("h6");
  messageRequest.className = "message-requests";
  messageRequest.textContent = "Requests(7)";
  categoryMessage.appendChild(messageRequest);
  // Message photo
  const messageDivPhoto = document.createElement("div");
  messageDivPhoto.className = "message";
  rightMessage.appendChild(messageDivPhoto);
  // div Profile photo
  const divProfilePhoto = document.createElement("div");
  divProfilePhoto.className = "profile-photo";
  messageDivPhoto.appendChild(divProfilePhoto);
  // Photo message
  const photoMessageimg = document.createElement("img");
  photoMessageimg.setAttribute("src", "/img/profile-10.jpg");
  divProfilePhoto.appendChild(photoMessageimg);
  // active
  const divActive = document.createElement("div");
  divActive.className = "active";
  divProfilePhoto.appendChild(divActive);
  //message body
  const messageBody = document.createElement("div");
  messageBody.className = "message-body";
  messageDivPhoto.appendChild(messageBody);
  // message user
  const messageUser = document.createElement("h5");
  messageUser.textContent = "Edem Quist";
  messageBody.appendChild(messageUser);
  // message text
  const messageText = document.createElement("p");
  messageText.className = "text-muted";
  messageText.textContent = "Just wake up bruh";
  messageBody.appendChild(messageText);

  //Friends request
  const divFriendRequest = document.createElement("div");
  divFriendRequest.className = "friend-request";
  right.appendChild(divFriendRequest);
  const requestTittle = document.createElement("h4");
  requestTittle.textContent = "Requests";
  divFriendRequest.appendChild(requestTittle);
  // requests
  const request = document.createElement("div");
  request.className = "request";
  divFriendRequest.appendChild(request);
  //info request
  const requestInfo = document.createElement("div");
  requestInfo.className = "info";
  request.appendChild(requestInfo);
  // request photo
  const requestPhoto = document.createElement("div");
  requestPhoto.className = "profile-photo";
  requestInfo.appendChild(requestPhoto);
  const photoRequestimg = document.createElement("img");
  photoRequestimg.setAttribute("src", "/img/profile-13.jpg");
  requestPhoto.appendChild(photoRequestimg);
  // friend request
  const divRequestName = document.createElement("div");
  requestInfo.appendChild(divRequestName);
  const requestName = document.createElement("h5");
  requestName.textContent = "Hajia Bintu";
  divRequestName.appendChild(requestName);
  //Text muted
  const requestMutual = document.createElement("p");
  requestMutual.className = "text-muted";
  requestMutual.textContent = "8 mutual friends";
  divRequestName.appendChild(requestMutual);
  // buttons
  const requestActions = document.createElement("div");
  requestActions.className = "action";
  request.appendChild(requestActions);
  //Button accept
  const requestAccept = document.createElement("button");
  requestAccept.className = "btn btn-primary";
  requestAccept.textContent = "Accept";
  requestActions.appendChild(requestAccept);
  //Button decline
  const requestDecline = document.createElement("button");
  requestDecline.className = "btn";
  requestDecline.textContent = "Decline";
  requestActions.appendChild(requestDecline);

  return root;
};
