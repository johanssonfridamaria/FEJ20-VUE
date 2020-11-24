<template>
  <nav>
      <h1 @click="change">{{ title }}</h1>
  </nav>
</template>

<script>
export default {
    props: ['title'],
    methods: {
        change() {
            this.$emit('change-title', 'Hej')
        }
    }

}
</script>

<style scoped>
    nav {
        background-color: #0089b3;
        padding: 2rem;
    }

</style>