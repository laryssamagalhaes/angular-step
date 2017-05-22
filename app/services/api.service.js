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
        getFoods: getFoods
      };

      function getMovies(){
        return $http.get(APIURL + 'fakeApi/movies.json');
      }

      function getSeries(){
        return $http.get(APIURL + 'fakeApi/series-by-season.json');
      }

      function getFoods(){
        return $http.get(APIURL + 'fakeApi/foods.json');
      }
    }
})();
