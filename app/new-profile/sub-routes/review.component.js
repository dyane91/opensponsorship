angular
	.module('newProfile')
	.component('reviewComponent', {
		templateUrl: 'new-profile/sub-routes/review.template.html',
		controller: ['$scope', '$log', '$http', '$state', 'profile', function ReviewController($scope, $log, $http, profileFactory) {
			$scope.newPlayer = profileFactory.newPlayer;

			this.submit = function () {
				$http.post('http://localhost:3000/player/new-player', {player: $scope.newPlayer})
					.then((res) => {
						$log.log('Successfully created');
						$state.go('welcome');
					})
					.catch((err) => {
						$log.error(`Error saving player: ${err}`);
					});
			}
		}],
		controllerAs: '$ctrl'
	})