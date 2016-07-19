/*
 * Configures the UI-Router states and their associated URL routes and views
 * Also adds 'state-change' reporting for debugging during development
 */
(function( angular ) {
  'use strict';

  angular.module('app')
    .config(['$stateProvider', '$urlRouterProvider', configureStates]);

  function configureStates($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app',
        {
          url: '',
          views: {
            'header': {
              templateUrl: 'app/layout/header.html'
            },
            'content': {
              templateUrl: 'app/layout/home.html'
            },
            'footer': {
              templateUrl: 'app/layout/footer.html'
            }
          }
        })
      .state( 'app.home',
        {
          url : '/home',
          views : {
            'content@' : {
              templateUrl: 'app/layout/home.html'
            }
          }
        })
      .state( 'app.about',
        {
          url : '/about',
          views : {
            'content@' : {
              templateUrl: 'app/layout/about.html'
            }
          }
        })
      .state( 'app.order',
        {
          url : '/order',
          views : {
            'content@' : {
              templateUrl: 'app/order/order.html'
            },
            'content@app.order' : {
              // NOTE: Blank until filled by a more specific app.order state
            }
          }
        })
      .state( 'app.order.item',
        {
          // An OrderItem editor state
          // The state the user picks an OrderItem from one of the order
          url : '/:orderId/:productType/:orderItemId',
          views : {
            'content@app.order' : {
              templateUrl : 'app/order/orderItem.html'
            }
          }
        })
      .state( 'app.order.product',
        {
          // An OrderItem editor state
          // The state after a user picks a product from a product menu
          url : '^/store/:productType/:productId',
          views : {
            'content@app.order' : {
              templateUrl : 'app/order/orderItem.html'
            }
          }
        })
      .state( 'app.order.cart',
        {
          // This state shows the Cart items list view
          url : '/cart',
          views : {
            'content@app.order' : {
              templateUrl : 'app/order/cart.html'
            }
          }
        })

      .state( 'app.store',
        {
          // This state shows the Product listings
          // from which a product can be selected; selection navigates to the
          // the produce details page.
          url: '/store/:productType',
          views : {
            'content@' : {
              templateUrl: 'app/store/store.html'
            }
          }
        })
      ;
  }

}( this.angular ));