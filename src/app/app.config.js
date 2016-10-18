export default function routing ($urlRouterProvider, $locationProvider, $stateProvider) {
    'ngInject';
    $locationProvider.html5Mode(false);
    $urlRouterProvider.otherwise('/posts');
};