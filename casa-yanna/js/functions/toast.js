// Shows a short message at the bottom of the screen for ~1.8 seconds.
var tt;
function toast(m) {
  var el = document.getElementById('toast');
  el.textContent = m;
  el.classList.add('show');
  clearTimeout(tt);
  tt = setTimeout(function () { el.classList.remove('show'); }, 1800);
}
