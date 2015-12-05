MovieApp.controller('ListMoviesController', function($scope, FirebaseService) {
    $scope.movies = FirebaseService.getMovies();
    
    $scope.remove = function(movie) {
        FirebaseService.removeMovie(movie);
    }
});