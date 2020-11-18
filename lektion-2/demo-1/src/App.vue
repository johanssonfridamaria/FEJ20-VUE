<template>
  <div>
    <hero />

    <div class="container mt-5">
      <div class="row">
        <signin class="col-5" />
        <div class="col-2"></div>
        <signup class="col-5" />
      </div>
    </div>

  </div>
</template>

<script>
import Hero from './components/Hero'
import Signin from './components/SignIn'
import Signup from './components/SingUp'

export default {
  name: 'App',
  components: {
    Hero,
    Signin,
    Signup
  }
}
</script>

<style>

</style>
