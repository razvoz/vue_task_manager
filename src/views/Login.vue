<template>
  <div>
    <h1 class="mb-5">Войдите в систему</h1>
    <div class="form-group">
      <label for="inputLogin">Логин</label>
      <input
        id="inputLogin"
        ref="inputLogin"
        v-model="login"
        :class="{
          'form-control': true,
          'is-valid': login
        }"
        type="text"
        placeholder="Укажите ваш логин"
      >
    </div>
    <div class="form-group">
      <label for="inputPassword">Пароль</label>
      <input
        id="inputPassword"
        ref="inputPassword"
        v-model="password"
        :class="{
          'form-control': true,
          'is-valid': password
        }"
        type="password"
        placeholder="Введите ваш пароль"
      >
    </div>    
    <div class="btn btn-primary" @click="userLogin()">Войти</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    ...mapActions([
      'signin'
    ]),
    userLogin () {
      if (!this.login) {
        this.$refs.inputLogin.classList.add('is-invalid')
      }

      if (!this.password) {
        this.$refs.inputPassword.classList.add('is-invalid')
      } 
      
      if (this.login && this.password) {
        const userObj = {
          login: this.login,
          password: this.password
        }

        this.signin(userObj)
      }
    }
  }
}
</script>