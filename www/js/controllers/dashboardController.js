var app = angular.module('dsnNews'); //adicionar controller ao módulo já existente

app.controller('DashboardController', DashboardController) //nome da controller

function DashboardController(){ //código  da controller
    this.description = 'Esta é a dashboard'; //variável para a descrição da página (apenas para teste)
    this.text = '';

    this.ShowText = function () {
        this.text = 'ARTIGO PARA DSN-NEWS';
    };
}