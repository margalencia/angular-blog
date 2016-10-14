import angular from 'angular';
import PostsModule from './components/posts/posts.module';
import '../css/style.less';

const AppModule = angular
    .module('app', [
        PostsModule
    ])
    .name;

export default AppModule;

