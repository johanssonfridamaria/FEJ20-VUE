<template>
  <div>
    <shoppingCart :checkout="true" />
  </div>
</template>

<script>
import ShoppingCart from '../components/shoppingcart/ShoppingCart'
export default {
  components: {
    ShoppingCart
  }
}
</script>

<style>

</style>