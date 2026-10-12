// Handles Upload/Replace and Remove buttons inside the admin screen.
function onAdminClick(e) {
  var up = e.target.closest('.mbtn'),
      rm = e.target.closest('.mrm,.ph');
  if (up) {
    openPick(up.dataset.k);
  } else if (rm) {
    delete photos[rm.dataset.k];
    save();
    refreshAll();
  }
}
