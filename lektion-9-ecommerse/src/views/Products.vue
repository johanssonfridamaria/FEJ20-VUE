<template>
  <div class="container mt-5">
    <productList />
  </div>
</template>

<script>
import ProductList from '../components/Products/ProductList'
export default {
  components: {
    ProductList
  }
  // data() {
  //   return {
  //     products: []
  //   }
  // },
  // methods: {
  //   getProducts() {
  //     this.axios.get('http://localhost:9999/api/products')
  //     .then(res => {
  //       this.products = res.data
  //     })
  //   }
  // },
  // created() {
  //   this.getProducts()
  // }
}
</script>

<style>

</style>