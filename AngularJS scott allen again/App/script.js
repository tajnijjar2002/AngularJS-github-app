(function()
{

    var MainController = function ($scope, $http)
    {
        $http.get("https://api.github.com/users/robconery")
            .then(function(response)
            {
                $scope.user = response.data;
            },
            function(reason)
            {
                $scope.error = "Some error occured!";
            });
    };


    //Registering a controller with the module.
    app.controller("MainController", ['$scope', '$http', MainController]);

})();