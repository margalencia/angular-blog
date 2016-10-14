import angular from 'angular';
import ngResource from 'angular-resource';
import PostsComponent from './posts.component';
import PostsService from './posts.service';

const PostsModule = angular
    .module('posts', [
        ngResource
    ])
    .component('posts', PostsComponent)
    .service('PostsService', PostsService)
    .name;

export default PostsModule;