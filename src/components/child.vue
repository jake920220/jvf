<template>
<div>
  <hr>
  Child counter : {{ this.$store.state.counter }} <br>
</div>
</template>

<script>
    export default {
        created() {
            console.log("child component created");
        }
    }
</script>