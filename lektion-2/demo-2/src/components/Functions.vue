<template>
  <div>
      <!-- <button v-on:click="sum++">Add</button>
      <button @click="sum--">Subtract</button> -->

      <button v-on:click="add(2)">Add</button>
      <button @click="sub">Subtract</button>

      <div>sum: {{ sum }}</div>
  </div>
</template>

<script>
export default {
    name: 'Functions',
    data() {
        return {
            sum: 32
        }
    },
    methods: {
        add(amount = 1){
            this.sum += amount
        },
        sub(){
            this.sum --
        }
    }
}
</script>

<style>

</style>