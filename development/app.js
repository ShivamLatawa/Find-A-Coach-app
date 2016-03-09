var app = angular.module('4DxApp',['ui.router']);

app.config(function($urlRouterProvider, $stateProvider){
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home',{
    url : '/home',
    templateUrl : 'templates/home.html',
    controller : 'HomeController'
  })
})
