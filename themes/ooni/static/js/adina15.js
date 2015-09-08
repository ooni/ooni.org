'use strict';
var urlBase = "https://ooni-adina15.herokuapp.com/api";

angular
  .module('adina15', ["lbServices"])

  .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
  ])
  .config(["LoopBackResourceProvider", function (LoopBackResourceProvider) {
    LoopBackResourceProvider.setUrlBase(urlBase);
  }])

  .factory('fixTorLoginInterceptor', ['$q', 'LoopBackAuth', function ($q, LoopBackAuth) {
    return {
      request: function (config) {
        if (config.url.substr(0, urlBase.length) === urlBase) {
          if (LoopBackAuth.accessTokenId) {
            // TBB removes Authentication header for security
            // Workaround that by chaining the token to the URL
            if (config.url.indexOf("?") < 0) {
              config.url += "?";
            } else {
              config.url += "&";
            }
            config.url += "access_token=" + LoopBackAuth.accessTokenId;
          }
        }
        return config || $q.when(config);
      }
    };
  }])
  .config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('fixTorLoginInterceptor');
  }])

  .controller("JoinController", ["$scope", "Oonitarian", "Team", function (
    $scope, Oonitarian, Team) {
  
    var initialise = function() {
      $scope.createdTeam = false;
      $scope.joinedTeam = false;
      $scope.finished = false;
      $scope.loading = true;
      $scope.joined = false;
      $scope.teamDetails = undefined;

      $scope.teams = Team.listTeams(function() {
        $scope.loading = false;
      }, function(){
        $scope.loading = false;
        $scope.errorMessage = "Failed to load team list";
      });
    }
    initialise();

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
      legal_name: "",
      email: "",
      password: ""
    };
    
    $scope.showDetails = function(idx) {
      $scope.teamDetails = $scope.teams.teams[idx];
    };

    $scope.dismissDetails = function() {
      delete $scope.teamDetails;
    }

    $scope.dismissDone = function() {
      initialise();
    }

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
