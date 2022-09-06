  // Función para traer todo los datos de los posts y creación de Div para contenerlos
  displayPosts().then((value) => {
    value.forEach((doc) => {
      // PRIMERO DIV NOMBRE
      const postName = document.createElement('div');
      postName.setAttribute('id', '`${doc.id}`');
      allPosts.appendChild(postName);

      document.getElementById('`${doc.id}`').textContent += doc.name;
      
      // divPosts.innerHTML += `${doc.name} <br>`;
    });
  });