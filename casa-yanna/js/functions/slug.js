// "Aglio e Parmigiano" -> "aglio-e-parmigiano" (used for image file names).
function slug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
