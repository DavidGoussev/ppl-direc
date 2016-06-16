(function() {
  'use strict';

  angular.module('pplDirec', [
    'ui.router'
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  });
})();
