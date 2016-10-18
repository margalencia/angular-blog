import controller from './post.controller';
import template from './post.component.html';

const PostComponent = {
    bindings: {
        post: '<'
    },
    controller,
    template
};

export default PostComponent;


