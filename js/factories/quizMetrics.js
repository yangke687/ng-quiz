module.service('quizMetrics', function() {
	console.log("init services");
	var obj = {
		quizActive: true,
		resultsActive: false,
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

		}
	};
	return obj;
});