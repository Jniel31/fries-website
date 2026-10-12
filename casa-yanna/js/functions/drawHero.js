// Renders the hero photo (or the placeholder box) on the home page.
function drawHero() {
  document.getElementById('herowrap').innerHTML = photos.hero
    ? '<img src="' + photos.hero + '" alt="Casa Yanna fries">'
    : imgTag("hero", "Casa Yanna fries", "#2E4A36");
}
