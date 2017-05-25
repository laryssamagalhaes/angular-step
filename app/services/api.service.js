(function(){
  'use strict';

  angular
    .module('app')
    .factory('apiService', apiService);

    /*@ngInject*/
    function apiService($http, APIURL){
      return {
        getMovies: getMovies,
        getSeries: getSeries,
        getGameOfThrones: getGameOfThrones,
        getFoods: getFoods
      };

      function getMovies(){
        return $http.get('http://www.omdbapi.com/?apikey=bd9be61b&s=Star%20Wars&type=movie');
      }

      function getSeries(id){
        return $http.get('http://www.omdbapi.com/?apikey=bd9be61b&t=Game%20of%20Thrones&Season=' +id);
      }

      function getGameOfThrones(){
        return $http.get('http://www.omdbapi.com/?apikey=bd9be61b&t=Game%20of%20Thrones');
      }

      function getFoods(){
        return $http.get(APIURL + 'fakeApi/foods.json');
      }
    }
})();
