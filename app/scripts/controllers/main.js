'use strict';

/**
 * @ngdoc function
 * @name myatmApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myatmApp
 */
angular.module('myatmApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
