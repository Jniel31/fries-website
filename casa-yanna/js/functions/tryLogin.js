// Checks the preview passcode and opens the admin screen on success.
function tryLogin() {
  if (pw.value === 'yanna') {
    admin = true;
    try { sessionStorage.setItem('yanna_admin', '1'); } catch (e) {}
    lg.hidden = true;
    applyAdmin();
    openAdmin();
  } else {
    document.getElementById('lerr').textContent = 'Wrong passcode. Try again.';
  }
}
