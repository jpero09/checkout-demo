(function(angular) {
  'use strict';

  angular.module('app').controller('header', ['$location', controller]);

  function controller( $location ) {

    var headerStates = [
      { name: 'Home', sref: 'app.home', roots: ['/home'] }
      ,{ name: 'Store', sref: 'app.store({productType: \'pizza\'})', roots: ['/order','/store'] }
      ,{ name: 'About', sref: 'app.about', roots: ['/about']}
    ];

    var vm = this;
    vm.homeSref    = 'app.home';
    vm.cartSref    = 'app.order.cart';
    vm.isSelected  = isSelected;
    vm.states      = headerStates;

    function isSelected( state ){
      var path = $location.path().toLowerCase() || '/home';
      var roots = state.roots;
      if (roots){
        for (var i = roots.length; i--;){
          if (-1 < path.indexOf(roots[i])){return true;}
        }
      }
      return false;
    }
  };

}( this.angular ));