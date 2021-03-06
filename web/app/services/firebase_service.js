MovieApp.service('FirebaseService', function($firebaseArray) {
    var firebaseRef = new Firebase("https://scorching-inferno-102.firebaseio.com/movies");
    var movies = $firebaseArray(firebaseRef);
    
    this.getMovies = function() {
        return movies;
    }
    
    this.addMovie = function(movie) {
        movies.$add(movie);
    }
    
    this.editMovie = function(movie) {
        movies.$save(movie);
    }
    
    this.removeMovie = function(movie) {
        movies.$remove(movie);
    }
    
    this.getMovie = function(key, done) {
        movies.$loaded(function() {
            done(movies.$getRecord(key));
        });
    }
});