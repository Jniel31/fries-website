// Renders the admin media screen: page-photo slots and the gallery list.
function drawAdmin() {
  var defs = [['hero', 'Hero photo']].concat(items.map(function (it, i) { return ['m' + i, it[0]]; }));

  document.getElementById('slots').innerHTML = defs.map(function (d) {
    var k = d[0];
    return '<li class="slot" data-k="' + k + '"><div class="thumb">' +
      (photos[k] ? '<img src="' + photos[k] + '" alt="' + d[1] + '">' : 'No photo') +
      '</div><b>' + d[1] + '</b><button class="mbtn" data-k="' + k + '">' +
      (photos[k] ? 'Replace' : 'Upload') + '</button>' +
      (photos[k] ? '<button class="mrm" data-k="' + k + '">Remove</button>' : '') + '</li>';
  }).join('');

  var ks = Object.keys(photos)
    .filter(function (k) { return k.indexOf('g:') === 0; })
    .sort();

  document.getElementById('agal').innerHTML = ks.map(function (k) {
    return '<li><img src="' + photos[k] + '" alt="Gallery photo"><button class="ph" data-k="' + k + '" aria-label="Remove photo">Remove</button></li>';
  }).join('');
}
