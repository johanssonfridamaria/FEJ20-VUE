<template>
  <div>
    <appNavbar />
    <hero />
    <testamonials />
    <app-footer />
  </div> 
</template>

<script>
import Navbar from './components/navigation/Navbar'
import Footer from './components/navigation/Footer'
import Hero from './components/Hero'
import Testamonials from './components/testamonials/Testamonials'

export default {
  name: 'App',
  components: {
    appNavbar: Navbar,
    appFooter: Footer,
    hero: Hero,
    Testamonials
  }
}
</script>

<style>

</style>
