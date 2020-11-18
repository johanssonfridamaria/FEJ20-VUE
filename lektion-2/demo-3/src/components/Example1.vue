<template>
  <div>
      <h2 v-bind:class="{green: true, red: true}">EN TEXT</h2>
      <h2 :class="{green: true}">EN TEXT</h2>
      <div @click="available = !available" :class="{className: available}">
          <span>Joakim</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Example1',
    data() {
        return {
            available: false
        }
    }

}
</script>

<style>
span {
    background-color: red;
    margin-top: 1rem;
    display: inline-block;
    padding: 1rem;
    color: #fff;
    cursor: pointer;
}
.className span {
    background-color: green;
}

</style>