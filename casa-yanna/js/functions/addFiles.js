// Adds image files to a specific slot (key) or, with no key, to the gallery.
function addFiles(files, key) {
  var l = [].slice.call(files).filter(function (f) { return /^image\//.test(f.type); });
  if (!l.length) { toast('Please choose an image file.'); return; }
  if (key) l = l.slice(0, 1);

  l.forEach(function (f) {
    shrink(f, function (d) {
      var k = key || ('g:' + Date.now() + Math.random().toString(36).slice(2, 6)),
          old = photos[k];
      photos[k] = d;
      if (!save()) {
        if (old) photos[k] = old; else delete photos[k];
        return;
      }
      refreshAll();
      toast('Photo added');
    });
  });
}
