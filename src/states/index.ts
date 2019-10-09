import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { member } from './member';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    globalLoading: false
  },
  modules: {
    member
  }
};

export default new Vuex.Store<RootState>(store);