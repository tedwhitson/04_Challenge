const usernameInput = document.querySelector('#text-UN');
const passwordInput = document.querySelector('#text-PW');
const contentInput = document.querySelector('#text-CT');
const submitButton = document.querySelector('#Submit');

submitButton.addEventListener('click', function (event) {
  event.preventDefault();

  const postInfo = {
    username: usernameInput.value.trim(),
     if (username === '') {
        return;
     }
     
    password: passwordInput.value.trim(), 
     if (password === '') {
        return;
     }

    content: contentInput.value.trim(),
     if (content === '') {
        return;
     }
     
  };

  
const jsonPost = JSON.stringify(postInfo);
  localStorage.setItem('postInfo', jsonPost);


});
