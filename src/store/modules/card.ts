import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import { Card } from '@/ApiClient/data/model/Card';
import apiClient from '@/ApiClient';

@Module({ name: 'card' })
export default class CardModule extends VuexModule {
  private apiClient = apiClient;
  cards: Card[] = [];
  selectedCard: Card | null = null;

  @Mutation
  setCards(cards: Card[]): void {
    this.cards = cards;
  }

  @Mutation
  setSelectedCard(card: Card): void {
    this.selectedCard = card;
  }

  @Action({ commit: 'setCards' })
  async fetchCards(): Promise<Card[]> {
    return this.apiClient.fetchCards();
  }
}
