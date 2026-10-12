// Logs out of admin, hides the admin screen, and updates the footer button.
function onLogout() {
  admin = false;
  try { sessionStorage.removeItem('yanna_admin'); } catch (e) {}
  av.hidden = true;
  applyAdmin();
  toast('Logged out');
}
