'use strict';

/**
 * @ngdoc overview
 * @name editACL
 * @description
 * # editACL controller
 * Controls the community edit ACL widget
 */


GenwebApp.controller('profilePortlet', [function () {
  var self = this;

  // self.openChangeTypeModal = function (community_type, community_hash) {
  //       ngDialog.open({
  //           template: '/++ulearn++app/portlets/change_community_type.html',
  //           className: 'ngdialog-theme-default',
  //           controller: ['$scope', 'plonePortalURL', 'MAXInfo', function ($scope, plonePortalURL, MAXInfo) {
  //               var self = this;
  //               $scope.selected = $scope.ngDialogData.community_type;
  //               $scope.changeCommunityType = function (selected) {
  //                   var data = {community_type: selected};
  //                   debugger
  //                   $http.put(
  //                       plonePortalURL + 'api/communities/' + $scope.ngDialogData.community_hash,
  //                       data,
  //                       {headers:MAXInfo.headers}
  //                   .then()
  //                   );
  //               };
  //           }],
  //           data: {community_type: community_type, community_hash: community_hash},
  //           cache: false
  //       });
  //     };
}]);

GenwebApp.controller('profilePortletModal', ['$scope', '$http', '$timeout', '$window', 'plonePortalURL', 'MAXInfo', 'SweetAlert', '$translate', function ($scope, $http, $timeout, $window, plonePortalURL, MAXInfo, SweetAlert, $translate) {
  $scope.selected = $scope.ngDialogData.community_type;
  $scope.changeCommunityType = function (selected) {
    var data = {community_type: selected};
    $http.put(
      plonePortalURL + '/api/communities/' + $scope.ngDialogData.community_hash,
      data,
      {headers:MAXInfo.headers})
    .success(function() {
      $scope.closeThisDialog();
      $timeout(function () { $window.location.reload(); }, 700);
    })
    .error(function () {
      $translate(['CHANGECOMMUNITYTYPE_VIEW.ERROR'])
        .then(function (translations) {
          SweetAlert.swal({
            title:'Error',
            description: translations['CHANGECOMMUNITYTYPE_VIEW.ERROR'],
            type:'error',
            timer: 2000});
        });
    });
  };

}]);

GenwebApp.controller('homeTopPageMenuButtons', ['ngDialog', function (ngDialog) {
  var self = this;
  self.active_tab = 'stream';

}]);
