<template>
  <div id="app">
    <div class="container">
      <Card />
      <Filters />
      <Transaction />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card/Card.vue';
import Transaction from '@/components/Transaction/Transaction.vue';
import Filters from '@/components/Filter/Filter.vue';

@Component({
  components: {
    Card,
    Transaction,
    Filters,
  },
})
export default class App extends Vue {}
</script>
