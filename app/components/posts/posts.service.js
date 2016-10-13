class PostsService {
    constructor($resource) {
        this.posts = $resource('/posts/:id', {}, {
            update: {method: 'PUT'}
        });
    }
    getPosts() {
        return this.posts.query();
    }
}

PostsService.$inject = ['$resource'];

export default PostsService;



