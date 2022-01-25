import { Middleware } from '@nuxt/types';

const authMiddleware: Middleware = ( { store, redirect } ) => {
   if ( !store.getters.hasToken ) {
      redirect( '/login?message=login' );
   }
};

export default authMiddleware;