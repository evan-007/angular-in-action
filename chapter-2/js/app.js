var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope) {
	$scope.statuses = [
		{name: 'Backlog'},
		{name: 'To do'},
		{name: 'In progress'},
		{name: 'Code Review'},
		{name: 'QA Review'},
		{name: 'Verified'},
		{name: 'Done'}
	];

	$scope.types = [
		{name: 'Feature'},
		{name: 'Enhancement'},
		{name: 'Bug'},
		{name: 'Spike'}
	];

	$scope.createStory = function () {
		$scope.stories.push({
			title: 'New Story',
			description: 'Description pending.'
		});
	};

	$scope.currentStory;

	$scope.setCurrentStory = function(story) {
		$scope.currentStory = story;
		console.log($scope.currentStory)
	};

	$scope.stories = [
		{
			title: 'Story 00', description: 'Description pending.',
			criteria: 'Criteria pending.', status: 'To Do', type: 'Feature',
			reporter: 'Evan', assignee: 'Obama'
		},
		{
			title: 'Story 01', description: 'Description pending.',
			criteria: 'Criteria pending.', status: 'To Do', type: 'Feature',
			reporter: 'Evan', assignee: 'Obama'
		},
		{
			title: 'Story 02', description: 'Description pending.',
			criteria: 'Criteria pending.', status: 'To Do', type: 'Feature',
			reporter: 'Evan', assignee: 'Obama'
		},
		{
			title: 'Story 03', description: 'Description pending.',
			criteria: 'Criteria pending.', status: 'To Do', type: 'Feature',
			reporter: 'Evan', assignee: 'Obama'
		},
		{
			title: 'Story 04', description: 'Description pending.',
			criteria: 'Criteria pending.', status: 'To Do', type: 'Feature',
			reporter: 'Evan', assignee: 'Obama'
		},
		{
			title: 'Story 05', description: 'Description pending.',
			criteria: 'Criteria pending.', status: 'To Do', type: 'Feature',
			reporter: 'Evan', assignee: 'Obama'
		},
	];
});