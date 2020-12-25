import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import card from '@/store/modules/card';
import transaction from '@/store/modules/transaction';
import filter from '@/store/modules/filter';

let cardStore: card;
let cardTransactionStore: transaction;
let filterStore: filter;

function initialiseStores(store: Store<any>): void {
  cardStore = getModule(card, store);
  cardTransactionStore = getModule(transaction, store);
  filterStore = getModule(filter, store);
}

export {
  initialiseStores, cardStore, cardTransactionStore, filterStore,
};
