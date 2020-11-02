import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth'
import todos from './todos'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth, 
    todos
  }
})

export default store