(function(){
  'use strict';

  angular
    .module('app')
    .factory('apiService', apiService);

    /*@ngInject*/
    function apiService($http, APIURL){
      var OMD_API_URL = "https://www.omdbapi.com/";
      var OMD_API_KEY = "bd9be61b";

      return {
        getMovies: getMovies,
        getSeries: getSeries,
        getGameOfThrones: getGameOfThrones,
        getFoods: getFoods
      };

      function getMovies(){
        return $http.get(OMD_API_URL + '?apikey=' + OMD_API_KEY + '&s=Star%20Wars&type=movie');
      }

      function getSeries(id){
        return $http.get(OMD_API_URL + '?apikey=' + OMD_API_KEY + '&t=Game%20of%20Thrones&Season=' +id);
      }

      function getGameOfThrones(){
        return $http.get(OMD_API_URL + '?apikey=' + OMD_API_KEY + '&t=Game%20of%20Thrones');
      }

      function getFoods(){
        return $http.get(APIURL + 'fakeApi/foods.json');
      }
    }
})();
