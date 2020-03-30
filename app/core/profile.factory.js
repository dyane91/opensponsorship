angular
	.module('core', [])
	.factory('profile', [function ProfileFactory() {
		this.newPlayer = {};

		this.addPlayerInfo = function (key, value) {
			this.newPlayer[key] = value;
		}

		this.getPlayerInfo = function(key) {
			return this.newPlayer[key] || '';
		}

		return this;
	}]);