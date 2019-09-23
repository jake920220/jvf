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
  created() {
    console.log("state?",this.$store.state.counter);
  },
  methods: {
    ...mapMutations([
      'addCounter',
    ]),
    ...mapActions([
      'addCounterAction'
    ]),
    subCounter,
  },
  components: {
    'child': Child
  }
};

function addCounterAction() {
  this.$store.dispatch('addCounterAction');
};



function subCounter() {
  this.$store.state.counter--;
};
</script>