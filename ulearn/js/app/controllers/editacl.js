'use strict';

/**
 * @ngdoc overview
 * @name editACL
 * @description
 * # editACL controller Controls the community edit ACL widget Directive for
 *   attribute acl for adquiring the community ACL with the form encoded with
 *   JSON:
 *   <input
 *       type="hidden"
 *       acl="{"users": [{"role":
 *       "owner", "id": "victor.fernandez"}],
 *       "groups": [{"role": "writer", "id": "PAS"}]}">
 */

 GenwebApp.controller('uLearnEditACL', ['$http', 'plonePortalURL', 'MAXInfo', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$location', '$window', function($http, plonePortalURL, MAXInfo, DTOptionsBuilder, DTColumnDefBuilder, $location, $window){
    var self = this;
    self.community_url = $location.absUrl().replace('/editacl', '');
    self.principals = [{id:'No results found'}];
    self.group_results = [];
    self.users = [];
    self.groups = [];
    self.active_tab = 'users';

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
    self.searchGroup = function (query) {
        // self.group_results = [{id: 'PAS', displayName: 'PAS UPC'},
        //                       {id: 'PAS-340', displayName: 'UPCnet'}];
        return $http.get(
              plonePortalURL + '/omega13groupsearch',
              {params: {q: query}}
            ).then(function(response) {
              self.group_results = response.data.results;
            });
    };
    self.selectUser = function ($item) {
        $item.role = 'reader';
        self.users.push($item);
    };
    self.selectGroup = function ($item) {
        $item.role = 'reader';
        self.groups.push($item);
    };
    self.saveAcl = function () {
        $http.post(
              plonePortalURL + '/api/communities/'+ self.gwuuid + '/subscriptions',
              {users: self.users, groups: self.groups},
              {headers: MAXInfo.headers}
            ).success(function() { $window.location = self.community_url; })
             .error(function() { console.log('error'); } );
    };
 }]);

GenwebApp.directive('acl', [function() {
    return {
      link: function($scope, $element, $attrs) {
        var acl = angular.fromJson($attrs.acl);
        $scope.ctrl.users = acl.users;

        if (acl.groups !== undefined) {
           $scope.ctrl.groups = acl.groups;
        } else {
            $scope.ctrl.groups = [];
        }
      }
    };
}]);
