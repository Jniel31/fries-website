// Renders the menu grid for the currently selected size.
// Photo priority: admin upload > images/menu/<slug>.jpg|png|webp > placeholder box.
function render() {
  document.getElementById('grid').innerHTML = items.map(function (it, i) {
    var p = base[size] + it[2];
    return '<li class="card"><div class="art">' +
      (photos['m' + i] ? '<img src="' + photos['m' + i] + '" alt="' + it[0] + ' fries">' : imgTag('menu/' + slug(it[0]), it[0] + ' fries', it[3])) +
      '</div><div class="top"><h3>' + it[0] + '</h3><span class="price">' + P(p) + '</span></div>' +
      (it[4] ? '<span class="pill">Start here</span>' : '') +
      '<p>' + it[1] + '</p><button class="add" data-i="' + i + '">Add ' + SN[size] + '</button></li>';
  }).join('');
}
