// Photo + admin state restored from the browser's storage.

var photos = {};
try { photos = JSON.parse(localStorage.getItem('yanna_photos') || '{}'); } catch (e) {}

var admin = false;
try { admin = sessionStorage.getItem('yanna_admin') === '1'; } catch (e) {}

// Key of the photo slot currently being picked (null = gallery).
var pk = null;
