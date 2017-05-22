(function(){
  'use strict';

  angular
    .module('app')
    .component('chooseQuestion', {
      templateUrl: 'components/choose-question/choose-question.html',
      bindings: {
        title: '@',
        radius: '<',
        datas: '=',
        model:'='
      },
      transclude: true
    });
})();
