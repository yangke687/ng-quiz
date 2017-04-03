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
	$scope.calculatePerc = function() {
		return quizMetrics.numCorrect / dataService.quizQuestions.length * 100;
	}
	$scope.reset = function() {
		quizMetrics.changeState('results', false);
		quizMetrics.numCorrect = 0;
		for (var i = 0; i < dataService.quizQuestions.length; i++) {
			//console.log(dataService.quizQuestions[i]);
			dataService.quizQuestions[i].selected = null;
			dataService.quizQuestions[i].correct = null;
		}
		//console.log(dataService);
	}
}]);