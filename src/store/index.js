import 'babel-polyfill';
import Vue from 'vue';
import Vuex from 'vuex';
import counter from './moduels/counter';

console.log("what counter", counter);

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter
    }
});