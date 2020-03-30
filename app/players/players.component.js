angular
	.module('players')
	.component('playersComponent', {
		templateUrl: 'players/players.template.html',
		controller: ['$scope', '$http', function PlayersComponent($scope, $http) {
			this.$onInit = function () {
				$http.get('http://localhost:3000/player')
					.then((res) => {
						const { players } = res.data;
						$scope.players = players;
					})
			}
		}],
		controllerAs: '$ctrl'
	})