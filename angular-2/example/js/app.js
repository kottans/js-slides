angular.module('githubSample', ['ui.router'])
.factory('auth', function ($q, $rootScope) {
var loggedIn = false;
return {
  isLoggedIn: function () {
    return loggedIn;
  },
  authenticate: function () {
    var deferred = $q.defer()
    OAuth.initialize('jwZnAVqfq12pQlqIsQEb5ywrLFQ')
    OAuth.popup('github').done(function (result) {
      loggedIn = true;
      $rootScope.accessToken = result.access_token
      deferred.resolve(result)
    }).fail(deferred.reject)
    return deferred.promise;
  }
}
})
.controller('TopBarCtrl', function (auth, $state) {
  this.isLoggedIn = auth.isLoggedIn
  this.signIn = function () {
    auth.authenticate()
      .then(function () {
        $state.go('list')
      })
      .catch(function(response) {
        console.error(response);
      });
  }
})
.config(function($stateProvider, $urlRouterProvider, $qProvider) {
  $stateProvider.state('initial', {
    url: '/',
    views: {
      topbar: {
        templateUrl: 'templates/topbar.html',
        controller: 'TopBarCtrl',
        controllerAs: 'topbar'
      },
      master: {
        template: '<h1>Not logged in</h1>'
      }
    }
  })
  .state('list', {
    url: '/list',
    needsAuth: true,
    views: {
      topbar: {
        templateUrl: 'templates/topbar.html',
        controller: 'TopBarCtrl',
        controllerAs: 'topbar'
      },
      master: {
        template: '<h1>Hello!</h1>'
      }
    }
  })
  .state('404', {
    url: '/404',
    template: '<h1>404</h1>'
  })
  $urlRouterProvider.otherwise('/');

})
.run(function (auth, $rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function (event, next, previous) {
    console.log('lol', next.needsAuth, auth.isLoggedIn(), previous)
    if (next && next.needsAuth && !auth.isLoggedIn()) {
      event.preventDefault();

      if (JSON.stringify(previous) == "{}") {
        $state.go('initial')
      }
    }
  });
});