(function () {
	function ViewRecipeController ($scope, $routeParams, dataProvider) {

        $scope.recipe = dataProvider.getRecipeById($routeParams.recipe_id);

        if(!$scope.recipe) {
          console.log("TODO(marc): dont be lazy..!! ");
        }

	}

	recipesApp.controller("ViewRecipeController", ['$scope', '$routeParams', 'dataProvider', ViewRecipeController]);
})();