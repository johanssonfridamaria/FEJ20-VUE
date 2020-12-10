<template>
  <div v-cloak>
    <div class="container mt-5">
      <div class="border rounded p-5">
        <h1 class="text-center border-bottom mb-4 pb-4">{{ post.title }}</h1>
        <p class="text-center">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['getPostById'])
  },
  computed: {
    ...mapGetters(['post'])
  },
  created() {
    this.getPostById(this.$route.params.id)
  }
}
</script>

<style>
[v-cloak]{display: none;}
</style>