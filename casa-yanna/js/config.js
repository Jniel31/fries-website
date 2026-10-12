// Static data and shared app state for the menu and cart.

var P = function (n) { return "\u20B1" + n; };

var base = [79, 109, 149];
var SN = ["Piccola", "Media", "Grande"];

// [name, description, price add-on, accent color, "start here" flag]
var items = [
  ["Sale Marino", "Fine sea salt on hot fries. The classic.", 0, "#E2B658", 1],
  ["Rosmarino", "Fresh rosemary and sea salt.", 10, "#7E9A6A"],
  ["Aglio e Parmigiano", "Garlic, parmesan and parsley.", 15, "#EADFBF"],
  ["Pomodoro e Basilico", "Sun-dried tomato and basil.", 10, "#C8553D"],
  ["Quattro Formaggi", "A shake of four cheeses.", 20, "#F0C86A"],
  ["Peperoncino", "Chili flakes and olive oil salt.", 10, "#B8402E"]
];

var size = 1;
var cart = {};
