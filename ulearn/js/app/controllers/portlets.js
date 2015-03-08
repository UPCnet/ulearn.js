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
            $scope.user_act_promise = UserActivities.get_count($attrs.username).then(
                function (response) {
                    $element.text(response.headers('X-totalItems'));
                    $scope.user_activities = response.headers('X-totalItems');
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
        $scope.user_act_promise.then(
          function () {
            if ($scope.user_activities >= $attrs.threshold) {
                $scope.badge_prefix = '';
                $scope.badge_png = $attrs.image;
          }
        });
      }
    };
}]);

GenwebApp.directive('lastauthors', [function() {
    return {
      controller: function($scope, $element, $attrs, plonePortalURL, MAXInfo, TimelineLastAuthors, ContextLastAuthors) {
        $scope.portal_url = plonePortalURL;
        if ($attrs.type === 'timeline') {
          $scope.last_authors = TimelineLastAuthors.query({username: MAXInfo.username, limit: 8});
        } else {
          $scope.last_authors = ContextLastAuthors.query({hash: $attrs.communityHash, limit: 8});
        }
      }
    };
}]);
