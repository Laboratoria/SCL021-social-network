const posts = () => {
    //Se crea Div principal que contiene HTML de Login 
     const containerPosts = document.createElement("div");
     containerPosts .classList.add("mainLogin");
     const textReset = document.createElement("p");
     textReset.textContent = `Post`;
     containerPosts.appendChild(textReset)
 
 
     return  containerPosts ;
 };
 
 export {posts}
