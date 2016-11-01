(function () {

	function RecipeListController($scope) {

		$scope.new_recipe = { };

		$scope.recipes = [ 
		{	name:'pasta al pesto', 
			type: 'Italian', 
			summary: 'A quick and simple dish for any italian household' }, 
		{	
			name:'Pizza', 
			type: 'Italian', 
			summary: 'Fastest food ever' }, 
		{
			name:'noodles', 
			type: 'chinese', 
			summary: 'wavy fast food' }
		];

		$scope.addRecipe = function (recipe_data) {
			$scope.recipes.push(recipe_data);
			$scope.new_recipe = { };
		};
	}

	recipesApp.controller("RecipeListController", [ '$scope', RecipeListController]);
})();
