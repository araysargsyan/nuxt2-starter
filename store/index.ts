import Vuex, { Store } from 'vuex';
import { getModule } from 'nuxt-property-decorator';
import RootModule from './root';
import { INuxtServerInitAction, SM } from '~/types/store';

const createStore = ( store: Store<any> ) => {
   return new Vuex.Store( {
      modules: {
         [SM.ROOT]: getModule( RootModule, store )
      }
   } );
};

export const plugins = [ createStore ];
export const actions: INuxtServerInitAction<any, any> = {
   async nuxtServerInit ( { dispatch, state } ) {
      console.log( 'nuxtServerInit: BEFORE', state );
      await dispatch( `${SM.ROOT}/getUsers` );
      console.log( 'nuxtServerInit: AFTER', state );
   }
};