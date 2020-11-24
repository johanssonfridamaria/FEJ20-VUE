<template>
  <div>
      <p v-for="(name, index) in names" :key="index" >{{ index }} {{ name }} </p>
  </div>
</template>

<script>
    // names.forEach(name => body.innerHTML += <p>name</p>)
export default {
    props: ['names']
}
</script>

<style>

</style>