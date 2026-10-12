// <img> that loads images/<base>.jpg, then .png, then .webp (see onImageError).
// c is the placeholder color used if no file exists.
function imgTag(base, alt, c) {
  return '<img src="images/' + base + '.jpg" data-base="images/' + base + '" data-n="0" data-c="' + c + '" alt="' + alt + '">';
}
