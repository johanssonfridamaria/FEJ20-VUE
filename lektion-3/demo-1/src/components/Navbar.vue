<template>
  <nav>
        <h1>Hello World</h1>
        <ul v-if="active">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
        </ul>
        <ul v-else>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
      </ul>
  </nav>
</template>

<script>
export default {
    props: ['active']

}
</script>

<style scoped>
nav {
    background-color: #042a2a;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
ul {
    list-style: none;
    display: flex;
}
a {
    color: #fff;
    text-decoration: none;
    padding: 1.5rem;
    display: inline-block;
}
a:hover {
    background: rgba(0, 0, 0, 0.157);
}
</style>