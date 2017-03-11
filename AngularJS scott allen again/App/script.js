(function ()
{


    var MainController = function (
        $scope, github, $interval,
        $location, $anchorScroll)
    {
        var onUserComplete = function (data)
        {
            $scope.user = data;
            github.getRepos($scope.user)
                 .then(onRepos, onError);
        };

        var onRepos = function(data)
        {
            $scope.repos = data;

            $location.hash("userDetails");
            $anchorScroll(); 
        }

        var onError = function (reason)
        {
            $scope.error = "Some error occured!";
        };

        var decrementCountdown = function()
        {
            $scope.countdown--;
            if ($scope.countdown < 1)
            {
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;
        var startCountdown = function()
        {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function (username)
        {
            github.getUser(username)
                .then(onUserComplete, onError);


            if (countdownInterval)
            {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
        }

        $scope.repoSortOrder = '-stargazers_count';
        $scope.message = "Hello GithubViewer";
        $scope.username = "Angular";
        $scope.countdown = 5;

        startCountdown();
    };


    //Registering a controller with the module.
    app.controller("MainController",
    [
        '$scope', 'github', '$interval',
        '$location', '$anchorScroll', MainController]);

})();