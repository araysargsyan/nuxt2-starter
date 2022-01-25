<template>
    <section>
      {{ $route.params.id }}
    </section>
</template>

<script lang="ts">
   import Vue from 'vue';

   export default Vue.extend( {
      validate: ( { params } ) => /^\d+$/.test( params.id ),
   } );
</script>

<style scoped></style>
