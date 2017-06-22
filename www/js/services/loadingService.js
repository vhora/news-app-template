var app = angular.module('fakeNews');

app.service('loadingService', ['$ionicLoading', loadingService]);

function loadingService($ionicLoading) {
    this.showLoading = function(){
        $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    };

    this.hideLoading = function(){
        $ionicLoading.hide();
    }
}