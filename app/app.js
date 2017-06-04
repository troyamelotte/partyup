var app = angular.module("app", ['ui.router','ngMaterial']);

//services
app.config(($stateProvider,$urlRouterProvider)=>{
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('login',{
      title: 'Sign In',
      url: '/login',
      templateUrl: './components/login/login.html',
      controller: 'LoginCntrl'
    })
})
