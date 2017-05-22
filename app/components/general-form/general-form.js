(function(){
	'use strict';

	angular
	  .module('app')
	  .component('generalForm', {
	    templateUrl: 'components/general-form/general-form.html',
      transclude: true,
      bindings: {
        model:'=',
        values: '='
      },
	  });
})();
