var app = angular.module('app', ['ngRoute', 'routeAppController']);

app.config(['$routeProvider', 
    function($routeProvider){
        $routeProvider
        .when('/home',{
            templateUrl : 'partials/home.html',
            controller : 'homeCtrl'
        })
        .when('/update',{
            templateUrl : 'partials/update.html',
            controller : 'updateCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
    }
])