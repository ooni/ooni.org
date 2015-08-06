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
    $scope.loading = true;
    $scope.joined = false;

    $scope.teams = Team.listTeams(function() {
      $scope.loading = false;
    }, function(){
      $scope.loading = false;
      $scope.errorMessage = "Failed to load team list";
    });

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
        }, function(error){
          $scope.loading = false;
          $scope.errorMessage = error.data.error.message;
        });
      }, function(error){
          $scope.loading = false;
          $scope.errorMessage = error.data.error.message;
      });
    }
    
    $scope.dismissError = function() {
      delete $scope.errorMessage;
    }

    $scope.dismissJoin = function() {
      $scope.createdTeam = false;
      $scope.joinedTeam = false;
    }

    $scope.joinTeam = function(idx) {
      $scope.joinedTeam = true;
      $scope.createdTeam = false;
      $scope.selectedTeam = $scope.teams.teams[idx];
    }
    
    $scope.createTeam = function() {
      $scope.createdTeam = true;
      $scope.joinedTeam = false;
    }

    $scope.register = function() {
      $scope.loading = true;
      registerUser(function(){
        if ($scope.createdTeam == true) {
          console.log("Creating team with");
          console.log($scope.newTeam);
          Team
          .createJoin($scope.newTeam)
          .$promise
          .then(function(team) {
            $scope.loading = false;
            $scope.joined = true;
            $scope.selectedTeam = team.team;
          }, function(error){
            $scope.loading = false;
            $scope.errorMessage = error.data.error.message;
          });
        } else if ($scope.joinedTeam == true) {
           Team
          .join({id: $scope.selectedTeam.id})
          .$promise
          .then(function(response) {
            $scope.loading = false;
            $scope.joined = true;
          }, function(error) {
            $scope.loading = false;
            $scope.errorMessage = error.data.error.message;
          });
        }
      });
    }

  }]);
