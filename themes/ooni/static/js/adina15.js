'use strict';

angular
  .module('adina15', ["lbServices"])

  .config(["LoopBackResourceProvider", function (LoopBackResourceProvider) {
    LoopBackResourceProvider.setUrlBase("http://127.0.0.1:3000/api");
  }])

  .controller("JoinController", ["$scope", "Oonitarian", "Team", function (
    $scope, Oonitarian, Team) {
    console.log("Antani");
    $scope.teams = Team.listTeams();

  }])

  .controller("RegisterController", ["$scope", "Oonitarian", function (
        $scope, Oonitarian) {
    // TODO: add more fields here
    $scope.oonitarian = {
      username: "",
      name: "",
      real_name: "",
      real_surname: "",
      email: "",
      password: ""
    };
    $scope.submit = function () {
      Oonitarian
        .create($scope.oonitarian)
        .$promise
        .then(function (response) {
          // TODO: once one is registered, allow to edit
          console.log(response);
        })
    };
  }]);
