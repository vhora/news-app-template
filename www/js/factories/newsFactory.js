var app = angular.module('fakeNews');

app.factory('newsFactory', ['$http', newsFactory]);

function newsFactory($http) {
    return {
        getNews: function(source) { 
           return $http.get('https://newsapi.org/v1/articles?source='+ source +'&sortBy=top&apiKey=fa3a83bd70c54b618119be309e979237');
        }
    };
}