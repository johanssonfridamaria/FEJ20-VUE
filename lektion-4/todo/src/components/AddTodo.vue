<template>
  <div class="border-bottom bg-white">
    <form class="py-5 container" @submit.prevent="addTodo">
      <div class="form-row">

        <div class="input-group col-8">
          <input type="text" class="form-control" :class="{'is-invalid': error}" placeholder="Add todo..." v-model="title">
          <div class="input-group-append">
            <button class="btn btn-info">ADD</button>  
          </div>
          <div class="invalid-feedback"> Please enter what todo</div>  
        </div>

        <select class="form-control col-4" v-model="select" @change="$emit('sort', select)">
          <option value="">Show all</option>
          <option value="false">Show uncompleted</option>
          <option value="true">Show completed</option>
        </select>

      </div> 
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      error: false,
      select: ''
    }
  },
  methods: {
    addTodo() {
      if(this.title !== '') {
        this.$emit('add-todo', this.title)
        this.title = ''
        this.error = false
      } else {
        this.error = true
      }
    }
  }

}
</script>

<style>

</style>