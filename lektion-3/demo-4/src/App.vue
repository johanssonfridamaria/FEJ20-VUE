<template>
  <div class="container mt-5">
    <div class="card-deck">
      <display :name="name" :age="age" :email="email" />
      <update :name="name" :age="age" :email="email" @update-user="update" />
    </div>
  </div>
</template>

<script>
import Display from './components/Display'
import Update from './components/Update'

export default {
  name: 'App',
  components: {
    Display,
    Update
  },
  data() {
    return {
      name: 'Joakim',
      age: 33,
      email: 'joakim.wahlstrom@mail.com'
    }
  },
  methods: {
    update(newUser) {
      this.name = newUser.name
      this.age = newUser.age
      this.email = newUser.email
    }
  }

}
</script>

<style>

</style>