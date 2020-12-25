import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import card from '@/store/modules/card';
import transaction from '@/store/modules/transaction';

let cardStore: card;
let cardTransactionStore: transaction;

function initialiseStores(store: Store<any>): void {
  cardStore = getModule(card, store);
  cardTransactionStore = getModule(transaction, store);
}

export { initialiseStores, cardStore, cardTransactionStore };
