angular.module('githubSample')
  .run(function (auth, $rootScope, $state) {
    $state.go('initial')
    $rootScope.$on('$stateChangeStart', function (event, next, previous) {
      console.log(next.needsAuth, auth.isLoggedIn(), previous)
      if (next && next.needsAuth && !auth.isLoggedIn()) {
        event.preventDefault();

        if (JSON.stringify(previous) == "{}") {
          $state.go('initial')
        }
      }
    });
  });