// Dropping files onto an admin slot replaces that photo; on the drop zone adds to the gallery.
function onDocDrop(e) {
  e.preventDefault();
  clearOver();
  if (!admin || av.hidden) return;
  var el = e.target.closest && e.target.closest('#adminview [data-k],#drop');
  if (!el || !e.dataTransfer.files.length) return;
  addFiles(e.dataTransfer.files, el.id === 'drop' ? null : el.dataset.k);
}
