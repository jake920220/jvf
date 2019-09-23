// import 'babel-polyfill';
// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//     modules: [],
//     state: {
//         counter: 0,
//     },
//     getters: {
//         getCounter: (state) => {
//             return state.counter;
//         }
//     },
//     // 동기 로직
//     mutations: {
//         addCounter
//     },
//     // 비동기 로직
//     actions: {
//         addCounterAction
//     }
// });

// function addCounter(state, payload) {
//     return payload && payload > 10 ? state.counter : state.counter++;
// };

// function addCounterAction(context) {
//     return setTimeout(() => {
//         context.commit('addCounter');
//     }, 1000);
// };