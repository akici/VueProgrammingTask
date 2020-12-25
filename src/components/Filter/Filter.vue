<template>
  <div class="row">
    <div class="col-12 mb-2">
      <label class="text-left w-100" for="amount-filter">Amount Filter</label>
      <input id="amount-filter" type="text" class="form-control" placeholder="Amount"
      v-model="keyword.amount" @keyup="updateKeyword" />
    </div>
    <div class="col-12 mt-2">
      <label class="text-left w-100" for="description-filter">Description Filter</label>
      <input id="description-filter" type="text" class="form-control" placeholder="Description"
             v-model="keyword.description" @keyup="updateKeyword" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { filterStore } from '@/store';
import { FilterKeyword } from '@/enum/filter';

@Component
export default class FiltersComponent extends Vue {
  get keyword(): FilterKeyword {
    return filterStore.keyword;
  }

  updateKeyword(): void {
    filterStore.updateKeyword(this.keyword);
  }
}
</script>

<style scoped lang="scss">
  input {
    height: auto;
    padding: 16px 24px;

    @media (min-width: 768px) {
      padding: 16px 48px;
    }
  }
</style>
