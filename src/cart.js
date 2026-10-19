// function notImplemented() {
//   throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
// }

// const products = require('../../src/data/products');

function addToCart(cart, product, qty = 1) {
  if (qty === 0 || qty > product.stock) {
    throw new RangeError;
  }
  const productIndex = cart.findIndex(item => product.id === item.id);
  if (productIndex === -1) {
    cart.push({ ...product, quantity: qty })
  } else {
    cart[productIndex].quantity += qty;
  }
  return cart;
}
function changeQuantity(cart, id, qty) {
  const productIndex = cart.findIndex(item => id === item.id);
  if (productIndex.stock === 0 || productIndex === -1) {
    return cart;
  }
  if (qty === 0 || qty > cart[productIndex].stock) {
    throw new RangeError;
  }
  cart[productIndex].quantity = qty;
  return cart;
}
function removeFromCart(cart, id) {
  const productIndex = cart.findIndex(item => id === item.id);
  if (productIndex !== -1) {
    cart.splice(cart[productIndex], 1);
  }
  return cart;
}
function calculateCartSubtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
}
function calculateOrderTotal(cart, promo) {
  let subtotal = calculateCartSubtotal(cart);
  let delivery;
  let discount = 0;
  if (subtotal > 50000) {
    delivery = 0;
  } else {
    delivery = 30000;
  }

  if (promo === 'SAVE10' && subtotal >= 20000) {
    discount = 0.1 * subtotal;
  }

  let total = subtotal + delivery - discount;

  return { subtotal: subtotal, discount: discount, delivery: delivery, total: total }
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
