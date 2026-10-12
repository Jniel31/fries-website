// Returns the placeholder fries-box SVG, with seasoning dots in color c.
function box(c) {
  var sticks = "",
      xs = [78, 98, 118, 138, 158, 178, 198],
      hs = [84, 56, 76, 44, 70, 52, 80],
      tl = [-6, 4, -3, 5, -4, 3, -5];

  for (var i = 0; i < 7; i++) {
    sticks += '<rect x="' + xs[i] + '" y="' + (112 - hs[i]) + '" width="19" height="' + (hs[i] + 60) + '" rx="5" fill="#E2B658" stroke="#C99A3A" stroke-width="3" transform="rotate(' + tl[i] + ' ' + (xs[i] + 9) + ' 150)"/>';
  }

  var d = "";
  for (var j = 0; j < 18; j++) {
    d += '<circle cx="' + (84 + (j * 37) % 120) + '" cy="' + (52 + (j * 23) % 72) + '" r="2.6" fill="' + c + '"/>';
  }

  var leaf = '<path d="M226 108c18-26 40-26 46-12-10 18-30 24-46 12z" fill="#2E4A36"/><path d="M226 108c14-8 28-12 40-14" stroke="#F3EBDA" stroke-width="2" fill="none"/>';

  return '<svg viewBox="0 0 300 330" aria-hidden="true">' + sticks + d + leaf + '<path d="M52 150h196l-20 180H72z" fill="#FAF5E8" stroke="#2E4A36" stroke-width="3"/><path d="M60 196h180l-5 36H65z" fill="#2E4A36"/><text x="150" y="221" text-anchor="middle" font-family="Cormorant Garamond,serif" font-style="italic" font-weight="600" font-size="24" fill="#F3EBDA">Casa Yanna</text></svg>';
}
