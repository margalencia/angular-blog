(function() {
    'use strict';

    angular
        .module('posts')
        .component('postList', {
            templateUrl: 'app/post/post-list.component.html',
            controller: PostListController,
            controllerAs: 'postListController'
        });

    // PostListController.$inject = ['dependency'];

    /* @ngInject */
    function PostListController() {
        var vm = this;
        vm.$onInit = function () {
            vm.posts = [
                {
                    id: 0,
                    title: 'post 1',
                    text: 'djfkjf dl lsdjf ldjfldjf lkds jfd flds ldsjf ldsjf ldskf jldkfjdjf'
                },
                {
                    id: 1,
                    title: 'post 2',
                    text: 'djfkjf dl lsdjf 7456 4547 54 584 584548758475  58475784 584 5684584568475 lkds jfd flds ldsjf ldsjf ldskf jldkfjdjf'
                }
            ];
        };
    }

})();

