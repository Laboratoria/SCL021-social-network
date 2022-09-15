import { createLogin } from "../views/login.js";
import { signUp } from "../views/account.js";
import { error404 } from "../views/view404.js";
import { profile } from "../views/profile.js";
import { feed } from "../views/feed.js";

export const paths = (hash) => {
  const root = document.getElementById("root");
  root.innerHTML = "";
  console.log({hash})
  switch (hash) {
    
    case "#/":
      root.appendChild(createLogin());
      break;
    case "#/login":
      root.appendChild(createLogin());
      break;
    case "#/signUp":
      root.appendChild(signUp());
      break;
    case "#/profile":
      root.appendChild(profile());
      break;
    case "#/feed":
      root.appendChild(feed());
      break;
    default:
      root.appendChild(error404());
  }
};
