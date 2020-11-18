<template>
  <div>
    <navbar />
    <div class="container">
      <example-1 />
      <example-2 class="mt-2" />
      <example-3 class="mt-2" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Example1 from './components/Example1'
import Example2 from './components/Example2'
import Example3 from './components/Example3'

export default {
  name: 'app',
  components: {
    Navbar,
    Example1,
    Example2,
    Example3
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: auto;
}
.mt-2 {
  margin-top: 2rem;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>