 (function(){
  'use strict';

  angular
    .module('app')
    .controller('appController', appController);

        /*@ngInject*/
        function appController(apiService, $mdStepper, $mdComponentRegistry, answerService){
            /* jshint ignore:start */
            var ctrl = this;
            /* jshint ignore:end*/
            
            var steppers = '';
            ctrl.isLinear  = true;
            ctrl.vertical = false;
            ctrl.generalFormValues = {
              superHero: '',
              serie: '',
              bolachaOrBiscoito: '',
              quoute: ''
            };

            if(is.mobile()){
              ctrl.vertical = true;
            }

            $mdComponentRegistry.when('stepper-demo')
              .then(function(element){
                 steppers = element;
              });
            
            apiService.getMovies()
              .then(function(results){
                ctrl.movies = results.data;
                answerService.saveMovies(ctrl.movies);
            });

            apiService.getFoods()
              .then(function(results){
                ctrl.foods = results.data;
                answerService.saveFoods(ctrl.foods);
            });
              
            ctrl.saveMovies =  function(movieId) {
              answerService.saveMovieSelected(movieId);
              steppers.next();
            };

            ctrl.back = function() {
              steppers.back();
            };

            ctrl.next = function() {
              ctrl.toggleLinear();
              steppers.next();
              ctrl.toggleLinear();
            };

            ctrl.saveFoods =  function(foodId) {
              answerService.saveFoodSelected(foodId);
              steppers.next();
            };

            ctrl.toggleLinear = function () {
              ctrl.isLinear = !ctrl.isLinear;
            };
        } 

 })();
 
