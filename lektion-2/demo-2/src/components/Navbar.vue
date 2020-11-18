<template>
  <nav>
      <h1>Hello World</h1>
      <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'

}
</script>

<style scoped>
nav {
    background-color: #8348c7;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
}
ul {
    display: flex;
    list-style: none;
}
a {
    color: #000;
    text-decoration: none;
    padding: 1rem;
}
a:hover {
    background: rgba(0, 0, 0, 0.13);
}

</style>