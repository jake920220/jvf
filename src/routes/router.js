import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './login.vue';
import Index from './index.vue';
import Contact from './contact.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: "index", component: () => import('./index.vue') },
        { path: '/login', name: "login", component: () => import('./login.vue') },
        { path: '/contact', name: "contact", component: () => import('./contact.vue') },
    ],
});