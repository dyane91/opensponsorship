'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ui.router',
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
      component: 'basicInfo',
    })

  $urlRouterProvider.otherwise('/welcome');
});
