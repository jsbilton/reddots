angular

.module('cart')
.factory('CartService', function ($http, $rootscope) {
  // body...


  return {
    cart: getCart,
    addToCart: addToCart,
    clearCart: clearCart,
    getCart: getCart,
  }


});
