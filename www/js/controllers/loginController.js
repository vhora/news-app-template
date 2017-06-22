var app = angular.module('fakeNews');

app.controller('LoginController', LoginController);

LoginController.$inject = ['$window', '$rootScope', '$location', '$ionicHistory', 'toastr', '$ionicLoading'];

function LoginController($window, $rootScope, $location, $ionicHistory, toastr, $ionicLoading){
    this.username = '';
    this.password = '';

    this.doLogin = function(){
        var userInfo = {
            username: this.username,
            image: 'img/profile.jpg',
            password: this.password,
            group: 'Hardcore user'
        };
        //clear back history
        // $ionicHistory.nextViewOptions({
        //     disableBack: true
        // });
        $rootScope.user = {};
        $rootScope.user = userInfo;

        //back to previous url
        if($ionicHistory.backView().url != undefined){
            $window.location.href = '#' + $ionicHistory.backView().url;//'#/dashboard';
        }
        else{
            $window.location.href = '#/dashboard';
        }

        toastr.success('Bem vindo ' + $rootScope.user.username + '!');
    }
}