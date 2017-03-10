(function()
{
                

    var MainController = function ($scope)
    {
        $scope.message = "hello";
    };


    angular
        .module("githubViewer")
        .controller("MainController", ['$scope', MainController]);


    //app.controller("MainController", MainController());
})();