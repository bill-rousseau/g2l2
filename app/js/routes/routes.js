'use strict';

g2l2.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/view2', {
    templateUrl: 'views/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/view1', {
    templateUrl: 'views/view1.html',
    controller: 'View1Ctrl'
  })
  .otherwise({redirectTo: '/view1'});
}]);