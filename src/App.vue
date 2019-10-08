<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline">
        <img src="@/assets/chatpot-logo-with-typo-medium.png" class="logo-image">
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>About</span>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
});
</script>

<style scoped>
.logo-image {
  height: 30px;
  width: 147px;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

html, body {
  font-family: 'Roboto', sans-serif;
}
#app {
  font-family: 'Roboto', sans-serif;
}
</style>