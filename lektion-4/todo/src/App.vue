<template>
  <div class="bg-light">
    <navbar />
    <addTodo @add-todo="add" @sort="sortTodos" />
    <div class="container">
      <todos v-bind:loading="loading" :value="sort" :todos="todos" @delete-todo="delTodo" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Todos from './components/Todos/Todos'
import AddTodo from './components/AddTodo'

// import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'app',
  components: {
    Navbar,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [],
      sort: '',
      loading: false
    }
  },
  methods: {
    delTodo(id) {
      // this.todos = this.todos.filter(todo => todo._id !== id)

      fetch(`http://localhost:9999/api/todos/${id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(() => this.fetchTodos())

    },
    add(_title) {
      // let todo = {
      //   _id: uuidv4(),
      //   title: _title,
      //   completed: false
      // }
      // this.todos.unshift(todo)

      fetch('http://localhost:9999/api/todos', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          title: _title
        })
      })
      .then(res => res.json())
      .then(() => this.fetchTodos())

    },
    sortTodos(val) {
      switch(val) {
        case 'false':
          this.sort = false
          break;
        case 'true':
          this.sort = true
          break;
        default:
          this.sort = ''
      }
    },
    fetchTodos() {
      this.loading = true
      fetch('http://localhost:9999/api/todos')
        .then(res => res.json())
        .then(data => {
          this.todos = data
          this.loading = false
        })
    }
  },
  created() {
    this.fetchTodos()
  }
}
</script>

<style>

</style>
