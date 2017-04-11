export default function appConfig($urlRouterProvider, $locationProvider, localStorageServiceProvider, $mdThemingProvider) {
    'ngInject';

    // Default MD theming
    $mdThemingProvider.theme('default')
        .primaryPalette('grey', { 'default' :'100' })
        .backgroundPalette('grey', { 'default' : '100' })
        .dark();

    // Localstorage application prefix
    localStorageServiceProvider.setPrefix('projectsApp');

    // HTML5 router mode, safe redirect
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
};
