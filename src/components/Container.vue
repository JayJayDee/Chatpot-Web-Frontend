<template>
  <div class="md-layout">
    <img :src="topLeftLogo" />
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContainerScene extends Vue {
  public topLeftLogo = require('@/assets/chatpot-logo-with-typo-medium.png');
}
</script>

<style scoped>
</style>