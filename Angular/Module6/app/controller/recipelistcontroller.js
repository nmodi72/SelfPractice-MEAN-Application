(function () {

	function RecipeListController($scope, dataProvider) {

		$scope.new_recipe = { };

        $scope.recipes = dataProvider.getAllRecipes();
        $scope.error_message = "";
    
        $scope.addRecipe = function (recipe_data) {
            try {
                dataProvider.addRecipe(recipe_data);
            } catch (e) {
                $scope.error_message = e.message;
            }

            // be sure to update our list of recipes.
            $scope.recipes = dataProvider.getAllRecipes();
        };

    }

	recipesApp.controller("RecipesAppController", [ '$scope', 'dataProvider', RecipeListController]);
})();
