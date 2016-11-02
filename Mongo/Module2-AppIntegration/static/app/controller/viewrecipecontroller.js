(function () {
	function ViewRecipeController ($scope, $routeParams, dataProvider) {

        $scope.finished_loading = false;
        $scope.page_load_error = null;

        dataProvider.getRecipeById($routeParams.recipe_id, function (err, recipe) {
            $scope.finished_loading = true;
            if (err) {
                $scope.page_load_error = "Unable to load recipe: " + JSON.stringify(err);
            } else {
                $scope.recipe = recipe;
            }
        });
    }

    // 2. create the controller and give it $scope.
    recipesApp.controller("ViewRecipeController", ['$scope', '$routeParams', 'dataProvider', ViewRecipeController]);
})();