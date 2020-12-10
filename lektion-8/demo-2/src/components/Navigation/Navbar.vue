<template>
  <!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <i class="fab fa-shopware"></i> shopware.se
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
      aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/news" class="nav-link">New Arrivals</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About Us</router-link>
        </li>

      </ul>

      <ul class="navbar-nav ml-auto nav-flex-icons">
        
        <!-- Shopping Cart -->
        <li class="nav-item dropdown">
          <a class="nav-link mr-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           0 <i class="fas fa-shopping-cart"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-default">
            SHOPPINGCART
          </div>
        </li>

        <!-- User settings -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user"></i>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-default">
            USER SETTINGS
          </div>
        </li>


      </ul>
    </div>
  </div>
</nav>
<!--/.Navbar -->
</template>

<script>
export default {

}
</script>

<style>

</style>