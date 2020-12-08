<template>
  <div class="products">
    <aside>
      <div class="buttons">
        <button @click="comp = 'Grid'"><i class="fas fa-th-large"></i></button>
        <button @click="comp = 'List'"><i class="fas fa-list"></i></button>
      </div>
      <form>
        <div>
          <input type="text" placeholder="Search...">
        </div>
        <div>
          <a href="#">Filter</a>
        </div>
      </form>
    </aside>
    <div class="content">
      <component :is="comp" />
    </div>
  </div>
</template>

<script>
import Grid from '../components/Products/Grid'
import List from '../components/Products/List'
export default {
  name: 'products',
  components: {
    Grid,
    List
  },
  data() {
    return {
      comp: 'Grid'
    }
  }
}
</script>

<style scoped>
.products {
  display: flex;
}
aside {
  flex: 2;
  background: #424242;
  min-height: calc(100vh - 69px);
  padding: 2rem;
}
.content {
  flex: 10;
}
a {
  color: #fff;
}
.buttons button {
  padding: 0.2rem;
  margin-right: 0.5rem;
  cursor: pointer;
}

</style>