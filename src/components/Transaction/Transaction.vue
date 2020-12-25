<template>
  <div class="row mt-5">
    <div class="col-12 d-flex flex-column">
      <template v-if="transactions.length">
      <TransactionItem v-for="transaction in transactions" v-bind:key="transaction.id"
                       :transaction="transaction" :currency="currency" :class="cardType"/>
      </template>
      <p v-else>No transactions found</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { cardTransactionStore, cardStore } from '@/store';
import { Transaction } from '@/ApiClient/data/model/Transaction';
import TransactionItem from '@/components/Transaction/TransactionItem.vue';
import Utils from '@/utils/utils';
import { CurrencyCountry } from '@/enum/transaction';

@Component({
  components: {
    TransactionItem,
  },
})
export default class TransactionComponent extends Vue {
  private cardTransactionStore = cardTransactionStore;
  private cardStore = cardStore;
  currency = Utils.getCurrency(CurrencyCountry.Europe);

  get transactions(): Transaction[] | [] {
    return this.cardTransactionStore.transactions;
  }

  get cardType(): string {
    return Utils.getCardType(this.cardStore?.selectedCard?.id || '');
  }

  async created() {
    await this.cardTransactionStore.fetchCardTransactions();
  }
}
</script>

<style scoped>
</style>
