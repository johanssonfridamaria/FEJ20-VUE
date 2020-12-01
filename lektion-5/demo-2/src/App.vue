<template>
  <div class="mt-5">
    <div class="container">
      <component :is="component" />
    </div>
  </div>
</template>

<script>
import CreatePost from './components/CreatePost'

export default {
  name: 'App',
  components: {
    CreatePost
  },
  data() {
    return {
      component: 'CreatePost'
    }
  }
}
</script>

<style>

</style>
