import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  allPages: [],
  siteInfo: [],
});

export const mutations = {
  SET_PAGES(state, data) {
    state.allPages = data
  },
  SET_INFO(state, data) {
    state.siteInfo = data
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSiteInfo')
    await dispatch('getPages')
  },
  async getPages({ state, commit }) {
    const context = await require.context('~/content/pages/', false, /\.json$/);

    const pages = await context.keys().map(key => ({
      ...context(key),
      _path: `/page/${key.replace('.json', '').replace('./', '')}`
    }));

    commit('SET_PAGES', pages)
  },
  getSiteInfo({ state, commit }) {
    const info = require('~/content/setup/info.json');
    commit('SET_INFO', info)
  }
};
