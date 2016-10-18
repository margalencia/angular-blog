class PostsService {
    constructor($resource) {
        'ngInject';
        this.posts = $resource('/posts/:id', {}, {
            update: {method: 'PUT'}
        });
    }
    getPosts() {
        return this.posts.query();
    }
}

export default PostsService;



