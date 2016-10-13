class PostsController {
    constructor(PostsService) {
        this.postsService = PostsService;
    }
    $onInit() {
        this.postsService.getPosts().then(response => this.posts = response);
    }
}

PostsController.$inject = ['PostsService'];

export default PostsController;