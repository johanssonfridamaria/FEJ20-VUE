<template>
  <div>
      <button class="btn btn-primary" :class="{'btn-active': active}" @click="toggle">TOGGLE</button>
      <div class="output" :class="computedClasses">
          <h2>EN TEXT</h2>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bg: false,
            text: false,
            active: false
        }
    },
    methods: {
        toggle() {
            this.bg = !this.bg
            this.text = !this.text
            this.active = !this.active
        }
    },
    computed: {
        computedClasses() {
            return {
                'bg-dark': this.bg,
                'text-white': this.text
            }
        }
    }

}
</script>

<style scoped>
.btn {
    background-color: transparent;
    border: none;
    border-radius: 10px;
    padding: 1rem 2rem;
    cursor: pointer;
    outline: none;
}
.btn-primary {
    background-color: #2b0735;
    color: #fff;
}
.btn-active {
    background-color: green;
    color: #fff;
}
.output {
    margin-top: 1rem;
    background-color: #f4f4f4;
    width: 300px;
    height: 300px;
    padding: 1rem;
}
.bg-dark {
    background-color: #333;
}
.text-white {
    color: #fff;
}
</style>