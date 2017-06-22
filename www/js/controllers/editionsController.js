var app = angular.module('fakeNews'); //adicionar controller ao módulo já existente

app.controller('EditionsController', EditionsController) //nome da controller

function EditionsController(){ //código  da controller

    this.editions = [];
    var pub1 = {
        id: 1,
        title: 'Edição de Abril',
        date: new Date(2017,3,22) //javascript month -> 0 to 11
    };
    var pub2 = {
        id: 2,
        title: 'Edição de Maio',
        date: new Date(2017,4,12)
    };
    var pub3 = {
        id: 3,
        title: 'Edição de Junho',
        date: new Date(2017,5,17)
    };
    var pub4 = {
        id: 4,
        title: 'Edição de Julho',
        date: new Date(2017,6,09)
    };

    this.editions.push(pub1);
    this.editions.push(pub2);
    this.editions.push(pub3);
    this.editions.push(pub4);

}