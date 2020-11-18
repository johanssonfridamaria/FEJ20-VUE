<template>
  <div>
      <button v-on:click="a++">Lägg till på A</button>
      <button v-on:click="b++">Lägg till på B</button>
      <p>Nummret är {{ number }}</p>
      <p class="mt-3">A = {{ a }}</p>
      <p>B = {{ b }}</p>
      <br>
      <p>Nummret + A = {{ addToA }}</p>
      <p>Nummret + B = {{ addToB }}</p>

  </div>
</template>

<script>
export default {
    name: 'Computed',
    data() {
        return {
            number: 30,
            a: 0,
            b: 0
        }
    },
    methods: {
        // addToA: function() {
        //     console.log('Ökade A')
        //     return this.a + this.number
        // },
        // addToB() {
        //     console.log('Ökade B')
        //     return this.b + this.number
        // }
    },
    computed: {
        addToA: function() {
            console.log('Ökade A')
            return this.a + this.number
        },
        addToB() {
            console.log('Ökade B')
            return this.b + this.number
        }
    }
}
</script>

<style scoped>
/* .a {
    margin-top: 3rem;
} */
</style>