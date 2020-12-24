<template>
  <div class="card-item" role="button" :aria-pressed="isSelected"
       :class="cardType"
       @click="onSelectedCard()">
    <p>{{card.description}}</p>
    <p>Card Id: <strong>{{ card.id }}</strong></p>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component';
import Vue from 'vue';
import { Prop } from 'vue-property-decorator';
import { Card } from '@/ApiClient/data/model/Card';
import Utils from '@/utils/utils';

@Component
export default class CardItemComponent extends Vue {
  @Prop() card!: Card;
  @Prop() isSelected!: boolean;

  get cardType(): string {
    return Utils.getCardType(this.card.id);
  }

  onSelectedCard(): void {
    this.$emit('selected-card', this.card);
  }
}
</script>

<style scoped lang="scss">
.card-item {
  width: 100%;
  min-height: 250px;
  padding: 24px 48px;
  border: none;
  border-radius: 12px;
  text-align: left;
  outline: none;
  opacity: .8;

  &[aria-pressed="true"] {
    opacity: 1;
    box-shadow: 0 0 10px transparentize(black, .7);
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    width: 48%;
  }
  // Large devices and above
  @media (min-width: 992px) {
    width: 44%;
  }
}
</style>
