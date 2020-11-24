<template>
  <div>
      <h2 v-if="todos.length">Yaaay, det finns todos att göra!</h2>
      <h2 v-else>Det finns inga todos, lägg till några vetja!</h2>
  </div>
</template>

<script>
export default {
    props: ['todos']
}
</script>

<style>

</style>