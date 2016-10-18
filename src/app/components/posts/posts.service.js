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

    getPostData(postId) {
        return this.posts.get({id: postId});
    }
}

export default PostsService;



