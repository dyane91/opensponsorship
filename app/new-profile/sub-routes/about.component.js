angular
	.module('newProfile')
	.component('aboutComponent', {
		templateUrl: 'new-profile/sub-routes/about.template.html',
		controllerAs: '$ctrl',
		controller: ['$scope', '$state', 'profile', function AboutController($scope, $state, profileFactory) {
			this.$onInit = function() {
				$scope.description = profileFactory.getPlayerInfo('description');
				$scope.interest = profileFactory.getPlayerInfo('interest');
				$scope.married = profileFactory.getPlayerInfo('married');
				$scope.charities = profileFactory.getPlayerInfo('charities');
				$scope.socialMedia = profileFactory.getPlayerInfo('socialMedia');
				$scope.pets = profileFactory.getPlayerInfo('pets');
				$scope.alcohol = profileFactory.getPlayerInfo('alcohol');
			}

			this.continueAndReview = function() {
				profileFactory.addPlayerInfo('description', $scope.description);
				profileFactory.addPlayerInfo('interest', $scope.interest);
				profileFactory.addPlayerInfo('married', $scope.married);
				profileFactory.addPlayerInfo('charities', $scope.charities);
				profileFactory.addPlayerInfo('socialMedia', $scope.socialMedia);
				profileFactory.addPlayerInfo('pets', $scope.pets);
				profileFactory.addPlayerInfo('alcohol', $scope.alcohol);

				$state.go('newProfile.review');
			}
		}]
	})