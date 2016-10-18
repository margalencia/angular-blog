export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('posts', {
            url: '/posts',
            component: 'posts'
        });
};