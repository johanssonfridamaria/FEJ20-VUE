<template>
  <div>
    <navbar />
    <div class="container mt-5">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './components/Navigation/Navbar'
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style>

</style>