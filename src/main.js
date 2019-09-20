import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Routes from './routes/router';

Vue.use(VueRouter);

new Vue({
    el: '#app',
    render: h => h(App),
    router: Routes
});

console.log("hello~");