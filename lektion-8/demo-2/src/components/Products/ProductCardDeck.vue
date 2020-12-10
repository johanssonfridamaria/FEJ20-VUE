<template>
  <div class="row row-cols-1 row-cols-md-3">
    <productCard v-for="product in products" :key="product.id" :product="product" />
    <!-- <productCard />
    <productCard />
    <productCard /> -->

  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './ProductCard'
export default {
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>