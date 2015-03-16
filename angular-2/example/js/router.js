angular.module('githubSample')
  .config(function($stateProvider, $urlRouterProvider, $qProvider) {
    $stateProvider.state('root', {
      url: '',
      abstract: 'true',
      views: {
        topbar: {
          templateUrl: 'templates/topbar.html',
          controller: 'TopBarCtrl',
          controllerAs: 'topbar'
        }
      }
    })
    .state('initial', {
      url: '/',
      parent: 'root',
      views: {
        'main@': {
          template: '<h1>Not logged in</h1>'
        }
      }
    })
    .state('root.list', {
      url: '/repos',
      needsAuth: true,
      abstract: true,
      views: {
        'main@': {
          templateUrl: 'templates/list.html',
          controller: 'RepoCtrl',
          controllerAs: 'repos'
        }
      }
    })
    .state('root.list.index', {
      url: '/all',
      // parent: 'root.list',
      needsAuth: true,
      views: {
        'master': {
          templateUrl: 'templates/repo-master.html',
        }
      }
    })
    .state('root.list.details', {
      url: '/:id',
      // parent: 'root.list',
      needsAuth: true,
      views: {
        'master': {
          template: '<h1>Viewing repo</h1>',
          // controller: 'RepoCtrl',
          // controllerAs: 'repos'
        },
        'detail': {
          template: {
            templateUrl: 'templates/repo.html'
          }
        }
      }
    })
    .state('404', {
      url: '/404',
      template: '<h1>404</h1>'
    })
    $urlRouterProvider.otherwise('/');
  })