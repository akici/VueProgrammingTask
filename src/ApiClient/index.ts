import { cards } from '@/ApiClient/data/cards';
import { Card } from '@/ApiClient/data/model/Card';
import { cardTransaction } from '@/ApiClient/data/transactions';
import { CardTransaction } from '@/ApiClient/data/model/CardTransaction';

const fetch: (any, number) => Promise<any> = (mockData, time = 0) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(mockData);
  }, time);
});

const apiClient = {
  async fetchCardTransactions(): Promise<CardTransaction> {
    return fetch(cardTransaction, 1000);
  },
  async fetchCards(): Promise<Card[]> {
    return fetch(cards, 1500);
  },
};

export default apiClient;
