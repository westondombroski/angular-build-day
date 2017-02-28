angular
    .module('recipeApp')
    .controller('RecipesShowController', RecipesShowController);

RecipesShowController.$inject = ['$http', '$routeParams', '$location'];
function RecipesShowController(   $http,   $routeParams,   $location  ) {
    var vm = this;
    $http({
        method: 'GET',
        url: 'http://food2fork.com/api/search?key=6d70327e9e46799f0c7e46ca9e4f80e2'
    }).then(function onSuccess(res) {
        console.log(res);
    }, function onError(res) {
        console.log('error', res);
    });
}
