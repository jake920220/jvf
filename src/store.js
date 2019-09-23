import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    getters: {
        getCounter: (state) => {
            return state.counter;
        }
    },
    state: {
        counter: 0,
    }
});