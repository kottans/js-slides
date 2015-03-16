angular.module('githubSample')
  .controller('RepoCtrl', function (auth, Repos) {
    console.log('this ran')
    var ctrl = this;
    Repos.getAll().then(function (data) {
      console.log(data)
      ctrl.repos = data
    })

  })
  .controller('TopBarCtrl', function (auth, $state) {
    this.isLoggedIn = auth.isLoggedIn
    this.signIn = function () {
      auth.authenticate()
        .then(function () {
          $state.go('root.list.index')
        })
        .catch(function(response) {
          console.error(response);
        });
    }
  })
