var app = angular.module('fakeNews'); //adicionar controller ao módulo já existente

app.controller('EditionController', EditionController) //nome da controller

function EditionController($stateParams){ //código  da controller
    this.title = $stateParams.title;
    this.id = $stateParams.id;
    this.articles = [];

    var article1 = {
        title: 'Bits & Bytes',
        author: 'da Hora, Victor',
        description: 'Artigo sobre apps híbridos',
        likes: 2,
        image: 'img/ionic.jpg',
        articleId: 1
    }

    var article2 = {
        title: 'Aniversariantes',
        author: '',
        description: 'Aniversariantes do mês',
        likes: 7,
        image: 'img/birthday.jpg',
        articleId: 2
    }

    var article3 = {
        title: 'Café filosófico',
        author: 'da Hora, Victor',
        description: 'Ser ou não ser?',
        likes: 13,
        image: 'img/coffee.jpg',
        articleId: 3
    }

    this.loadArticles = function(){//carregar  um set de artigos diferente para cada publicação
        if(this.id == 1){
            this.articles.push(article1);
            this.articles.push(article2);
            this.articles.push(article3);
        }
        else if(this.id == 2){
            this.articles.push(article1);
            this.articles.push(article3);  
        }
        else if(this.id == 3){
            this.articles.push(article3);
        }
        else{
            this.articles.push(article1);
            this.articles.push(article2);
            this.articles.push(article3);
        }
    }
}