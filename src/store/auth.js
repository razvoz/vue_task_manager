import router from "../router"

export default {
  state: {
    user: {
      login: '',
      password: '',
      auth: false
    }
  },
  getters: {
    getUser (state) {
      return state.user
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signin ({ commit }, userObj) {
      localStorage.setItem('session', JSON.stringify(userObj))

      commit('setUser', {
        ...userObj,
        auth: true
      })

      router.push('/')
    },
    signout ({ commit }) {
      localStorage.removeItem('session')

      commit('setUser', {})      

      router.push('/login')
    },
    getSession ({ commit }) {
      const session = JSON.parse(localStorage.getItem('session'))

      if (session) {
        commit('setUser', {
          ...session,
          auth: true
        })        
      }
    }    
  }
}
