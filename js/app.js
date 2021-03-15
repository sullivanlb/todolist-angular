var app = angular.module('app', ['ngRoute', 'routeAppController']);

app.config(['$routeProvider', 
    function($routeProvider){
        $routeProvider
        .when('/home',{
            templateUrl : 'partials/home.html',
            controller : 'taskCtrl'
        })
        .when('/update',{
            templateUrl : 'partials/update.html',
            controller : 'taskCtrl'
        })
        .when('/add',{
            templateUrl : 'partials/add.html',
            controller : 'taskCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        })
    }
])