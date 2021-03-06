angular
	.module('newProfile')
	.component('basicInfoComponent', {
		templateUrl: 'new-profile/sub-routes/basic-info.template.html',
		controller: ['$scope', '$log', '$state', 'profile',  function BasicInfoController($scope, $log, $state, profileFactory) {
			this.$onInit = function () {
				$scope.name= profileFactory.getPlayerInfo('name');
				$scope.dob = profileFactory.getPlayerInfo('dob');
				$scope.nationality = profileFactory.getPlayerInfo('nationality');
				$scope.location = profileFactory.getPlayerInfo('location');
				$scope.gender = profileFactory.getPlayerInfo('gender');
			}

			this.saveAndContinue = function() {
				profileFactory.addPlayerInfo('name', $scope.name);
				profileFactory.addPlayerInfo('dob', $scope.dob);
				profileFactory.addPlayerInfo('nationality', $scope.nationality);
				profileFactory.addPlayerInfo('location', $scope.location);
				profileFactory.addPlayerInfo('gender', $scope.gender);
				$state.go('newProfile.sports');
			}
		}],
	});