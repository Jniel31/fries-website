// Checkout is not live in the preview; just shows a message.
function onCheckout() {
  toast(Object.keys(cart).length ? 'Checkout is not live yet (preview)' : 'Add something first');
}
