import angular from 'angular';
import PostsModule from './components/posts/posts.module';

const AppModule = angular
    .module('app', [
        PostsModule
    ])
    .name;

export default AppModule;

