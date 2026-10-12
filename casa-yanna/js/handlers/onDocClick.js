// Document-wide click handler for adding to the cart and changing quantities.
function onDocClick(e) {
  var a = e.target.closest('.add');
  if (a) {
    var it = items[+a.dataset.i],
        p = base[size] + it[2],
        id = it[0] + size;
    cart[id] = cart[id] || { n: it[0], s: SN[size], p: p, q: 0 };
    cart[id].q++;
    sync();
    toast(it[0] + ' (' + SN[size] + ') added');
    return;
  }

  var q = e.target.closest('.qty button');
  if (q) {
    var c = cart[q.dataset.k];
    c.q += +q.dataset.d;
    if (c.q < 1) delete cart[q.dataset.k];
    sync();
  }
}
