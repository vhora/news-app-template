var app = angular.module('fakeNews'); //adicionar controller ao módulo já existente

app.controller('DashboardController', DashboardController) //nome da controller

DashboardController.$inject = ['$rootScope', '$window'];

function DashboardController($rootScope, $window){ //código  da controller
    //sem logica na dashboard
}