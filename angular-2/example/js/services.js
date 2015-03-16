angular.module('githubSample')
  .constant('API_ROOT', 'https://api.github.com')
  .factory('Repos', function (auth, $http, API_ROOT) {
    function getUserRepos() {
      token = auth.getAccessToken();
      // "Authorization: token OAUTH-TOKEN"
      return $http.get(API_ROOT + '/users/sudodoki/repos', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }).then(function (response) {
        return response.data;
      })
    }
    return {
      getAll: getUserRepos
    }
  })
  // TODO: use interceptors
  .factory('auth', function ($q, $rootScope) {
    var loggedIn = false, accessToken = '';
    return {
      getAccessToken: function () {
        return accessToken
      },
      isLoggedIn: function () {
        return loggedIn;
      },
      authenticate: function () {
        var deferred = $q.defer()
        OAuth.initialize('jwZnAVqfq12pQlqIsQEb5ywrLFQ')
        OAuth.popup('github').done(function (result) {
          loggedIn = true;
          accessToken = result.access_token
          deferred.resolve(result)
        }).fail(deferred.reject)
        return deferred.promise;
      }
    }
  })
