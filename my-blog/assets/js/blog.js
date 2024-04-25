
const backButton = document.querySelector('#Back');

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './index.html';
});

const jsonPost = readFromStorage();
return(jsonPost.username,
      jsonPost.posttile,
      jsonPost.content
);


