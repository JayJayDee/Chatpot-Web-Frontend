import { GetterTree } from 'vuex';
import { MemberState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<MemberState, RootState> = {
  fullName(state): string {
    return '';
  }
};