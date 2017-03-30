module.controller('quizController', ['dataService', 'quizMetrics', '$scope',
	function(dataService, quizMetrics, $scope) {
		$scope.quizMetrics = quizMetrics;
		$scope.dataService = dataService;
	}
]);