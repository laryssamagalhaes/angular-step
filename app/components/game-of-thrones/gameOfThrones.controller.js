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

           apiService.getGameOfThrones()
            .then(function(results){
              ctrl.gameOfThrones = results.data;
          });

          ctrl.getSeason = function(){
            var id = ctrl.model;

            apiService.getSeries(id)
            .then(function(results){
              ctrl.episodes = results.data.Episodes;
              answerService.saveGotSeason(ctrl.model);
            });
          };

        ctrl.getSeason();
      }
 })();
 
