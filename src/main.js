import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './routes/router';
import store from './store';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    render: h => h(App),
    router: Routes,
    store: store,
});

console.log("hello~");