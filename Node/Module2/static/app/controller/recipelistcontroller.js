(function () {

	function RecipeListController($scope, dataProvider) {

		$scope.new_recipe = { };
        $scope.add_recipe_error = "";

        $scope.page_load_error = null;
        $scope.finished_loading = false;

        function get_recipes() {
            $scope.recipes = dataProvider.getAllRecipes(function (err, recipes) {
                $scope.finished_loading = true;
                if (err) {
                    $scope.page_load_error = err.message;
                } else {
                    $scope.recipes = recipes;
                }                
            });
        }
        
        $scope.addRecipe = function (recipe_data) {
            dataProvider.addRecipe(recipe_data, function (err, recipe) {
                if (err) {
                    $scope.add_recipe_error = "(" + err.error + ") " + err.message;
                } else {
                    $scope.add_recipe_error = null;
                    get_recipes();
                }                
            });
        };
        get_recipes();

    }

	recipesApp.controller("RecipesAppController", [ '$scope', 'dataProvider', RecipeListController]);
})();
