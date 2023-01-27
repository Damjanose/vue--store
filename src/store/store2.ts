import { StoreOptions } from 'vuex'
export const store2: StoreOptions<{ homeValue: string | null; insertValue: string | null }> = {
  state: {
    homeValue: JSON.parse(localStorage.getItem('home page value') as string),
    insertValue: JSON.parse(localStorage.getItem('insert page value') as string),
  },
  mutations: {
    UPDATE_HOME_VALUE(state) {
      state.homeValue = '1'
    },
    UPDATE_INSERT_VALUE(state) {
      state.insertValue = '4'
    },
  },
  actions: {
    updateHomeValue({ getters, commit }) {
      localStorage.setItem('home page value', 'true')
      if (!getters.isHomeUpdated) commit('UPDATE_HOME_VALUE')
    },
    updateInsertValue({ getters, commit }) {
      localStorage.setItem('insert page value', 'true')
      if (!getters.isInsertUpdated) commit('UPDATE_INSERT_VALUE')
    },
  },
  getters: {
    isHomeUpdated({ homeValue }) {
      return homeValue
    },
    isInsertUpdated({ insertValue }) {
      return insertValue
    },
  },
}

export default store2
