<template>
  <div>
    <navbar />
    <div class="container">
      <user />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import User from './components/User'

export default {
  name: 'App',
  components: {
    Navbar,
    User
  }
}
</script>

<style>

</style>
