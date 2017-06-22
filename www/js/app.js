var app = angular.module('fakeNews', ['ionic','ui.router', 'toastr']);//, 'dsnFactories']);

app.run(function($ionicPlatform, $rootScope, $window, loadingService) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
  
  $rootScope.doLogout = function(){
    $rootScope.user = undefined;
    $window.location.href = '#/login';
  }

  $rootScope.checkLogin = function(){
      if($rootScope.user != undefined){
          if($rootScope.user.username == undefined){
              $window.location.href = '#/login';
          }
      }
      else{
          $window.location.href = '#/login';
      }
  }
    // Setup the loader

  $rootScope.$on('$stateChangeStart', function () {
      loadingService.showLoading();
  });

  $rootScope.$on('$stateChangeSuccess', function () {
      $rootScope.checkLogin();
      loadingService.hideLoading();
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('dashboard', {
    url: '/dashboard',
    views: {
      'menuContent': {
        templateUrl: 'templates/dashboard.html',
      }
    }
  })
  .state('editions', {
    url: '/editions',
    views: {
      'menuContent': {
        templateUrl: 'templates/editions.html',
      }
    }
  })
  .state('edition/:id/:title', {
    url: '/edition/:id/:title',
    params: {
      id: 1,
      title: 'Abril'
    },
    views: {
      'menuContent': {
        templateUrl: 'templates/edition.html',
      }
    }
  })
  .state('article/:title/:articleId', {
    url: '/article/:title/:articleId',
    views: {
      'menuContent': {
        templateUrl: 'templates/article.html'
      }
    }
  })
  .state('login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })
  .state('user-profile', {
    url: '/user-profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/user-profile.html'
      }
    }
  })
  .state('about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/dashboard');
});
