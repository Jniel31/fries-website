// Opens the file chooser for slot k (single file) or the gallery (k = null, multiple).
function openPick(k) {
  pk = k;
  pick.multiple = !k;
  pick.click();
}
