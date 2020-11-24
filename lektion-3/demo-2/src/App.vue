<template>
  <div>
    <names :names="names" />
    <loop :names="names" />
    <users :users="users" />
    <objects :users="users" />
  </div>
</template>

<script>
import Names from './components/Names'
import Loop from './components/Loop'
import Users from './components/Users'
import Objects from './components/Objects'

export default {
  name: 'App',
  components: {
    Names,
    Loop,
    Users,
    Objects
  },
  data() {
    return {
      names: ['Joakim', 'Jeanette', 'Liam', 'William', 'Jack', 'Colin', 'Vince'],
      users: [
        {id: 1, name: 'Joakim', age: 33},
        {id: 2, name: 'Jeanette', age: 33},
        {id: 3, name: 'Liam', age: 15}
      ]
    }
  }
}
</script>

<style>

</style>
