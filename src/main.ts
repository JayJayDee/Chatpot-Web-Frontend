import Vue from 'vue';
import App from './App.vue';
import store from './store';
import Vuetify from 'vuetify';

Vue.config.productionTip = false;
Vue.use(Vuetify);

// import 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/dist/vuetify.min.css';

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');