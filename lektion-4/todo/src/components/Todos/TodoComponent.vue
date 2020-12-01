<template>
  <div>
    <div class="d-flex justify-content-between align-items-center border p-2 mt-1 bg-white">
      <p class="m-0" :class="{'done': todo.completed }" @click="update(todo._id, !todo.completed)">{{ todo.title }}</p>
      <button class="btn btn-danger px-3" @click="$emit('delete-todo', todo._id)">X</button>
    </div>
  </div>
</template>

<script>
export default {
    props: ['todo'],
    data() {
      return {
      }
    },
    methods: {
      // complete() {
      //   this.completed = !this.completed
      // },
      update(id, _completed) {
        fetch(`http://localhost:9999/api/todos/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          completed: _completed
        })
      })
      .then(res => res.json())
      .then(() => this.$emit('update'))
      }
    }

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