 (function(){
  'use strict';

  angular
    .module('app')
    .controller('reviewController', reviewController);

        /*@ngInject*/
        function reviewController(answerService ){
          /* jshint ignore:start */
            var ctrl = this;
          /* jshint ignore:end*/

          ctrl.starWars = answerService.getMovieSelected();
          ctrl.food = answerService.getFoodSelected();
          ctrl.gotSeason = answerService.getGotSeason();
        }

 })();
 
