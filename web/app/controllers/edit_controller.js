MovieApp.controller('EditController', function ($scope, FirebaseService, $routeParams, $location) {


    FirebaseService.getMovie($routeParams.id, function (movie) {
        $scope.movie = movie;
        $scope.editTitle = $scope.movie.title;
        $scope.editDirector = $scope.movie.director;
        $scope.editRelease = $scope.movie.release;
        $scope.editDescription = $scope.movie.description;

    });


    
    
    
    $scope.editMovie = function (movie) {
        
        
        var muokattu = false;
        if ($scope.editTitle != null && $scope.editTitle != '') {
            movie.title = $scope.editTitle;
            muokattu = true;
        }
        
        if ($scope.editDirector != null && $scope.editDirector != '') {
            movie.director = $scope.editDirector;
            muokattu = true;
        }
        
        if ($scope.editRelease != null && $scope.editRelease != '') {
            movie.release = $scope.editRelease;
            muokattu = true;
        }
        
        if ($scope.editDescription != null && $scope.editDescription != '') {
            movie.description = $scope.editDescription;
            muokattu = true;
        }
        
        if (!muokattu) {
            return;
        }
        
        FirebaseService.editMovie(movie);
        $location.path('/movies');


    }
});