// function notImplemented() {
//   throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
// }

function addToCart(cart, item, quantity = 1) { 
  if (cart.length === 0){
    cart.push({ ...item, quantity: quantity })
  } else {
    
  }
  
  return cart; 
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
