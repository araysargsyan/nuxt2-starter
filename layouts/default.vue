<template>
    <div>
      <nav-bar />
      <main>
        <div class="container">
          <nuxt />
        </div>
      </main>
    </div>
</template>

<script>
   import Vue from 'vue';
   import NavBar from '@/components/NavBar';

   export default Vue.extend( {
      components: {
         NavBar,
      },
   } );
</script>
