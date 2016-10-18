import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import PostsComponent from './posts.component';
import PostsService from './posts.service';
// import routing from './posts.routes';

const PostsModule = angular
    .module('posts', [
        ngResource,
        uirouter
    ])
    .component('posts', PostsComponent)
    .service('PostsService', PostsService)
    // .config(routing)
    .name;

export default PostsModule;