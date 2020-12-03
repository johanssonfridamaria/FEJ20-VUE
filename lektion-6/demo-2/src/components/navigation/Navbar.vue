<template>
  <!--Navbar -->
<nav class="mb-1 navbar navbar-expand-lg navbar-dark info-color">
  <router-link class="navbar-brand" to="/">Meetingroom</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
    aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent-4">
    <ul class="navbar-nav ml-auto">

      <li class="nav-item">
        <router-link class="nav-link" to="/booking">Booking</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>

    </ul>
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