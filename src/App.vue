<template>
  <div class="container">
    <Header />
    <router-view @modalOpened="isModalOpened = !isModalOpened"/>

    <div v-if="isModalOpened" class="modal-backdrop show"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/TheHeader'

export default {
  name: 'App',
  components: {
    Header
  },
  data () {
    return {
      isModalOpened: false
    }
  },
  methods: {
    ...mapActions([
      'loadTodos'
    ])
  },
  created () {
    this.$store.dispatch('loadTodos')
  }
}
</script>
