describe('Movie list', function () {
    var controller, scope;

    var FirebaseServiceMock;

    beforeEach(function () {
        // Lisää moduulisi nimi tähän
        module('MovieApp');

        FirebaseServiceMock = (function () {
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
                addMovie: function (movie) {
                    movies.push(movie);
                },
                getMovies: function () {
                    return movies;
                }
            }
        })();
            // Lisää vakoilijat
            // spyOn(FirebaseServiceMock, 'jokuFunktio').and.callThrough();
            spyOn(FirebaseServiceMock, 'addMovie').and.callThrough();
            spyOn(FirebaseServiceMock, 'getMovies').and.callThrough();
        

        // Injektoi toteuttamasi kontrolleri tähän
        inject(function ($controller, $rootScope) {
            scope = $rootScope.$new();
            // Muista vaihtaa oikea kontrollerin nimi!
            controller = $controller('ListMoviesController', {
                $scope: scope,
                FirebaseService: FirebaseServiceMock
            });
        });
    });

    /*
     * Testaa alla esitettyjä toimintoja kontrollerissasi
     */

    /*
     * Testaa, että Firebasesta (mockilta) saadut elokuvat löytyvät konrollerista
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should list all movies from the Firebase', function () {
        expect(scope.movies.length).toBe(3);
        expect(FirebaseServiceMock.getMovies).toHaveBeenCalled();
        expect(FirebaseServiceMock.addMovie).not.toHaveBeenCalled();
    });

    /* 
     * Testaa, että elokuvan pystyy poistamaan Firebasesta.
     * Testaa myös, että Firebasea käyttävästä palvelusta kutsutaan oikeaa funktiota,
     * käyttämällä toBeCalled-oletusta.
     */
    it('should be able to remove a movie', function () {
        expect(true).toBe(false);
    });
});