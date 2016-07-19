/*
 * orderItem viewmodel associated with orderItem.html view
 * and its orderItem**.html sub-views.
 */
(function(angular) {
  'use strict';

  angular.module("app").controller('orderItem',
    ['$state', '$stateParams', 'orderItemOptionTypeVm', 'util', controller]);

  function controller($state, $stateParams, orderItemOptionTypeVm, util) {
    var vm = this;
    var cartOrder = dataservice.cartOrder;
    var lookups = dataservice.lookups;

    var info = getOrderItemInfo();

    if (info) {
      vm.addToCart = addToCart;
      vm.orderItem = info.orderItem;
      vm.product = info.product;
      vm.sizeVms = createSizeVms(info);
      vm.typeVms = orderItemOptionTypeVm.createVms(info.orderItem);

    }
    else {
      showMenu();
    }

    /////////////////////
    function addToCart() {
      console.log('addToCart?');
    }

    // Get the OrderItem information base on $stateParams
    function getOrderItemInfo() {
      var fromOrder = $stateParams.orderItemId != null;
      return fromOrder ? getInfoFromOrder() : getInfoByProduct();

      // Get the order item info from the order and orderItem id.
      function getInfoFromOrder() {
        var info = null
          , orderId = $stateParams.orderId
          , orderItemIid = +$stateParams.orderItemId;

        var orderItem = cartOrder.getSelectedItem(orderItemIid);

        if (orderItem) {
          info = {
            orderItem: orderItem,
            product: orderItem.product,
            sizes: lookups.productSizes.byProduct(orderItem.product)
          }
        }
        return info;
      }

      // Get the order item info from the productId.
      function getInfoByProduct() {
        var prodId = +$stateParams.productId;
        var product = lookups.products.byId(prodId);
        if (!product) {
          return null;
        }

        var sizes = lookups.productSizes.byProduct(product);
        
        return {
          orderItem: orderItem,
          product: product,
          sizes: sizes
        };
      }
    }

    function createSizeVms(info) {
      var isPremium = info.product.isPremium;
      return info.sizes.map(function(size) {
        return {
          id: size.id,
          name: size.name,
          price: isPremium ? (size.premiumPrice || size.price) : size.price
        };
      });
    }

    function showMenu() {
      $state.go('app.menu', {productType: $stateParams.productType});
    }
  }

}(this.angular));
