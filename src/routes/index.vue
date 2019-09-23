<template>
<div id="indexPage">
    index page

    <router-link to='/login'>로그인</router-link>
    <router-link to='/contact'>문의</router-link>

    <button @click="addCounterAction">+</button>
    <button @click="subCounter">-</button>
    <child></child>
</div>
</template>

<script>
import Child from '../components/child';
import {mapMutations, mapActions} from 'vuex';

export default {
  created() {},
  methods: {
    ...mapMutations({
      addCounter: 'counter/addCounter',
    }),
    ...mapActions({
      addCounterAction: 'counter/addCounterAction',
    }),
    subCounter,
  },
  components: {
    'child': Child
  }
};

function subCounter() {
  this.$store.state.counter.counter--;
};
</script>