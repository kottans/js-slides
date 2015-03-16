angular.module('githubSample', ['ui.router'])
.factory('auth', function ($q) {
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
      deferred.resolve(result)
    }).fail(deferred.reject)
    return deferred.promise;
  }
}
})
.controller('TopBarCtrl', function (auth) {
  this.isLoggedIn = auth.isLoggedIn
  this.signIn = function () {
    auth.authenticate()
      .then(function(response) {
        $rootScope.accessToken = response.access_token;
      })
      .catch(function(response) {
        console.error(response);
      });
  }
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('root', {
    url: '/',
    views: {
      topbar: {
        templateUrl: 'templates/topbar.html',
        controller: 'TopBarCtrl',
        controllerAs: 'topbar'
      },
      master: {
        template: ''
      }
    }
  })
  .state('404', {
    url: '/404',
    template: '<h1>404</h1>'
  })
  $urlRouterProvider.otherwise('/');

})
