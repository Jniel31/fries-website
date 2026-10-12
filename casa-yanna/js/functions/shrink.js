// Reads an image file, scales it to max 1000px, and passes a JPEG data URL to cb.
function shrink(f, cb) {
  var r = new FileReader();
  r.onload = function () {
    var im = new Image();
    im.onload = function () {
      var m = 1000,
          sc = Math.min(1, m / Math.max(im.width, im.height)),
          c = document.createElement('canvas');
      c.width = Math.round(im.width * sc);
      c.height = Math.round(im.height * sc);
      c.getContext('2d').drawImage(im, 0, 0, c.width, c.height);
      cb(c.toDataURL('image/jpeg', .8));
    };
    im.onerror = function () { toast('That file could not be read as an image.'); };
    im.src = r.result;
  };
  r.readAsDataURL(f);
}
