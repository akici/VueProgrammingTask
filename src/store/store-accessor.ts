import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import card from '@/store/modules/card';

let cardStore: card;

function initialiseStores(store: Store<any>): void {
  cardStore = getModule(card, store);
}

export { initialiseStores, cardStore };
