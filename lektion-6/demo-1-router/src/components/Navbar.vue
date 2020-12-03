<template>
  <nav class="d-flex">
    <h1>LOGO</h1>
    <ul class="d-flex">
      <li><router-link class="link" to="/" exact>Home</router-link></li>
      <li><router-link class="link" to="/about" exact>About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: #002222;
    color: #fff;
  }
  li {
    list-style: none;
  }
  .link {
    text-decoration: none;
    color: #fff;
    padding: 1rem;
    display: inline-block;
  }
  .link:hover {
    background-color: rgba(0, 0, 0, 0.37);
  }
  .router-link-active {
    text-decoration: underline;
  }
</style>