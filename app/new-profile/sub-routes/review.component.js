angular
	.module('newProfile')
	.component('reviewComponent', {
		templateUrl: 'new-profile/sub-routes/review.template.html',
		controller: ['$scope', '$log', 'profile', function ReviewController($scope, $log, profileFactory) {
			$scope.newPlayer = profileFactory.newPlayer;

			this.submit = function () {
				$log.log($scope.newPlayer);
			}
		}],
		controllerAs: '$ctrl'
	})