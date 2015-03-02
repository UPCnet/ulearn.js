'use strict';

/**
 * @ngdoc overview
 * @name editACL
 * @description
 * # editACL controller
 * Controls the community edit ACL widget
 */

GenwebApp.directive('maxActivitiesCount', [function() {
    return {
      controller: function($scope, $element, $attrs, UserActivities, ContextActivities) {
        if ($attrs.object === 'context') {
            ContextActivities.get_count($attrs.communityHash).then(
                function (response) {
                    $element.text(response.headers('X-totalItems'));
            });
        }
        if ($attrs.object === 'user') {
            $scope.asd = UserActivities.get_count($attrs.username).then(
                function (response) {
                    $element.text(response.headers('X-totalItems'));
                    $scope.user_activities = response.headers('X-totalItems');
                    $scope.hello = "HOLA!";
            });
        }
      }
    };
}]);

GenwebApp.directive('badge', [function() {
    return {
      template: '<img ng-src="{{portal_url}}/{{badge_prefix}}{{badge_png}}" />',
      scope: true,
      link: function($scope, $element, $attrs) {
        $scope.badge_png = $attrs.image.replace('.png', '-alt.png');
        $scope.badge_prefix = '/++ulearn++static/images/';
        if ($scope.badge_enabled === 'True') {
            $scope.badge_png = $attrs.image;
        }
      },
      controller: function($scope, $element, $attrs, plonePortalURL) {
        $scope.portal_url = plonePortalURL;
        $scope.asd.then(
          function () {
            if ($scope.user_activities >= $attrs.threshold) {
                $scope.badge_prefix = '';
                $scope.badge_png = $attrs.image;
          }
        });
      }
    };
}]);
