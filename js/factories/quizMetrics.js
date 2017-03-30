module.service('quizMetrics', function() {
	console.log("init services");
	var obj = {
		quizActive: false,
		changeState: function(state) {
			this.quizActive = state;
		}
	};
	return obj;
});