<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="title-container">
        <img src="@/assets/chatpot-logo-with-typo-medium.png" class="logo-image">
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-bottom-navigation v-model="bottomNav" fixed>
      <v-btn value="recent">
        <span>Lounge</span>
        <v-icon>mdi-tea</v-icon>
      </v-btn>

      <v-btn value="favorites">
        <span>Chats</span>
        <v-icon>mdi-chat-processing</v-icon>
      </v-btn>

      <v-btn value="nearby">
        <span>Settings</span>
        <v-icon>mdi-settings</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App'
});
</script>

<style scoped>
.logo-image {
  height: 30px;
  width: 147px;
  margin-top: 5px;
}
.title-container {
  vertical-align: middle;
}
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
