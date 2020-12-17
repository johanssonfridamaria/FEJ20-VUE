<template>
  <div class="col mb-4">
    <div class="card h-100" :class="{ 'bg-dark': manage, 'text-white': manage }">
      <!--Card image-->
      <div class="view overlay">
        <img class="card-img-top" :src="product.image"
          alt="Card image cap">
        <router-link :to="{ name: 'ProductDetails', params: { id: product._id } }">
          <div class="mask rgba-white-slight"></div>
        </router-link>
      </div>

      <!--Card content-->
      <div class="card-body">

        <!--Title-->
        <h4 class="card-title">{{ product.name }}</h4>
        <p class="mb-3">{{ product.price }} SEK</p>
        <!--Text-->
        <p class="card-text">{{ product.short }}</p>
        <!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
        <router-link v-if="manage" :to="{ name: 'ManageProduct', params: { id: product._id } }" type="button" class="btn btn-light-blue btn-md">Manage Product</router-link>
        <router-link v-else :to="{ name: 'ProductDetails', params: { id: product._id } }" type="button" class="btn btn-light-blue btn-md">Read more</router-link>

      </div>

    </div>
    <!-- Card -->
  </div>
</template>

<script>
export default {
  props: ['product', 'manage']

}
</script>

<style>

</style>