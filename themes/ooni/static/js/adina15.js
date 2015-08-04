'use strict';

angular
  .module('adina15', ["lbServices"])

  .config(["LoopBackResourceProvider", function (LoopBackResourceProvider) {
    LoopBackResourceProvider.setUrlBase("http://127.0.0.1:3000/api");
  }])

  .controller("JoinController", ["$scope", "Oonitarian", "Team", function (
    $scope, Oonitarian, Team) {
  
    $scope.createdTeam = false;
    $scope.joinedTeam = false;
    $scope.finished = false;

    $scope.teams = Team.listTeams();

    $scope.newTeam = {
      name: "",
      shortDescription: "",
      longDescription: "",
      membersMaximum: 10
    };

    $scope.selectedTeam = {
      id: undefined,
      name: "",
      shortDescription: "",
      longDescription: "",
      membersMaximum: ""
    }

    $scope.oonitarian = {
      username: "",
      name: "",
      real_name: "",
      real_surname: "",
      email: "",
      password: ""
    };
    
    var registerUser = function(cb) {
     Oonitarian
      .create($scope.oonitarian)
      .$promise
      .then(function (response) {
        Oonitarian
        .login({
          username: $scope.oonitarian.username,
          password: $scope.oonitarian.password
        })
        .$promise
        .then(function () {
          cb(response);
        });
      });
    }

    $scope.joinTeam = function(idx) {
      $scope.joinedTeam = true;
      $scope.createdTeam = false;
      $scope.selectedTeam = $scope.teams.teams[idx];
    }
    
    $scope.createTeam = function() {
      console.log("Created a team");
      $scope.createdTeam = true;
      $scope.joinedTeam = false;
    }

    $scope.register = function() {
      registerUser(function(){
        if ($scope.createdTeam == true) {
          Team
          .createJoin({id: $scope.newTeam})
          .$promise
          .then(function(response) {
            $scope.success = true;
          });
        } else if ($scope.joinedTeam == true) {
           Team
          .join({id: $scope.selectedTeam.id})
          .$promise
          .then(function(response) {
            $scope.success = true;
          });
        }
      });
    }

  }]);
