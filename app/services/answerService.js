(function(){
  'use strict';

  angular
    .module('app')
    .factory('answerService', answerService);

    /*@ngInject*/
    function answerService($http, APIURL){
      var movieId = '';
      var movies = '';
      var foodId = '';
      var foods = '';
      var gotSeason = '';
      
      return {
        saveMovies: saveMovies,
        saveMovieSelected: saveMovieSelected,
        getMovieSelected: getMovieSelected,
        saveFoods: saveFoods,
        saveFoodSelected: saveFoodSelected,
        getFoodSelected: getFoodSelected,
        saveGotSeason: saveGotSeason,
        getGotSeason: getGotSeason
      };

      function saveMovies(results) {
        movies = results;
      }

      function saveMovieSelected(id) {
        movieId = id;
      }

      function getMovieSelected() {
        var movieSelected = '';

        movies.map(function(movie){
          if (movie.imdbID === movieId) {
             movieSelected = movie;
          }
        });

        return movieSelected;
      }

      function saveFoods(results) {
        foods = results;
      }

      function saveFoodSelected(id) {
        foodId = id;
      }

      function getFoodSelected() {
        var foodSelected = '';

        foods.map(function(food){
          if(food.imdbID === parseInt(foodId)) {
            foodSelected = food;
          }
        });

        return foodSelected;
      }

      function saveGotSeason(id) {
        gotSeason = id;
      }

      function getGotSeason() {
        return gotSeason;
      }
    }
})();
