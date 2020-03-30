angular
	.module('newProfile')
	.component('sportsComponent', {
		templateUrl: 'new-profile/sub-routes/sports.template.html',
		controller: ['$scope', '$state', '$log', 'profile', function SportsController($scope, $state, $log, profileFactory) {
			this.$onInit = function () {
				$scope.association = profileFactory.getPlayerInfo('association');
				$scope.team = profileFactory.getPlayerInfo('team');
			}

			this.saveAndContinue = function() {
				profileFactory.addPlayerInfo('association', $scope.association);
				profileFactory.addPlayerInfo('team', $scope.team);
				$state.go('newProfile.about');
			};
		}],
	});