<template>
  <div class="transaction-item">
    <span>{{ transaction.description }}</span>
    <span>{{ transaction.amount }} &nbsp; {{currency}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import { Transaction } from '@/ApiClient/data/model/Transaction';

@Component
export default class TransactionItemComponent extends Vue {
  @Prop() transaction!: Transaction;
  @Prop() currency!: string;
}
</script>

<style scoped lang="scss">
.transaction-item {
  width: 100%;
  min-height: 100px;
  margin-bottom: 24px;
  padding: 24px 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
