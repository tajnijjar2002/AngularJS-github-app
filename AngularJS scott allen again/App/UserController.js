(function ()
{
    var UserController = function ($scope, github, $routeParams)
    {
        var onUserComplete = function (data)
        {
            $scope.user = data;
            github.getRepos($scope.user)
                 .then(onRepos, onError);
        };

        var onRepos = function (data)
        {
            $scope.repos = data;
        }

        var onError = function (reason)
        {
            $scope.error = "Some error occured!";
        };

        

        $scope.repoSortOrder = '-stargazers_count';
        $scope.username = $routeParams.username;
        github.getUser($scope.username)
            .then(onUserComplete, onError);


    };


    //Registering a controller with the module.
    var app = angular.module("githubViewer");
    app.controller("UserController",
    ['$scope', 'github', '$routeParams', UserController]);

})();