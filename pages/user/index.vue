<template>
    <section>
      <h1>User Page</h1>
      <ul>
        <li v-for="user of users" :key="user.id">
          <nuxt-link exact :to="`/user/${user.id}`"> user {{ user.name }} </nuxt-link>
        </li>
      <!--            <li v-for="user of 5" :key="user">-->
      <!--                <a href="#" @click.prevent="openUser(user)">User {{ user }}</a>-->
      <!--            </li>-->
      </ul>
    </section>
</template>

<script lang="ts">
   import Vue from 'vue';
   import { IUserPageData } from '~/types/pages';

   export default Vue.extend<IUserPageData, {}, {users: IUserPageData['users']}>( {
      name: 'UserPage',
      computed: {
         users() { return this.$store.state.root.users; },
      },
      // async asyncData( { $axios } ) {
      //    const users = await $axios.$get<IUserPageData['users']>( 'https://jsonplaceholder.typicode.com/users/' );
      //    return { users };
      // },
      // data: () => ( {
      //    users: [],
      // } ),
      async mounted() {
         //! Not ssr
         // this.users = await this.$axios.$get( 'https://jsonplaceholder.typicode.com/users/' );
      },
      methods: {
         //! Redirect
         // openUser( user: any ) {
         //    this.$router.push( `/user/${user}` );
         // },
      },
   } );
</script>

<style scoped></style>