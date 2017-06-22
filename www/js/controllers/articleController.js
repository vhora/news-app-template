var app = angular.module('fakeNews'); //adicionar controller ao módulo já existente

app.controller('ArticleController', ArticleController) //nome da controller

ArticleController.$inject = ['$scope','$stateParams','newsFactory','$http', 'toastr', 'loadingService'];

function ArticleController($scope, $stateParams, newsFactory, $http, toastr, loadingService){ //código  da controller
    this.title = $stateParams.title;
    var id = $stateParams.articleId;
    $scope.article = {};
    
    this.loadData = function(){

        loadingService.showLoading();

        var response = newsFactory.getNews('reddit-r-all').then(function(response){
            $scope.article = response.data.articles[id];
            
            loadingService.hideLoading();
        }, function(response){
            toastr.error('Erro ao acessar o artigo');
            loadingService.hideLoading();
        });
    }
}