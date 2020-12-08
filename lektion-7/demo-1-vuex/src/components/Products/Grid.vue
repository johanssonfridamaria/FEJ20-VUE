<template>
  <div>
    <div class="grid">
      <product-card v-for="product in prodTax" :key="product.id" class="card" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  components: {
    ProductCard
  },
  data() {
    return {
      
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    prodTax() {
      // let taxedProducts = this.$store.state.products.map(product => {
      //   return {
      //     id: product.id,
      //     name: product.name + ' + tax',
      //     price: Math.round(product.price + product.price * 0.2)
      //   }
      // })
      // return taxedProducts
      return this.$store.getters.taxedProducts
    }
  }
}
</script>

<style scoped>
  .grid {
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
  .card {
    background: #005c50;
    color: #fff;
  }

</style>