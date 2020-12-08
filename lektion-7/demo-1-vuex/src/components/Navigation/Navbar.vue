<template>
  <nav>
    <router-link to="/" class="logo" exact>LOGO</router-link>
    <ul>
      <li><router-link to="/" class="link" exact>Home</router-link></li>
      <li><router-link to="/about" class="link" exact>About</router-link></li>
      <li><router-link to="/products" class="link" exact>Products</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background: #201d1d;
    color: #fff;
  }
  .logo {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
  }
  ul {
    display: flex;
  }
  li {
    list-style: none;
  }
  .link {
    color: #fff;
    text-decoration: none;
    padding: 1.5rem 1rem;
    display: inline-block;
    position: relative;
  }
  .link:hover {
    color: #a5a5a5;
  }
  .link.router-link-active::after {
    content: '';
    position: absolute;
    border-bottom: 2px solid #00fdfd;
    left: 1rem;
    bottom: 1.2rem;
    right: 1.7rem;
  }
</style>