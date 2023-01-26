// import Vue from 'vue'
// import Vuex from 'vuex'
// // import State from './state'
// // import getters from './getters'
// // import mutations from './mutations'
// // import actions from './actions'
// import store from './store3'
//
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   // state: new State(),
//   // getters,
//   // mutations,
//   // actions,
//   modules: {
//     store
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'
import store3 from "@/store/store3";

Vue.use(Vuex)
export default new Vuex.Store({ modules: { store3 } })
