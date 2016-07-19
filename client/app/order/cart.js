/*
 * Cart viewmodel associated with cart.html view
 */
(function(angular) {
  'use strict';

  angular.module("app").controller('cart',
    ['pricing', controller]);

  function controller(pricing) {
    var vm = this;
    vm.hasExtraCost = false;
    vm.cartOrder = {};

    vm.cartItemState = cartItemState;
    vm.updateCosts = calculateCosts;
    vm.removeItem = removeItem;

    calculateCosts();

    /////////////////////
    function calculateCosts() {
      var cart = vm.cartOrder;
      vm.hasExtraCost = false;
      vm.haveItems = (cart && cart.orderItems) ? (cart.orderItems.length > 0) : false;
      if (vm.haveItems) {
        pricing.calcOrderItemsTotal(cart);
        vm.hasExtraCost = pricing.orderHasExtraCostOptions(cart);
      }
    }

    function cartItemState(item) {
      var params = {orderId: 'cart', productType: item.product.type, orderItemId: item.id};
      return 'app.order.item(' + JSON.stringify(params) + ')';
      //return '#/order/cart/'+item.product.type+'/'+item.id;
    }

    function removeItem(item) {
      vm.cartOrder.removeItem(item);
      calculateCosts();
    }
  }

})(this.angular);
