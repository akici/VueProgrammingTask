import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import { CardTransaction } from '@/ApiClient/data/model/CardTransaction';
import apiClient from '@/ApiClient';
import { Transaction } from '@/ApiClient/data/model/Transaction';
import { cardStore } from '@/store';

@Module({ name: 'transaction' })
export default class TransactionModule extends VuexModule {
  private apiClient = apiClient;
  private cardTransaction: CardTransaction | null = null;

  get transactionsBySelectedCard(): Transaction[] | [] {
    const selectedCardId = cardStore.selectedCard?.id || '';
    return this.cardTransaction ? this.cardTransaction[selectedCardId] : [];
  }

  @Mutation
  setCardTransactions(cardTransaction: CardTransaction): void {
    this.cardTransaction = cardTransaction;
  }

  @Action({ commit: 'setCardTransactions' })
  async fetchCardTransactions(): Promise<CardTransaction> {
    return this.apiClient.fetchCardTransactions();
  }
}
