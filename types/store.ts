import { ActionContext, ActionTree } from 'vuex';

// export const types = {};

export interface IRootState {}

export interface INuxtServerInitAction<S, R> extends ActionTree<S, R> {
   nuxtServerInit ( context: ActionContext<S, R> ): void
}

export enum SM {
   ROOT = 'root'
}