export default function appConfig ($urlRouterProvider, $locationProvider, localStorageServiceProvider) {
  'ngInject';

  localStorageServiceProvider.setPrefix('projectsApp');
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
};
