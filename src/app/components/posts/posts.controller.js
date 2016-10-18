class PostsController {
    constructor(PostsService) {
        'ngInject';
        this.postsService = PostsService;
    }
    $onInit() {
        this.posts = this.postsService.getPosts();
    }
}

export default PostsController;