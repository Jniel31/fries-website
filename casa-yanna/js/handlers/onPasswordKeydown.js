// Enter submits the passcode; Escape closes the dialog.
function onPasswordKeydown(e) {
  if (e.key === 'Enter') tryLogin();
  if (e.key === 'Escape') lg.hidden = true;
}
