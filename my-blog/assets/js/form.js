const usernameInput = document.querySelector('#text-UN');
const passwordInput = document.querySelector('#text-PW');
const contentInput = document.querySelector('#text-CT');
const submitButton = document.querySelector('#Submit');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const postInfo = {
    username: usernameInput.value.trim(),
    password: passwordInput.value.trim(), 
    content: contentInput.value.trim(),
  };

const josnPost = JSON.stringify(postInfo);
  localStorage.setItem('postInfo', jsonPost);


});
