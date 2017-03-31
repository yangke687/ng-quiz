module.controller('quizController', ['dataService', 'quizMetrics', '$scope',
	function(dataService, quizMetrics, $scope) {
		$scope.quizMetrics = quizMetrics;
		$scope.dataService = dataService;
		$scope.activeQuestion = 0;

		$scope.questionAnswered = function() {
			console.log('here');
		}
	}
]);