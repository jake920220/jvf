<template>
<div>
  <hr>
  Child counter : {{ renderCounter }} <br>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        created() {
            console.log("child component created");
        },
        computed: {
            ...mapGetters({
                renderCounter: 'counter/getCounter'
            }),
        },
    }
</script>