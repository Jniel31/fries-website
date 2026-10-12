// Re-renders the cart drawer, item count, and total.
function sync() {
  var k = Object.keys(cart), n = 0, t = 0;

  document.getElementById('items').innerHTML = k.length
    ? k.map(function (id) {
        var c = cart[id];
        n += c.q;
        t += c.q * c.p;
        return '<li><div><b>' + c.n + '</b><div style="color:var(--mute);font-size:14px">' + c.s + ' &middot; ' + P(c.p) + '</div><div class="qty"><button data-d="-1" data-k="' + id + '" aria-label="Less">&minus;</button>' + c.q + '<button data-d="1" data-k="' + id + '" aria-label="More">+</button></div></div><b>' + P(c.q * c.p) + '</b></li>';
      }).join('')
    : '<li class="empty">Your box is empty. Pick a flavor from the menu.</li>';

  document.getElementById('count').textContent = n;
  document.getElementById('total').textContent = P(t);
}
