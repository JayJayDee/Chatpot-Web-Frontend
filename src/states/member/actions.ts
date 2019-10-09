import { ActionTree } from 'vuex';
import { MemberState } from './types';
import { RootState } from '../types';

export const actions: ActionTree<MemberState, RootState> = {
  tryAutoLogin({ commit }): any {
    commit('profileLoaded', {});
  }
};