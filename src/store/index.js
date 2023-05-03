import { createStore } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// Create a new store instance.
const store = createStore({ state, mutations, actions, getters })

export default store
