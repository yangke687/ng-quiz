module.controller('resultController', ['quizMetrics', 'dataService', '$scope', function(quizMetrics, dataService, $scope) {
	$scope.quizMetrics = quizMetrics;
	$scope.dataService = dataService;
	$scope.setActiveQuestion = function(idx) {
		console.log(idx);
	}
}]);