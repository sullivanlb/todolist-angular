var routeAppController = angular.module("routeAppController", []);

/**
 * Home controller - initialize or display existing tasks 
 */
routeAppController.controller("taskCtrl", ["$scope", "$location", function ($scope, $location) {
    $scope.nb = $location.search().nb;

    if (localStorage.getItem("todoList") != null) {
      //localStorage.removeItem("todoList")
      $scope.todoList = JSON.parse(localStorage.getItem("todoList"));
    }
    localStorage.setItem("nb", $scope.nb);
  },
]);

/**
 * Add form controller - when the save button is clicked add the task to the 
 * existing tasks list or create a new one if there is no tasks list
 */
routeAppController.controller("addCtrl", ["$scope", function ($scope) {
  $scope.add = function () {
    console.log($scope.input_context);

    console.log("hello")

    var month = "";
    var date2 = "";
    var hours = "";
    var minutes = "";
    if ($scope.input_date == undefined) {
      month = "";
      date2 = "";
    } else {
      switch ($scope.input_date.getMonth()) {
        case 1:
          month = "Jan";
        case 2:
          month = "Fev";
        case 3:
          month = "Mar";
        case 4:
          month = "Avr";
        case 5:
          month = "Mai";
        case 6:
          month = "Jui";
        case 7:
          month = "Jll";
        case 8:
          month = "Aou";
        case 9:
          month = "Sep";
        case 10:
          month = "Oct";
        case 11:
          month = "Nov";
        case 12:
          month = "Dec";
      }

      date2 = $scope.input_date.getDate();
    }

    if ($scope.input_time == undefined) {
      hours = "";
      minutes = "";
    } else {
      hours = $scope.input_time.getHours();
      minutes = $scope.input_time.getMinutes();
    }
    if ($scope.todoList != undefined) {
      $scope.todoList.push({
        title: $scope.input_title,
        cochee: false,
        date: date2 + " " + month,
        time: hours + ":" + minutes,
        context: $scope.input_context,
        url: $scope.input_url,
        description: $scope.input_description,
      });

      localStorage.setItem("todoList" , JSON.stringify($scope.todoList));
    } else {
      $scope.todoList = [
        {
          title: $scope.input_title,
          cochee: false,
          date: $scope.input_date.getDate() + " " + month,
          time: $scope.input_time.getHours() + ":" + $scope.input_time.getMinutes(),
          context: $scope.input_context,
          url: $scope.input_url,
          description: $scope.input_description,
        },
      ];
      localStorage.setItem("todoList" , JSON.stringify($scope.todoList));
    }
    console.log($scope.todoList);
  };
},
]);

/**
 * Update task controller - save the new information on the save button click
 */
routeAppController.controller("saveCtrl", ["$scope", function ($scope) {
    $scope.save = function () {
      console.log($scope.input_context);

      var month = "";
      var date2 = "";
      var hours = "";
      var minutes = "";
      if ($scope.input_date == undefined) {
        month = "";
        date2 = "";
      } else {
        switch ($scope.input_date.getMonth()) {
          case 1:
            month = "Jan";
          case 2:
            month = "Fev";
          case 3:
            month = "Mar";
          case 4:
            month = "Avr";
          case 5:
            month = "Mai";
          case 6:
            month = "Jui";
          case 7:
            month = "Jll";
          case 8:
            month = "Aou";
          case 9:
            month = "Sep";
          case 10:
            month = "Oct";
          case 11:
            month = "Nov";
          case 12:
            month = "Dec";
        }

        date2 = $scope.input_date.getDate();
      }

      if ($scope.input_time == undefined) {
        hours = "";
        minutes = "";
      } else {
        hours = $scope.input_time.getHours();
        minutes = $scope.input_time.getMinutes();
      }
      if ($scope.todoList != undefined) {
        $scope.todoList.push({
          title: $scope.input_title,
          cochee: false,
          date: date2 + " " + month,
          time: hours + ":" + minutes,
          context: $scope.input_context,
          url: $scope.input_url,
          description: $scope.input_description,
        });
        $scope.todoList.pop();

        localStorage.setItem("todoList" , JSON.stringify($scope.todoList));
      } else {
        $scope.todoList = [
          {
            title: $scope.input_title,
            cochee: false,
            date: $scope.input_date.getDate() + " " + month,
            time: $scope.input_time.getHours() + ":" + $scope.input_time.getMinutes(),
            context: $scope.input_context,
            url: $scope.input_url,
            description: $scope.input_description,
          },
        ];
        localStorage.setItem("todoList" , JSON.stringify($scope.todoList));
      }
    };
  },
]);

/**
 * delete controller - delete the selected task
 */
routeAppController.controller("deleteCtrl", [
  "$scope",
  function ($scope) {
    $scope.deleteByIndex = function (index) {
      $scope.todoList.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify($scope.todoList));
    };
  },
]);

/**
 * delete all task button controller - delete all tasks
 */
routeAppController.controller("deleteAllCtrl", [
    "$scope",
    function ($scope) {
      $scope.deleteAll = function (index) {
        localStorage.removeItem("todoList");
        window.location.reload();
      };
    },
  ]);
