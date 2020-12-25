import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import { CardTransaction } from '@/ApiClient/data/model/CardTransaction';
import apiClient from '@/ApiClient';
import { Transaction } from '@/ApiClient/data/model/Transaction';
import { cardStore, filterStore } from '@/store';

@Module({ name: 'transaction' })
export default class TransactionModule extends VuexModule {
  private apiClient = apiClient;
  private cardTransaction: CardTransaction | null = null;

  get transactionsBySelectedCard(): Transaction[] | [] {
    const selectedCardId = cardStore.selectedCard?.id || '';
    return this.cardTransaction ? this.cardTransaction[selectedCardId] : [];
  }

  get transactions(): Transaction[] | [] {
    if (!this.transactionsBySelectedCard) {
      return [];
    }
    return this.transactionsBySelectedCard.filter(TransactionModule.filterTransactions);
  }

  @Mutation
  setCardTransactions(cardTransaction: CardTransaction): void {
    this.cardTransaction = cardTransaction;
  }

  @Action({ commit: 'setCardTransactions' })
  async fetchCardTransactions(): Promise<CardTransaction> {
    return this.apiClient.fetchCardTransactions();
  }

  private static filterTransactions(transaction: Transaction) {
    const description = filterStore.keyword.description.trim().toLowerCase();
    const amount = filterStore.keyword.amount.trim();
    return transaction.description.toLowerCase()
      .includes(description) && transaction.amount.toString()
      .includes(amount);
  }
}
