// Saves photos to localStorage. Returns true on success, false if storage is full.
function save() {
  try {
    localStorage.setItem('yanna_photos', JSON.stringify(photos));
    return true;
  } catch (e) {
    toast('Storage is full. Remove a photo and try again.');
    return false;
  }
}
