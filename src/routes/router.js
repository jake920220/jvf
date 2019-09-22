import VueRouter from 'vue-router';

import Login from './login.vue';
import Index from './index.vue';
import Contact from './contact.vue';

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', name: "index", component: Index },
        { path: '/login', name: "login", component: Login },
        { path: '/contact', name: "contact", component: Contact },
    ],
});