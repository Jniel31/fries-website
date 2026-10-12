// Changes the selected size (Piccola / Media / Grande) and re-renders the menu.
function onSizeClick(e) {
  var b = e.target.closest('button');
  if (!b) return;
  size = +b.dataset.s;
  document.querySelectorAll('.sizes button').forEach(function (x) {
    x.setAttribute('aria-pressed', x === b);
  });
  render();
}
