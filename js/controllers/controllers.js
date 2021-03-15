var routeAppController = angular.module('routeAppController', []);

routeAppController.controller('taskCtrl',['$scope', '$location', function($scope, $location) {
    $scope.nb = $location.search().nb;

    $scope.todoList = [
        {
            title: "Straddle Front",
            cochee: false,
            date: "11 Mar",
            time: "10:30",
            context: "Autres",
            url: "https://www.google.fr/",
            description: "Sullivan doit faire ça cette semaine au parc. J'aime les pates et j'aime surtout les carbonaras, pas toi ? viens on crée un réseau social qui détronera facebook. "
        },
        {
            title: "Full Planche",
            cochee: false,
            date: "11 Jll",
            time: "17h45",
            context: "Autres",
            url: "https://www.google.fr/",
            description: "Christophe doit faire une full planche, ce jeudi, question de vie ou de mort, il doit la réussir. Bonne chance mec, j'y crois pas, mais bonne chance."
        }];
    localStorage.setItem("todoList", $scope.todoList);
    localStorage.setItem("nb", $scope.nb);
}])

routeAppController.controller('saveCtrl',['$scope', function($scope){

    $scope.save = function() {
        $scope.todoList.push({
            title: $scope.input_title,
            cochee: false,
            date: $scope.input_date,
            time: $scope.input_time,
            ocntext: $scope.input_context,
            url: $scope.input_url,
            description: $scope.sinput_description
        })
        localStorage.setItem("todoList", $scope.todoList);
        console.log($scope.todoList);
    }
}
])

routeAppController.controller('scopeCtrl',['$scope',
    function($scope){
        $scope.show = function() {
            console.log($scope.todoList);
        }
    }
])