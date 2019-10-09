import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { MemberState } from './types';
import { RootState } from '../types';

export const state: MemberState = {
  loggedIn: false
};

const namespaced = true;

export const member: Module<MemberState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};