'use strict';

/**
 * @ngdoc overview
 * @name Communities views controllers
 * @description
 * #
 */

GenwebApp.controller('AllCommunities', ['_', 'plonePortalURL', 'CommunityInfo', 'UserSubscriptions', 'SweetAlert', 'MAXInfo', '$http', '$window', '$timeout', '$translate', function (_, plonePortalURL, CommunityInfo, UserSubscriptions, SweetAlert, MAXInfo, $http, $window, $timeout, $translate) {
  var self = this;
  self.currentPage = 1;
  self.pageSize = 10;
  self.user_subscriptions = [];
  self.user_communities = [];

  self.prom_allcommunities = $http.get(plonePortalURL+'/api/communities')
    .then(function (response) {
      // All the visible communities for the current user (Open and Closed) used
      // in the iterator of the allcommunities view
      self.communities = response.data;
    }
  );

  UserSubscriptions.query({username: MAXInfo.username, limit: 0, tags: '[COMMUNITY]'})
    .$promise.then(function (response) {
      // Holds the list of the URLs of the current user subscriptions
      self.user_subscriptions = _.pluck(response, 'url');
      // The user's current subscribed communities full info (merged from all
      // the site's communities self.communities and self.user_subscriptions
      self.prom_allcommunities.then(function () {
        self.user_communities = _.filter(self.communities, function (r) {
          return _.contains(self.user_subscriptions, r.url);
        });
      });
  });

  self.toggleFavorite = function (community) {
    $http.post(community.url+'/toggle-favorite')
      .success(function (response) {
        community.favorited = !community.favorited;
      })
      .error(function (response) {
        $translate(['ALLCOMMUNITIES_VIEW.FAVORITEDERROR'])
         .then(function (translations) {
          SweetAlert.swal({
            title:'Error',
            description: translations['ALLCOMMUNITIES_VIEW.FAVORITEDERROR'],
            type:'error',
            timer: 2000});
        });
      });
  };

  self.subscribe = function (community) {
    $http.post(community.url+'/subscribe')
      .success(function (response) {
        self.user_subscriptions.push(community.url);
      })
      .error(function (response) {
        $translate(['ALLCOMMUNITIES_VIEW.SUBSCRIBEERROR'])
         .then(function (translations) {
          SweetAlert.swal({
            title:'Error',
            description: translations['ALLCOMMUNITIES_VIEW.SUBSCRIBEERROR'],
            type:'error',
            timer: 2000});
        });
      });
  };

  self.unSubscribe = function (community) {
    $http.post(community.url+'/unsubscribe')
      .success(function (response) {
        self.user_subscriptions.pop(community.url);
        community.favorited = false;
      })
      .error(function (response) {
        $translate(['ALLCOMMUNITIES_VIEW.UNSUBSCRIBEERROR'])
         .then(function (translations) {
          SweetAlert.swal({
            title:'Error',
            description: translations['ALLCOMMUNITIES_VIEW.UNSUBSCRIBEERROR'],
            type:'error',
            timer: 2000});
        });
      });
  };

  self.delete = function (community) {
    $translate(['ALLCOMMUNITIES_VIEW.CONFIRMDELETE',
                'COMMUNITY_SUBSCRIBE.CANCELBTN',
                'ALLCOMMUNITIES_VIEW.CONFIRMDELETEBTN',
                'ALLCOMMUNITIES_VIEW.DELETEDONE',
                'ALLCOMMUNITIES_VIEW.DELETEERROR'])
     .then(function (translations) {
      SweetAlert.swal({
        title: translations['ALLCOMMUNITIES_VIEW.CONFIRMDELETE'],
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: translations['COMMUNITY_SUBSCRIBE.CANCELBTN'],
        confirmButtonColor: '#DD6B55',
        confirmButtonText: translations['ALLCOMMUNITIES_VIEW.CONFIRMDELETEBTN']
      },
      function(isConfirm) {
        if (isConfirm) {
          // Delete the community
          $http.delete(
            plonePortalURL+'/api/communities/'+community.gwuuid)
          .success(function() {
            SweetAlert.swal({
              title: translations['ALLCOMMUNITIES_VIEW.DELETEDONE'],
              type: 'success',
              timer: 2000});
            // Update community list
            self.communities = _.without(self.communities, _.findWhere(self.communities, {url: community.url}));
          })
          .error(function () {
            SweetAlert.swal({
              title: translations['ALLCOMMUNITIES_VIEW.DELETEERROR'],
              type: 'error',
              timer: 2000});
          });
        }
      });
    });
  };

  self.is_subscribed = function (url) {
    if (_.contains(self.user_subscriptions, url)) {
      return true;
    }
  };
}]);


GenwebApp.controller('SharedWithMe', ['_', 'plonePortalURL', 'CommunityInfo', 'UserSubscriptions', 'SweetAlert', 'MAXInfo', '$http', '$window', '$timeout', '$translate', function (_, plonePortalURL, CommunityInfo, UserSubscriptions, SweetAlert, MAXInfo, $http, $window, $timeout, $translate) {
  var self = this;
  self.currentPage = 1;
  self.pageSize = 10;
  self.shareditems = $http.get(plonePortalURL+'/shared_with_me')
    .then(function (response) {
      // All the visible communities for the current user (Open and Closed) used
      // in the iterator of the allcommunities view
      self.shared_items = response.data;
    }
  );

}]);
