<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex flex-column flex-md-row justify-content-between">
        <CardItem v-for="card in cards" v-bind:key="card.id"
                  :card="card" :is-selected="card === selectedCard"
                  @selected-card="selectCard" />
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
  get cards(): Card[] {
    return cardStore.cards;
  }

  get selectedCard(): Card | null {
    return cardStore.selectedCard;
  }

  selectCard(card: Card): void {
    cardStore.setCard(card);
  }

  selectFirstCard(): void {
    const firstCard = this.cards[0];
    this.selectCard(firstCard);
  }

  async created() {
    await cardStore.fetchCards();
    this.selectFirstCard();
  }
}
</script>

<style scoped>
</style>
