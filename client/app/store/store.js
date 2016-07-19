(function(angular) {
  'use strict';

  angular.module( "app" ).controller('store',
    ['$state', '$stateParams', controller] );

  function controller($state, $stateParams) {
    var vm  = this;
    vm.products = [ // TODO: Move this to a service
      {sku: 'A', price: 3.14, label: 'Pizza'},
      {sku: 'B', price: 1.88, label: 'Pretzels'},
      {sku: 'C', price: 0.50, label: 'Oranges'},
      {sku: 'D', price: 0.60, label: 'Grapes'},
      {sku: 'E', price: 1.19, label: 'Grape Soda'},
      {sku: 'F', price: 1.19, label: 'Orange Soda'},
      {sku: 'G', price: 2.99, label: 'Cheese'},
      {sku: 'H', price: 1.99, label: 'Milk'},
      {sku: 'I', price: 2.49, label: 'Eggs'}
    ];
  }

}( this.angular ));