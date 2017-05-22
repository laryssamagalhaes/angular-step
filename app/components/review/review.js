(function(){
    'use strict';

    angular
      .module('app')
      .component('review', {
        templateUrl: 'components/review/review.html',
        bindings: {
          formvalues: '='
        },
        controller: 'reviewController',
        transclude: true,
      });
})();
