// Removes the drag-over highlight from all elements.
function clearOver() {
  document.querySelectorAll('.over').forEach(function (x) { x.classList.remove('over'); });
}
