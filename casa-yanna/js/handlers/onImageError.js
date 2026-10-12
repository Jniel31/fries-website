// A file-based image failed to load: try the next extension, else show the placeholder box.
function onImageError(e) {
  var img = e.target;
  if (!img.tagName || img.tagName !== 'IMG' || !img.dataset.base) return;
  var exts = ['jpg', 'png', 'webp'], n = +img.dataset.n + 1;
  if (n < exts.length) {
    img.dataset.n = n;
    img.src = img.dataset.base + '.' + exts[n];
  } else {
    img.parentNode.innerHTML = box(img.dataset.c);
  }
}
