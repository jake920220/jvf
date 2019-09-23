<template>
<div id="indexPage">
    index page

    <router-link to='/login'>로그인</router-link>
    <router-link to='/contact'>문의</router-link>

    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <child></child>
</div>
</template>

<script>
import Child from '../components/child';

function addCounter() {
  this.$store.state.counter++;
};

function subCounter() {
  this.$store.state.counter--;
};

export default {
  created() {
    console.log("state?",this.$store.state.counter);
  },
  methods: {
    addCounter,
    subCounter,
  },
  components: {
    'child': Child
  }
};
</script>