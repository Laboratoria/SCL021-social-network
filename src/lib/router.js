// ESTE ROUTER SI ES
import { login } from '../component/login.js';
import { register } from '../component/register.js';
import { posts } from '../component/posts.js';

// definir hash
const myRouter = (hash) => {
  const rootBox = document.getElementById('mainRoute');
  switch (hash) {
    case '#/':
    case '#/login':
      document.getElementById('mainRoute').innerHTML = '';
      rootBox.appendChild(login());
      break;
    case '#/register':
      document.getElementById('mainRoute').innerHTML = '';
      rootBox.appendChild(register());
      break;
    case '#/posts':
      document.getElementById('mainRoute').innerHTML = '';
      rootBox.appendChild(posts());
      break;
    default:
      rootBox.innerHTML = 
      `<div style="width:100%;height:0;padding-bottom:60%;position:relative;">
      <iframe src="https://giphy.com/embed/de7YjnUgKq5Ta" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>
      <a href="https://giphy.com/gifs/games-arcade-de7YjnUgKq5Ta"></a>`

  }
};

export { myRouter };
