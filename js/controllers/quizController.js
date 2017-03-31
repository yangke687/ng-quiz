module.controller('quizController', ['dataService', 'quizMetrics', '$scope',
	function(dataService, quizMetrics, $scope) {
		$scope.quizMetrics = quizMetrics;
		$scope.dataService = dataService;
		$scope.activeQuestion = 0;

		var numQuestionsAnswered = 0;


		$scope.setActiveQuestion = function(idx) {
			if (idx !== undefined) {
				$scope.activeQuestion = idx;
				return;
			}
			var breakout = false;
			var quizLength = dataService.quizQuestions.length - 1;
			// skip out questions
			while (!breakout) {
				$scope.activeQuestion = $scope.activeQuestion < quizLength ? ++$scope.activeQuestion : 0;
				console.log($scope.activeQuestion);
				if (dataService.quizQuestions[$scope.activeQuestion].selected === null) {
					breakout = true;
				}
			}
		}

		$scope.questionAnswered = function() {

			var quizLength = dataService.quizQuestions.length;

			if (dataService.quizQuestions[$scope.activeQuestion].selected === null) {
				numQuestionsAnswered++;
				if (numQuestionsAnswered >= quizLength) {
					// finalise quiz

				}
			}

			$scope.setActiveQuestion();
		}

		$scope.selectAnswer = function(idx) {
			dataService.quizQuestions[$scope.activeQuestion].selected = idx;
		}
	}
]);