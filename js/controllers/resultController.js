module.controller('resultController', ['quizMetrics', 'dataService', '$scope', function(quizMetrics, dataService, $scope) {
	$scope.quizMetrics = quizMetrics;
	$scope.dataService = dataService;
	$scope.activeQuestion = 0;
	$scope.setActiveQuestion = function(idx) {
		$scope.activeQuestion = idx;
	};
	$scope.getAnswerClass = function(idx) {
		if (idx === quizMetrics.correctAnswers[$scope.activeQuestion]) {
			return 'bg-success';
		} else if (idx === dataService.quizQuestions[$scope.activeQuestion].selected) {
			return 'bg-danger';
		}
	};
}]);