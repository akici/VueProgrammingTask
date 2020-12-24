<template>
  <div id="app">
    <div class="container">
      <Card />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '@/components/Card/Card.vue';

@Component({
  components: {
    Card,
  },
})
export default class App extends Vue {}
</script>
