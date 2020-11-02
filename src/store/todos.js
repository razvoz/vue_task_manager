export default {
  state: {
    todos: []
  },
  getters: {
    getTodos (state) {
      return state.todos
    }
  },
  mutations: {
    setTodos (state, payload) {
      state.todos = payload
    },
  },
  actions: {
    createDemoTodos () {
      const todosObj = [
        {
          title: 'Приготовить обед',
          isComplete: false
        },
        {
          title: 'Сходить за продуктами',
          isComplete: false
        },
        {
          title: 'Прочитать "Войну и мир"',
          isComplete: false
        },
        {
          title: 'Сделать уроки',
          isComplete: false
        },
      ]

      localStorage.setItem('todos', JSON.stringify(todosObj))
    },
    loadTodos ({ commit }) {
      const todos = JSON.parse(localStorage.getItem('todos'))
      
      if (todos) {
        commit('setTodos', todos)
      }
    },
    createTodo ({ state, commit }, todoObj) {
      const todoCreationDate = new Date()
      const todoEndDate = new Date().addDays(todoObj.daysToComplete)
      
      const obj = {
        title: todoObj.title,
        creationDate: todoCreationDate,
        endDate: todoEndDate,
        isComplete: false
      }

      const newTodos = [obj, ...state.todos]

      commit('setTodos', newTodos)
      updateTodos(newTodos)
    },
    changeTodoStatus ({ state, commit }, idx) {
      const newTodos = state.todos
      newTodos[idx].isComplete = !newTodos[idx].isComplete

      commit('setTodos', newTodos)
      updateTodos(newTodos)
    },
    deleteTodo ({ state, commit }, idx) {
      const newTodos = [
        ...state.todos.slice(0, idx),
        ...state.todos.slice(idx + 1)
      ]

      commit('setTodos', newTodos)
      updateTodos(newTodos)
    }
  }
}

Date.prototype.addDays = function(d) {
  return new Date(this.valueOf() + 864E5 * d)
}

function updateTodos (todos) {
  localStorage.setItem('todos', JSON.stringify(todos))
}
