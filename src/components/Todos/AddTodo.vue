<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Добавить задачу</h5>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="inputName">Название задачи</label>
            <input
              id="inputName"
              ref="inputTitle"
              v-model="title"
              :class="{
                'form-control': true,
                'is-valid': title
              }"
              type="text"
              placeholder="Введите название задачи"
            >
          </div>
          <div class="form-group">
            <label for="inputTime">Дней на задачу</label>
            <input
              id="inputTime"
              v-model="daysToComplete"
              :class="{
                'form-control': true,
              }"
              type="text"
              placeholder="Укажите количество дней до завершения задачи"
            >
          </div>  
        </div>
        <div class="modal-footer">
          <div id="buttonClose" class="btn btn-secondary" @click="close">Закрыть</div>
          <div id="buttonSubmit" class="btn btn-primary" @click="create()">Создать задачу</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '',
      daysToComplete: 0
    }
  },
  methods: {
    ...mapActions([
      'createTodo'
    ]),
    create () {
      if (this.title) {
        this.createTodo({
          title: this.title,
          daysToComplete: this.daysToComplete,
          todoCreateDate: new Date()
        })
        this.title = ''

        this.$emit('close')
      } else {
        this.$refs.inputTitle.classList.add('is-invalid')
      }
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>
  .modal {
    display: block;
  }
</style>