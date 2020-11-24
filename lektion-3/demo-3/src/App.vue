<template>
  <div>
    <navbar :title="title" v-on:change-title="change($event)" />
    <div class="container">
      <users :users="users" />
      <users2 :users="users" />
    </div>
    <appFooter :title="title" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import appFooter from './components/Footer'
import Users from './components/Users'
import Users2 from './components/Users2'

export default {
  name: 'App',
  components: {
    Navbar,
    appFooter,
    Users,
    Users2
  },
  data() {
    return {
      title: 'FRONTEND2020',
      users: [
        {id:1, name: 'Joakim', age: 33, email:'joakim@mail.com'},
        {id:2, name: 'Jeanette', age: 33, email:'jeanette@mail.com'},
        {id:3, name: 'Liam', age: 15, email:'Liam@mail.com'},
        {id:4, name: 'Wille', age: 9, email:'wille@mail.com'}
      ]
    }
  },
  methods: {
    change(newTitle) {
      this.title = newTitle
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
.space {
  min-height: 300px;
}
</style>
