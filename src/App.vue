<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    console.log("app running");
  }
};
</script>

<style src="./stylesheets/app.scss" lang="scss" scoped />