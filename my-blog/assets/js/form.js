const usernameInput = document.querySelector('#userName');
const posttitleInput = document.querySelector('#postTitle');
const contentInput = document.querySelector('#postContent');
const submitButton = document.querySelector('#Submit');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const postInfo = {
    username: usernameInput.value.trim(),
    posttitle: posttitleInput.value.trim(), 
    content: contentInput.value.trim()
  };

const jsonPost = JSON.stringify(postInfo);
  localStorage.setItem("postInfo", jsonPost);

  window.location.href = './blog.html';

});
