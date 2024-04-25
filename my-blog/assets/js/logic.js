const themeButtonEl = $('#theme-btn');
// const refreshButtonEl = $('#refresh-btn');



// light theme state
let isDark = true;

// Click event causes alert light theme toggle
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

function readFromStorage() {

    const jsonPost = JSON.parse(localStorage.getItem("postInfo"));
    return jsonPost;
}