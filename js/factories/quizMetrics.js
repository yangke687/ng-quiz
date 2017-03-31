module.service('quizMetrics', ['dataService', function(dataService) {
	console.log("init services");
	var obj = {
		quizActive: true,
		resultsActive: false,
		correctAnswers: [],
		numCorrect: 0,

		changeState: function(metric, state) {
			if (metric === 'quiz') {
				this.quizActive = state;
			} else if (metric === 'results') {
				this.resultsActive = state;
			} else {
				return false;
			}
		},
		markQuiz: function() {
			this.correctAnswers = dataService.correctAnswers;
			for (var i = 0; i < dataService.quizQuestions.length; i++) {
				if (dataService.quizQuestions[i].selected === this.correctAnswers[i]) {
					dataService.quizQuestions[i].correct = true;
					this.numCorrect++;
				} else {
					dataService.quizQuestions[i].correct = false;
				}
			}
		}
	};
	return obj;
}]);