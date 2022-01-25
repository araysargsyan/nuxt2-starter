<template>
    <div class="container">
      <h1>Hello world</h1>
    </div>
</template>

<script lang="ts">
   import Vue from 'vue';
   import { LayoutsEnum } from '~/types/layouts';

   export default Vue.extend( {
      name: 'IndexPage',
      layout: LayoutsEnum.DEFAULT
   } );
</script>

<style lang="scss" scoped>
h1 {
  color: aqua;
}
</style>
