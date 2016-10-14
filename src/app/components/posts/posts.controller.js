class PostsController {
    constructor(PostsService) {
        this.posts = [];
        this.postsService = PostsService;
    }
    $onInit() {
        this.posts = this.postsService.getPosts();
    }
}

PostsController.$inject = ['PostsService'];

export default PostsController;