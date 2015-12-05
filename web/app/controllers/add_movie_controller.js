MovieApp.controller('AddMovieController', function ($scope, FirebaseService, $location) {
    $scope.movies = FirebaseService.getMovies();

    $scope.addMovie = function () {
        if ($scope.title == '' || $scope.director == '' || $scope.release == '' || $scope.description == '') {
            $scope.title = '';
            $scope.director = '';
            $scope.release = '';
            $scope.description = '';
            return;
        } else if ($scope.title == null || $scope.director == null || $scope.release == null || $scope.description == null) {
            $scope.title = '';
            $scope.director = '';
            $scope.release = '';
            $scope.description = '';
            return;
        }

        FirebaseService.addMovie({
            title: $scope.title,
            director: $scope.director,
            release: $scope.release,
            description: $scope.description
        });
        $location.path('/movies');


    }
});