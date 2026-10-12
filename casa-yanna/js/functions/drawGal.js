// Renders the public photo gallery and shows/hides its nav link and section.
function drawGal() {
  var ks = Object.keys(photos)
    .filter(function (k) { return k.indexOf('g:') === 0; })
    .sort();

  document.getElementById('gal').innerHTML = ks.map(function (k) {
    return '<li><img src="' + photos[k] + '" alt="Casa Yanna fries photo"></li>';
  }).join('');

  var show = ks.length > 0;
  document.getElementById('photos').hidden = !show;
  document.getElementById('navphotos').hidden = !show;
}
