module.controller('listController', ['dataService', 'quizMetrics', '$scope',
    function(dataService, quizMetrics, $scope) {
        $scope.data = dataService.turtlesData;
        console.log($scope.data);
        $scope.activeTurtle = {};
        $scope.searchKeyword = '';
        //
        $scope.quizMetrics = quizMetrics;
        $scope.activatedQuiz = function() {
            $scope.quizMetrics.changeState('quiz', true);
        }

        $scope.changeActiveTurtle = function(turtle) {
            $scope.activeTurtle = turtle;
        }
    }
]);