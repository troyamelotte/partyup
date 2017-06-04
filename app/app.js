var app = angular.module("app", ['ui.router','ngMaterial']);

//services
app.config(($stateProvider,$urlRouterProvider)=>{
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('register',{
      title: 'Sign Up',
      url: '/register',
      templateUrl: './components/register/register.html',
      controller: 'RegisterCntrl'
    })
})
