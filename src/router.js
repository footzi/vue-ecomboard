import Projects from './views/Projects.vue';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    mode  : 'history',
    routes: [{
        path     : '/',
        name     : 'Projects',
        component: Projects
    }]
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
});
