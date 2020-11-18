<template>
  <footer>
      <h1>{{ msg }}</h1>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        msg: String
    }
    // props: ['msg']
}
</script>

<style scoped>
footer {
    background-color: #8348c7;
    padding: 3rem;
}

</style>