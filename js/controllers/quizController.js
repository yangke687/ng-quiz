module.controller('quizController', ['dataService', 'quizMetrics', '$scope',
	function(dataService, quizMetrics, $scope) {
		$scope.quizMetrics = quizMetrics;
		$scope.dataService = dataService;
		$scope.activeQuestion = 0;
		$scope.error = false;
		$scope.finalise = false;

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
				if ($scope.activeQuestion === 0) {
					$scope.error = true;
				}
				console.log($scope.activeQuestion);
				if (dataService.quizQuestions[$scope.activeQuestion].selected === null) {
					breakout = true;
				}
			}
		}

		$scope.questionAnswered = function() {

			var quizLength = dataService.quizQuestions.length;
			var allAnswered = true;
			for (var i = 0; i < quizLength; i++) {
				if (dataService.quizQuestions[i].selected === null) {
					allAnswered = false;
					break;
				}
			}

			if (dataService.quizQuestions[$scope.activeQuestion].selected === null) {
				numQuestionsAnswered++;
				console.log('numQuestionsAnswered:', numQuestionsAnswered);
				if (numQuestionsAnswered >= quizLength) {
					// finalise quiz
					for (var i = 0; i < quizLength; i++) {
						if (dataService.quizQuestions[i].selected === null) {
							$scope.setActiveQuestion(i);
							return;
						}
					}
					// all the questions has been answered !
					$scope.error = false;
					$scope.finalise = true;
					return;
				}
			}

			if (!allAnswered) {
				$scope.setActiveQuestion();
			} else {
				$scope.error = false;
				$scope.finalise = true;
			}
		}

		$scope.selectAnswer = function(idx) {
			dataService.quizQuestions[$scope.activeQuestion].selected = idx;
		}

		$scope.finaliseAnswers = function() {
			$scope.finalise = false;
			numQuestionsAnswered = 0;
			$scope.activeQuestion = 0;
			quizMetrics.markQuiz();
			quizMetrics.changeState('quiz', false);
			quizMetrics.changeState('results', true);
		}
	}
]);