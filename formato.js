let currentUser = "";

function login() {
  const usernameInput = document.getElementById('username');
  currentUser = usernameInput.value.trim();

  if (currentUser !== "") {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('forum-section').style.display = 'block';
  } else {
    alert("Por favor, ingresa tu nombre de usuario.");
  }
}

const form = document.getElementById('form');
const posts = document.getElementById('posts');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const mensaje = document.getElementById('mensaje').value;
  const imagenInput = document.getElementById('imagen');
  const imagen = imagenInput.files[0];

  const post = document.createElement('div');
  post.className = 'post';

  const reader = new FileReader();
  reader.onload = function(event) {
    post.innerHTML = <strong>${currentUser}</strong><p>${mensaje}</p>;
    if (imagen) {
      const img = document.createElement('img');
      img.src = event.target.result;
      post.appendChild(img);
    }
    posts.prepend(post);
    form.reset();
  };

  if (imagen) {
    reader.readAsDataURL(imagen);
  } else {
    post.innerHTML = <strong>${currentUser}</strong><p>${mensaje}</p>;
    posts.prepend(post);
    form.reset();
  }
});
