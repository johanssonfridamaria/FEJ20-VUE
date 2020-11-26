<template>
  <div>
    <div class="d-flex justify-content-between align-items-center border p-2 mt-1 bg-white">
      <p class="m-0" :class="{'done': todo.completed }" @click="todo.completed = !todo.completed">{{ todo.title }}</p>
      <button class="btn btn-danger px-3" @click="$emit('delete-todo', todo._id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
    props: ['todo']

}
</script>

<style scoped>
.done {
  text-decoration: line-through;
  color: #bbb;
}
p {
  cursor: pointer;
}

</style>