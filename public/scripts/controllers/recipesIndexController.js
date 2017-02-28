angular
    .module('recipeApp')
    .controller('RecipesIndexController', RecipesIndexController);

RecipesIndexController.$inject = ['$http', '$sce'];
function RecipesIndexController(   $http,   $sce  ) {
    var vm = this;
    var baseSearch = 'https://food2fork.com/api/get?key=6d70327e9e46799f0c7e46ca9e4f80e2';
  //  var query = 
    $http({
        method: 'jsonp',
        url: $sce.trustAsResourceUrl(baseSearch),
        params: {
        }
    }).then(function onSuccess(res) {
      vm.recipes = res.params.recipes;
        console.log(res.params.recipes);
    }, function onError(res) {
        console.log('error', res);
    });
}
