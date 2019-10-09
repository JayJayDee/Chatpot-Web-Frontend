import { MutationTree } from 'vuex';
import { MemberState } from './types';

export const mutations: MutationTree<MemberState> = {
  profileLoaded(state, payload: any) {
    console.log('!');
  },
  profileError(state) {
    console.log('!');
  }
};