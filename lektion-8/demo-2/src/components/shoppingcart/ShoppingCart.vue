<template>
  <div >
    <shoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" :class="{'border': checkout}" />

    <div v-if="shoppingCart.length < 1">

      <div class="p-2 d-flex justify-content-center align-items-center">
        <div class="d-flex align-items-center">
          Din kundvagn är tom.
        </div>
      </div>

      <div class="dropdown-divider"></div>
    </div>

    <div class="p-2 d-flex justify-content-between align-items-center">
      <div class="ml-2">
        <div class="total-price">
          Totalt: <span class="ml-1">{{ shoppingCartTotal }} SEK</span>
        </div>
        <small class="text-muted">inkl. moms</small>
      </div>
      <button v-if="checkout" @click="order" class="btn btn-success">Lägg Order</button>
      <button v-else @click="onClick" class="btn btn-default">Gå till Kassan</button>
    </div>



  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
  props: ['checkout'], //kommer från Checkout.vue
  components: {
    ShoppingCartProduct
  },
  methods: {
    onClick() {
      this.$router.push('/checkout')
    },
    order() {
      console.log('Order skickad!', this.shoppingCart)
    }
  },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
  }

}
</script>

<style>

</style>