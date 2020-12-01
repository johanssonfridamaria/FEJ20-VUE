<template>
  <div class="m-3 mt-5">
    <button class="btn m-0 z-depth-0" :class="{'btn-primary': create, 'btn-outline-primary': !create}" @click="component = 'CreatePost'">Create</button>
    <button class="btn m-0 z-depth-0" :class="{'btn-primary': view, 'btn-outline-primary': !view}" @click="component = 'ViewPosts'">View</button>
    
    <div class="border border-primary mt-0 p-3">
      <div class="container">
        <keep-alive>
          <component :is="component" @new-post="posts.push($event)" v-bind:posts="posts" />
        </keep-alive>
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
      component: 'CreatePost',
      posts: [],
      create: true,
      view: false
    }
  },
  watch: {
    component: function() {
      if(this.component == 'CreatePost') {
        this.create = true
        this.view = false
      } else {
        this.create = false
        this.view = true
      }
    }
  }
}
</script>

<style>

</style>
