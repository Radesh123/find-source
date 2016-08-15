(function(){
	var app = angular.module('app',['ui.router']);
	app.config(['$stateProvider, $logProvider', function($stateProvider,$logProvider){

		$logProvider.debugEnabled(true);	
		$stateProvider
			.state('about', {
				url:'/about',
				templateUrl:'../../server/partials/about.html'
			});
	}]);
}());