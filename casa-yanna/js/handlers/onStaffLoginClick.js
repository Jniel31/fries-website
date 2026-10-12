// Footer "Staff login" / "Open admin" button.
function onStaffLoginClick() {
  if (admin) { openAdmin(); return; }
  lg.hidden = false;
  document.getElementById('lerr').textContent = '';
  pw.value = '';
  pw.focus();
}
