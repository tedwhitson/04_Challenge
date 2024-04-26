
const backButton = document.querySelector('#Back');

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = './index.html';
});

const readFromStorage = () => {
        return JSON.parse(localStorage.getItem("postInfo"));
};

const renderjsonPost = () => {
  const blogPosts =  readFromStorage();
  const blogList = document.getElementsById('blog-list');

  blogList.innerHTML = '';

  blogPosts.forEach((jsonPost) => {
    const postElement = document.createElement ('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = `
    <h3>${jsonPost.posttitle}</h3>
    <p>${jsonPost.username}</p>
    <p>${jsonPost.content}</p>
    `;
    blogList.appendChild(postElement);
  });

 };

//return(jsonPost);
   

