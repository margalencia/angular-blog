import controller from './posts.controller';
import template from './posts.component.html';

const PostsComponent = {
    bindings: {
        posts: '<'
    },
    controller,
    template
};

export default PostsComponent;


