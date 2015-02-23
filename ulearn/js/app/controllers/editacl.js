'use strict';

/**
 * @ngdoc overview
 * @name editACL
 * @description
 * # editACL controller
 * Controls the community edit ACL widget
 */

 GenwebApp.controller('uLearnEditACL', ['$http', 'plonePortalURL', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$log', function($http, plonePortalURL, DTOptionsBuilder, DTColumnDefBuilder, $log){
    var self = this;
    self.principals = [];
    self.acl = [];

    // Default datatable options
    self.dtOptions = DTOptionsBuilder
        .newOptions().withPaginationType('full_numbers')
        .withBootstrap();

    self.dtColumnDefs = [
        DTColumnDefBuilder.newColumnDef(0),
        DTColumnDefBuilder.newColumnDef(1),
        DTColumnDefBuilder.newColumnDef(2).withOption('sSortDataType', 'dom-checkbox'),
        DTColumnDefBuilder.newColumnDef(3).withOption('sSortDataType', 'dom-checkbox'),
        DTColumnDefBuilder.newColumnDef(4).withOption('sSortDataType', 'dom-checkbox'),
    ];

    var last_query = '';
    var last_query_count = 0;
    self.searchUser = function (query) {
        return $http.get(
              plonePortalURL + '/omega13usersearch',
              {params: {q: query, last_query: last_query, last_query_count: last_query_count}}
            ).then(function(response) {
              last_query = query;
              last_query_count = response.data.last_query_count;
              self.principals = response.data.results;
            });
    };
    self.selectItem = function ($item) {
        self.acl.push($item);
    };
 }]);
