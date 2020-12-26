import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import { Card } from '@/ApiClient/data/model/Card';
import apiClient from '@/ApiClient';
import { filterStore } from '@/store';
import { FilterKeyword } from '@/enum/filter';

@Module({ name: 'card' })
export default class CardModule extends VuexModule {
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
    return apiClient.fetchCards();
  }

  @Action({ commit: 'setSelectedCard' })
  setCard(card: Card): Card {
    CardModule.resetKeyword();
    return card;
  }

  private static resetKeyword(): void {
    const emptyKeyword: FilterKeyword = { description: '', amount: '' };
    filterStore.updateKeyword(emptyKeyword);
  }
}
