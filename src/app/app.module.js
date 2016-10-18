import angular from 'angular';
import uirouter from 'angular-ui-router';

import PostsModule from './components/posts/posts.module';
import routing from './app.config';

import '../css/style.less';

const AppModule = angular
    .module('app', [
        PostsModule,
        uirouter
    ])
    .config(routing)
    .name;

export default AppModule;

