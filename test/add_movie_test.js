describe('Add movie', function(){
	var controller, scope;

	var FirebaseServiceMock;

  	beforeEach(function(){
  		// Lisää moduulisi nimi tähän
    	module('MovieApp');

    	FirebaseServiceMock = (function(){
            
            var movies = [
                {
                    title: 'Eka elokuva',
                    director: 'Joku',
                    release: '1999',
                    description: 'Maailman ensimmäinen elokuva'
                },
                {
                    title: 'Toka elokuva',
                    director: 'Jokainen',
                    release: '1989',
                    description: 'Vaikea elokuva'
                },
                {
                    title: 'Viimeinen elokuva',
                    director: 'Ei kukaan',
                    release: '1',
                    description: 'Kaksi vuotta kolme kertaa.'
                }
            ];
			return {
                            addMovie: function(movie) {
                                movies.push(movie);
                            },
                            getMovies: function() {
                                return movies;
                            }
			}
		})();

		// Lisää vakoilijat
	    // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
            spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();
            spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();

    	// Injektoi toteuttamasi kontrolleri tähän
	    inject(function($controller, $rootScope) {
	      scope = $rootScope.$new();
	      // Muista vaihtaa oikea kontrollerin nimi!
	      controller = $controller('AddMovieController', {
	        $scope: scope,
	        FirebaseService: FirebaseServiceMock
	      });
	    });
  	});

  	/*
  	* Testaa alla esitettyjä toimintoja kontrollerissasi
  	*/

  	/*
  	* Testaa, että käyttäjä pystyy lisäämään elokuvan oikeilla tiedoilla.
  	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
  	* on kutsutta oikeaa funktiota lisäämällä siihen vakoilijan ja käyttämällä
  	* toBeCalled-oletusta.
	*/
	it('should be able to add a movie by its name, director, release date and description', function(){
            scope.title = 'Lisäys';
            scope.director = 'Minä';
            scope.release = '2012';
            scope.description = 'Jotain kivaa';
            scope.addMovie();
            expect(scope.movies.length).toBe(4);
            expect(scope.movies[3].title).toBe('Lisäys');
            expect(FirebaseServiceMock.addMovie).toHaveBeenCalled();
	});

	/*	
	* Testaa, ettei käyttäjä pysty lisäämään elokuvaa väärillä tiedoilla.
	* Muista myös tarkistaa, että Firebasen kanssa keskustelevasta palvelusta
	* EI kutsuta funktiota, joka hoitaa muokkauksen. Voit käyttää siihen
	* not.toBeCalled-oletusta (muista not-negaatio!).
	*/
	it('should not be able to add a movie if its name, director, release date or description is empty', function(){
            scope.title = 'Lisäys';
            scope.director = '';
            scope.release = '2012';
            scope.description = 'Jotain kivaa';
            scope.addMovie();
            expect(scope.movies.length).toBe(3);
            expect(FirebaseServiceMock.addMovie).not.toHaveBeenCalled();
	});
});