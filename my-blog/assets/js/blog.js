const themeButtonEl = $('#theme-btn');
const refreshButtonEl = $('#refresh-btn');

// light theme state
let isDark = true;

// Click event causes alert light theme toggle
themeButtonEl.on('click', function () {
  if (isDark) {
    $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
    isDark = !isDark;
  } else {
    $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
    isDark = !isDark;
  }
});