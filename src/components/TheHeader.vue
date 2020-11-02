<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <div class="d-flex navbar-nav">
      <div class="nav-item">
        <router-link to="/" class="nav-link">Главная</router-link>
      </div>
      <div 
        v-if="isUserAuth"
        class="nav-item"
      >
        <router-link to="/todos" class="nav-link">Задачи</router-link>
      </div>
    </div>
    <div 
      v-if="isUserAuth"
      @click="signout" 
      class="btn btn-secondary btn-sm ml-auto"
    >Выйти</div>
  </nav>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getUser'
    ]),
    isUserAuth () {
      return this.getUser.auth
    }
  },
  methods: {
    ...mapActions([
      'signout'
    ])
  }
}
</script>
