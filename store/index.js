import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  siteInfo: [],
});

export const mutations = {
  SET_INFO(state, data) {
    state.siteInfo = data
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSiteInfo')
  },
  getSiteInfo({ state, commit }) {
    const info = require('~/content/setup/info.json');
    commit('SET_INFO', info)
  }
};
