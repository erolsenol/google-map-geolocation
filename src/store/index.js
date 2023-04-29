import { createStore } from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'

// Create a new store instance.
const store = createStore({ state, mutations, actions })

export default store
