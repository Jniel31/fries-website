// While dragging, highlight the admin slot or drop zone under the cursor.
function onDocDragOver(e) {
  e.preventDefault();
  clearOver();
  if (!admin || av.hidden) return;
  var el = e.target.closest && e.target.closest('#adminview [data-k],#drop');
  if (el) el.classList.add('over');
}
