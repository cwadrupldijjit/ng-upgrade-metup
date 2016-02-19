(function() {
	'use strict';
	
	angular
		.module('AppOne.home')
		.directive('home', HomeDirective);
	
	function HomeDirective() {
		return {
			restrict: 'E',
			templateUrl: '/ng-app/home/home.template.html',
			controller: Home,
			controllerAs: 'vm'
		};
	}
	
	Home.$inject = [];
	
	function Home() {
		
	}
})();