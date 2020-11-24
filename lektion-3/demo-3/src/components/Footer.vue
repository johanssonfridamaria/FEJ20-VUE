<template>
  <footer>
      <h3>copyright 2020 {{ title }}</h3>
  </footer>
</template>

<script>
export default {
    props: ['title']

}
</script>

<style scoped>
    footer {
        background-color: #0089b3;
        padding: 2rem;
    }
</style>