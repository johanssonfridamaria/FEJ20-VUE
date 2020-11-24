<template>
  <div v-if="users.length">
      <div v-for="user in users" :key="user.id">
          <h3>Name: {{ user.name }}</h3>
          <p>Age: {{ user.age }}</p>
      </div>
  </div>
  <div v-else>
      <h3>No users registered</h3>
  </div>
</template>

<script>

export default {
    props: ['users'],


}
</script>

<style>

</style>