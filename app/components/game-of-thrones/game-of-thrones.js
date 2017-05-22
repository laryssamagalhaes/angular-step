(function(){
  'use strict';

  angular
    .module('app')
    .component('gameOfThrones', {
      templateUrl: 'components/game-of-thrones/game-of-thrones.html',
      controller: 'gameOfThronesController',
      transclude: true,
      bindings: {
        model:'='
      },
    });
})();
