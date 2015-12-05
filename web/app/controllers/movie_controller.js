MovieApp.controller('MovieController', function ($scope, $routeParams, $location, FirebaseService) {
    FirebaseService.getMovie($routeParams.id, function (movie) {
        $scope.movie = movie;
    });

//    
//    if(!$scope.movie) {
//        $location.path('/movies');
//    }
});