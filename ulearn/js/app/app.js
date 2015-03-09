'use strict';

/**
 * @ngdoc overview
 * @name uLearnApp
 * @description
 * # uLearnApp
 *
 * Main module of the uLearn Angular application.
 */

// External modularization
var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._;
});

var ploneVariables = angular.module('ploneVariables', []);
ploneVariables.factory('plonePortalURL', function() {
  return window.portal_url;
});

// The main GenwebApp definition
var GenwebApp = angular.module('GenwebApp', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'MAXClient',
    'underscore',
    'ploneVariables',
    'ui.select',
    'ui.jq',
    'datatables',
    'datatables.bootstrap',
    'angularSpinner',
    'ngLoadingSpinner',
  ]);

GenwebApp.controller('demo1', ['usSpinnerService', function (usSpinnerService) {

    usSpinnerService.spin('spinner-1');

}])
