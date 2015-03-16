angular.module('githubSample')
  .controller('ReposCtrl', function (Repos) {
    console.log('this ran')
    var ctrl = this;
    Repos.getAll().then(function (data) {
      ctrl.repos = data
    })

  })
  .controller('RepoCtrl', function (Repos, $stateParams) {
    var ctrl = this
    ctrl.repo = 'Loading...'
    Repos.getAll().then(function (repos) {
      ctrl.repo = repos.filter(function (repo) {
        return repo.id == $stateParams.id
      })[0]
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
