'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ui.router',
  'core',
  'welcome',
  'newProfile',
]).
config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('welcome', {
      url: '/welcome',
      component: 'welcomeComponent',
    })
    .state('newProfile', {
      url: '/new-profile',
      component: 'newProfileComponent'
    })
    .state('newProfile.basic', {
      url: '/basic',
      component: 'basicInfoComponent',
    })
    .state('newProfile.sports', {
      url: '/sports',
      component: 'sportsComponent',
    })
    .state('newProfile.about', {
      url: '/about',
      component: 'aboutComponent'
    })
    .state('newProfile.review', {
      url: '/review',
      component: 'reviewComponent',
    })

  $urlRouterProvider.otherwise('/welcome');
});
