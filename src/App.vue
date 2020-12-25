<template>
  <div id="app">
    <div class="container">
      <Card />
      <Transaction />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card/Card.vue';
import Transaction from '@/components/Transaction/Transaction.vue';

@Component({
  components: {
    Card,
    Transaction,
  },
})
export default class App extends Vue {}
</script>
