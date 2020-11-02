<template>
  <div>
    <h1 class="mb-5">Здравствуйте, {{ getUser.login }}</h1>
    <p v-if="todos">Количество ваших задач {{ todos }}:</p>
    <ul class="mb-5">
      <li
        v-for="(item, idx) in getTodos"
        :key="idx"
      >
        {{ item.title }}
      </li>
    </ul>

    <router-link to="/todos" >Перейти к вашим задачам</router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getUser',
      'getTodos'
    ]),
    todos () {
      return this.getTodos.length
    }
  }
}
</script>