<template>
<div id="indexPage">
    index page

    <router-link to='/login'>로그인</router-link>
    <router-link to='/contact'>문의</router-link>
</div>
</template>

<script>
export default {
  created() {
    console.log("state?",this.$store.state);
  }
};
</script>