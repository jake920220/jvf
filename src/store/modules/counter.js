const state = {
    counter: 0,
};
const mutations = {
    addCounter: (state, payload) => {
        return payload && payload > 10 ? state.counter : state.counter++;
    }
};
const getters = {
    getCounter: (state) => {
        return state.counter;
    },
};
const actions = {
    addCounterAction : (context) => {
        return setTimeout(() => {
            context.commit('addCounter');
        }, 1000);
    },
};

export default {
    namespaced: true,
    state, getters, actions, mutations
};