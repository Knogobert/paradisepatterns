import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  siteInfo: [],
  links: [],
});

export const mutations = {
  SET_INFO(state, data) {
    state.siteInfo = data
  },
  SET_LINKS(state, data) {
    state.links = data
  },
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getSiteInfo');
    await dispatch('getLinks');
  },
  utilGetFiles(files) {
    return files.keys().map((key) => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  },
  getSiteInfo({ state, commit }) {
    const info = require('~/content/setup/info.json');
    commit('SET_INFO', info)
  },
  async getLinks({ state, commit }) {
    let linkFiles = await require.context('~/content/links/', false, /\.json$/)
    commit('SET_LINKS', actions.utilGetFiles(linkFiles))
  },
};
