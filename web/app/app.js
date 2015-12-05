var MovieApp = angular.module('MovieApp', ['firebase', 'ngRoute']);

MovieApp.config(function($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'ListMoviesController',
                templateUrl: 'app/views/movies.html'
            })
            .when('/movies', {
                controller: 'ListMoviesController',
                templateUrl: 'app/views/movies.html'
            })
            .when('/movies/new', {
                controller: 'AddMovieController',
                templateUrl: 'app/views/add_movie.html'
            })
            .otherwise({
                redirectTo: '/'
            }); 
})