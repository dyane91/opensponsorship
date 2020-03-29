function formViewController() {

}

angular
	.module('newProfile')
	.component('newProfileComponent', {
		templateUrl: 'new-profile/new-profile.template.html',
		controller: formViewController,
	})