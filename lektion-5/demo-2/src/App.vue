<template>
  <div class="m-3 mt-5">
    <button class="btn m-0 z-depth-0" :class="{'btn-primary': createPost, 'btn-outline-primary': !createPost}" @click="component = 'CreatePost'">Create</button>
    <button class="btn m-0 z-depth-0" :class="{'btn-primary': viewPosts, 'btn-outline-primary': !viewPosts}" @click="component = 'ViewPosts'">View</button>
    
    <div class="border border-primary mt-0 p-3">
      <div class="container">
        <component :is="component" @new-post="posts.push($event)" v-bind:posts="posts" />
      </div>
    </div>

  </div>
</template>

<script>
import CreatePost from './components/CreatePost'
import ViewPosts from './components/ViewPosts'

export default {
  name: 'App',
  components: {
    CreatePost,
    ViewPosts
  },
  data() {
    return {
      component: 'ViewPosts',
      posts: [],
      createPost: false,
      viewPosts: false
    }
  }
}
</script>

<style>

</style>
