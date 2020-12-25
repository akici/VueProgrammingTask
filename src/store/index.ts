import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { initialiseStores } from '@/store/store-accessor';
import card from './modules/card';
import transaction from './modules/transaction';
import filter from './modules/filter';

Vue.use(Vuex);

const initializer = (store: Store<any>) => initialiseStores(store);
export const plugins = [initializer];
export * from '@/store/store-accessor';

const store = new Vuex.Store({
  plugins,
  state: {},
  modules: {
    card,
    transaction,
    filter,
  },
});

export default store;
