<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex flex-column flex-md-row justify-content-between">
        <CardItem v-for="card in cards" v-bind:key="card.id"
                  :card="card" :is-selected="card === selectedCard"
                  @selected-card="setSelectedCard"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Card } from '@/ApiClient/data/model/Card';
import { cardStore } from '@/store';
import CardItem from './CardItem.vue';

@Component({
  components: {
    CardItem,
  },
})
export default class CardComponent extends Vue {
  private cardStore = cardStore;

  get cards(): Card[] {
    return this.cardStore.cards;
  }

  get selectedCard(): Card | null {
    return this.cardStore.selectedCard;
  }

  setSelectedCard(card: Card): void {
    this.cardStore.setSelectedCard(card);
  }

  setFirstCardSelected(): void {
    const firstCard = this.cards[0];
    this.setSelectedCard(firstCard);
  }

  async created() {
    await this.cardStore.fetchCards();
    this.setFirstCardSelected();
  }
}
</script>

<style scoped>
</style>
