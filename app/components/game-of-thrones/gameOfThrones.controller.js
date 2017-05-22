(function(){
  'use strict';

  angular
    .module('app')
    .controller('gameOfThronesController', gameOfThronesController);

        /*@ngInject*/
        function gameOfThronesController(apiService, answerService){
          /* jshint ignore:start */
            var ctrl = this;
          /* jshint ignore:end*/
          ctrl.episodes = '';
          ctrl.model = answerService.getGotSeason();

          apiService.getSeries()
            .then(function(results){
              ctrl.series = results.data;
              ctrl.showEpisodes();
          });

          ctrl.showEpisodes = function() {
            var episodesSelected = [];

            ctrl.series.find(function(serie){
              if (serie.id === parseInt(ctrl.model)) {
                episodesSelected = serie.episodes;
              }
            });

            ctrl.episodes = episodesSelected.length > 0 ? episodesSelected : '';

            answerService.saveGotSeason(ctrl.model);
          };
        } 
 })();
 
