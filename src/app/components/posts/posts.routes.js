export default function routes($stateProvider) {
    'ngInject';
    $stateProvider
        .state('posts', {
            url: '/posts',
            component: 'posts',
            resolve: {
                posts: PostsService => PostsService.getPosts()
            }
        })
        .state('post', {
            url: '/posts/:postId',
            component: 'post',
            resolve: {
                post: (PostsService, $stateParams) => PostsService.getPostData($stateParams.postId)
            }
        });
};