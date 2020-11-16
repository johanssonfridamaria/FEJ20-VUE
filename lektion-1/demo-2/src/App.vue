<template>
  <div>
    <navbar />
    <carousel />
    <div class="container my-5">
      <card-deck />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import CardDeck from './components/cards/CardDeck'

export default {
  name: 'App',
  components: {
    Navbar,
    Carousel,
    CardDeck
  }
}
</script>

<style>

</style>
