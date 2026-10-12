// Enter/Space on the drop zone opens the file chooser (keyboard access).
function onDropzoneKeydown(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    openPick(null);
  }
}
