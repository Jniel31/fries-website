// File chooser changed: add the chosen files, then reset the input.
function onPickChange() {
  if (pick.files.length) addFiles(pick.files, pk);
  pick.value = '';
}
