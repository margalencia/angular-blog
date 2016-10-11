(function () {
    'use strict';

    angular
        .module('posts')
        .service('PostsService', PostsService);

    PostsService.$inject = ['dependency'];

    /* @ngInject */
    function PostsService(dependency) {
        this.functionName = functionName;

        ////////////////

        function functionName() {
            code
        }
    }

})();

