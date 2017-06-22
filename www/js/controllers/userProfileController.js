var app = angular.module('fakeNews');

app.controller('UserProfileController', UserProfileController);

UserProfileController.$inject = ['$rootScope', 'toastr'];

function UserProfileController($rootScope, toastr){
    this.save = function(){
        toastr.success('Salvo com sucesso');
    }
}