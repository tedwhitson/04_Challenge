const usernameInput = document.querySelector('#userName');
const passwordInput = document.querySelector('#postTitle');
const contentInput = document.querySelector('#postContent');
const submitButton = document.querySelector('#Submit');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const postInfo = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(), 
    content: contentInput.value.trim()
  };

const jsonPost = JSON.stringify(postInfo);
  localStorage.setItem("postInfo", jsonPost);

  window.location.href = '/my-blog/blog.html';

});
