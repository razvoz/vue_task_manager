<template>
  <div>
    <h1 class="mb-5">Задачи</h1>
    
    <div class="d-flex justify-content-end">
      <div class="btn btn-primary mb-3" @click="openModal">Новая задача</div>
    </div>

    <table 
      v-if="hasTodos"
      class="table"
    >
      <tr class="table-active">
        <th>Название задачи</th>
        <th>Статус</th>
        <th>Осталось дней</th>
        <th>Завершить</th>
        <th>Удалить</th>
      </tr>
      <tr
        v-for="(item, idx) in getTodos"
        :key="idx"
        :class="{
          'table-success': item.isComplete
        }"
      >
        <td width="40%">
          {{ item.title }}
        </td>
        <td width="20%">
          {{ item.isComplete ? 'Завершена' : 'В работе' }}
        </td>
        <td width="20%">
          {{ getDaysForComplete(item.creationDate, item.endDate) }}
        </td>
        <td width="10%">
          <div 
            class="btn btn-outline-success"
            @click="changeTodoStatus(idx)"
          >
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            </svg>            
          </div>
        </td>
        <td width="10%">
          <div 
            class="btn btn-outline-danger" 
            @click="deleteTodo(idx)"
          >
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>            
          </div>
        </td>
      </tr>
    </table>

    <div 
      v-if="isSecondButtonShown"
      class="d-flex justify-content-end"
    >
      <div class="btn btn-primary mb-3" @click="openModal">Новая задача</div>
    </div>    

    <AddTodo v-if="opened" @close="closeModal" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AddTodo from '@/components/Todos/AddTodo'

export default {
  components: {
    AddTodo
  },
  data () {
    return {
      opened: false
    }
  },
  computed: {
    ...mapGetters([
      'getTodos'
    ]),
    hasTodos () {
      return this.getTodos.length
    },
    isSecondButtonShown () {
      return this.getTodos.length >= 5
    }
  },
  methods: {
    ...mapActions([
      'createTodo',
      'changeTodoStatus',
      'deleteTodo'
    ]),
    openModal () {
      this.opened = !this.opened

      this.$emit('modalOpened', true)
    },
    closeModal () {
      this.opened = !this.opened

      this.$emit('modalOpened', false)
    },
    getDaysForComplete (startDate, endDate) {
      const start = new Date(startDate).getTime()
      const end = new Date(endDate).getTime()
      const diff = end - start

      const result = Math.ceil(diff / (1000 * 3600 * 24))
      
      return result ? result : ''
    }    
  }
}
</script>
