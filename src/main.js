import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './routes/router';
// import { store } from './store';
import store from './store/index';

Vue.use(VueRouter);

console.log("hello", store);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});