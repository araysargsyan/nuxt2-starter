import { Module, VuexModule } from 'nuxt-property-decorator';
import { Action, Mutation } from 'vuex-module-decorators';
import { $axios } from '~/utils/api';
import { SM } from '~/types/store';

// interface StoreType {
//    mm: MyModule
// }
// // Declare empty store first
// const store = new Vuex.Store<StoreType>( {} );

@Module( {
   name: SM.ROOT,
   namespaced: true,
   stateFactory: true
} )
export default class extends VuexModule {
   private message: string = 'hi';
   private users: Array<any> = [];

   get _state() {
      return {
         users: this.users,
         message: this.message
      };
   }

   @Mutation
   public setMessage( val: string ) {
      this.message = val;
   }

   @Mutation
   setUsers( users: Array<any> ) {
      this.users = users;
   }

   @Action
   public anyAction( val: string ) {
      console.log( val, this, this.message );
   }

   @Action
   async getUsers() {
      const users = await $axios.$get<Array<any>>( 'https://jsonplaceholder.typicode.com/users/' );
      this.setUsers( users );
   }
}