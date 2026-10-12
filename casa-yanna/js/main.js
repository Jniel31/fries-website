// Entry point: wires up event listeners and runs the first render.
// Loaded last, after every function file (see index.html).

// Images from the images/ folder: fall back if a file is missing
document.addEventListener('error', onImageError, true);

// Photo picking + drag and drop
pick.onchange = onPickChange;
dz.onclick = onDropzoneClick;
dz.onkeydown = onDropzoneKeydown;
document.addEventListener('dragover', onDocDragOver);
document.addEventListener('drop', onDocDrop);
av.addEventListener('click', onAdminClick);

// Initial render
drawHero();
drawGal();
render();

// Menu + cart
document.querySelector('.sizes').addEventListener('click', onSizeClick);
document.addEventListener('click', onDocClick);
document.getElementById('open').onclick = openCart;
document.getElementById('close').onclick = closeCart;
document.getElementById('checkout').onclick = onCheckout;
document.getElementById('burger').addEventListener('click', toggleNav);
sync();

// Staff login + admin
document.getElementById('stafflogin').onclick = onStaffLoginClick;
document.getElementById('lcancel').onclick = onLoginCancel;
document.getElementById('lgo').onclick = tryLogin;
pw.onkeydown = onPasswordKeydown;
document.getElementById('viewsite').onclick = onViewSite;
document.getElementById('logout').onclick = onLogout;
applyAdmin();
