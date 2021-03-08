var routeAppController = angular.module('routeAppController', []);

routeAppController.controller('homeCtrl',['$scope',
    function($scope){
        $scope.todoList = [
            {
                title: "Straddle Front",
                cochee: false,
                date: "11 Mar",
                time: "3s",
                context: "Autres",
                url: "https://www.google.fr/",
                description: "Sullivan doit faire ça cette semaine au parc."
            }, ];
        localStorage.setItem("todolist", $scope.todoList);
    }
])

routeAppController.controller('updateCtrl',['$scope',
    function($scope){
        $scope.message = "Bienvenue !"
    }
])