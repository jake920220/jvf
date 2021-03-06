import '@babel/polyfill';

import Vue from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store/index';

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");