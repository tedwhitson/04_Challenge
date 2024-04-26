const themeButtonEl = $('#theme-btn');
// const refreshButtonEl = $('#refresh-btn');



let isDark = true;

themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': 'grey', color: 'black' });
    isDark = !isDark;
  } else {
    $('body').css({ 'background-color': 'white', color: 'black' });
    isDark = !isDark;
  }
});

// Universal localStorage.getItem function

//function readFromStorage() {
//    const jsonPost = JSON.parse(localStorage.getItem("postInfo"));
//    return jsonPost;
//}