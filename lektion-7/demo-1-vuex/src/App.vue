<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navigation/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html, body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.btn {
  margin: 1rem 0 0 1rem;
  padding: .5rem .8rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #201d1d;
  color: #fff;
  cursor: pointer;
}
.btn:hover {
    box-shadow: 0 0 5px 0 #000;
}
.btn:active {
  background-color: #000;
  box-shadow: none;
}
</style>