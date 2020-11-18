<template>
  <div>
    <navbar />
    <div class="output container">
      <h2 class="mt-3">{{ message }}</h2>

      <functions class="mt-3" />
      <twoway class="mt-3" />
      <computed class="mt-3" />

    </div>
    <app-footer msg="message" />
    <app-footer v-bind:msg="message" />
    <app-footer :msg="message" />
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import appFooter from './components/Footer'
import Functions from './components/Functions'
import Twoway from './components/Twoway'
import Computed from './components/Computed'

export default {
  name: 'App',
  components: {
    Navbar,
    appFooter,
    Functions,
    Twoway,
    Computed
  },
  data() {
    return {
      message: 'Ett meddelande från våran data!!!!!'
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.output {
  min-height: 500px;
}
.container {
  width: 80%;
  margin: auto;
}
.mt-3 {
  margin-top: 3rem;
}

</style>
