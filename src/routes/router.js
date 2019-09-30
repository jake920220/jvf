import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: "index", component: () => import('./index.vue') },
        { path: '/login', name: "login", component: () => import('./login.vue') },
        { path: '/contact', name: "contact", component: () => import('./contact.vue') },
    ],
});