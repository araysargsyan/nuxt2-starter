<template>
    <h2>About</h2>
</template>

<script lang="ts">
   import Vue from 'vue';
   import { mapMutations, mapActions, mapGetters } from 'vuex';
   import { SM } from '~/types/store';

   export default Vue.extend( {
      name: 'AboutPage',
      computed: {
         message: { // Store state to computed
            get() { return this.$store.state.root.message; },
            set( value ) { this.setMessage( value ); },
         },
         ...mapGetters( {
            storeState: `${SM.ROOT}/_state`
         } )
      },
      mounted() {
         console.log( this.storeState );
         console.log( this.$store, this.message );
         this.message = 4654546;
         this.anyAction( 'ALO' );
         console.log( this.$store, this.message );
      },
      methods: {
         ...mapMutations( {
            setMessage: `${SM.ROOT}/setMessage`
         } ),
         ...mapActions( {
            anyAction: `${SM.ROOT}/anyAction`,
         } ),
      }
   } );
</script>

<style scoped></style>