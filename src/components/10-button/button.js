// ------------------------------------------------------
// Button: toggle state
// ------------------------------------------------------
var b = document.querySelectorAll('.js-toggle')

for (var i = 0; i < b.length; i++) {
  b[i].addEventListener('click', function (e) {
    Util.customToggleClass(e.target, 'btn--active');
  });
}