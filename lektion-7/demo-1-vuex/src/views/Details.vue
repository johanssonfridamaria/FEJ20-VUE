<template>
  <div class="card">
    <h1>{{ product[0].name }}</h1>
    <p>id: {{ product[0].id }}</p>
    <h3>PRICE: {{ product[0].price }}</h3>
    <h3>PRICE + TAX: {{ product[0].taxPrice }}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.$route.params.id)
  }
}
</script>

<style scoped>
  .card {
    width: 80%;
    margin: 2rem auto;
    border: 1px solid #4b4b4b;
    border-radius: 10px;
    padding: 1rem;
    min-height: 50vh;
  }
</style>