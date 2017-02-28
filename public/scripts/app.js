angular
    .module('recipeApp', ['ngRoute'])
    .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config(   $routeProvider,   $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/templates/recipes-index.html',
            controllerAs: 'recipesIndexCtrl',
            controller: 'RecipesIndexController'
        })
        .when('/recipes/:id', {
            templateUrl: '/templates/recipes-show.html',
            controllerAs: 'recipesShowCtrl',
            controller: 'RecipesShowController'
        })
        .otherwise({
            redirectTo: '/'
        });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}
