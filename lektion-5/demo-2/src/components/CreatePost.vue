<template>
  <div>
      <form class="border border-light p-5">

    <p class="h4 mb-4 text-center">Sign in</p>

    <label for="title">Title</label>
    <input type="text" id="title" class="form-control mb-4" v-model.lazy="blog.title">

    <label for="content">Content</label>
    <textarea id="content" class="form-control mb-4" v-model="blog.content"></textarea>

    <p>Categories</p>
    <div class="d-flex">

        <div class="custom-control custom-checkbox mb-4 mr-4">
            <input type="checkbox" class="custom-control-input" id="travel">
            <label class="custom-control-label" for="travel">Travel</label>
        </div>

        <div class="custom-control custom-checkbox mb-4 mr-4">
            <input type="checkbox" class="custom-control-input" id="food">
            <label class="custom-control-label" for="food">Food</label>
        </div>

        <div class="custom-control custom-checkbox mb-4 mr-4">
            <input type="checkbox" class="custom-control-input" id="computers">
            <label class="custom-control-label" for="computers">Computers</label>
        </div>

        <div class="custom-control custom-checkbox mb-4 mr-4">
            <input type="checkbox" class="custom-control-input" id="frontend">
            <label class="custom-control-label" for="frontend">Frontend</label>
        </div>

    </div>

    <label for="select">Author</label>
    <select class="browser-default custom-select mb-4" id="select">
        <option value="" disabled="" selected=""></option>
        <option v-for="(au, index) in authors" v-bind:key="index">{{ au }}</option>
    </select>

    <button class="btn btn-info btn-block my-4" type="submit">CREATE POST</button>

</form>

    <h1 class="mt-5 text-center">Preview</h1>
    <!-- Card -->
    <div class="card card-cascade">

    <!-- Card image -->
        <div class="view view-cascade gradient-card-header blue-gradient text-center">

            <!-- Title -->
            <h2 class="card-header-title my-3 white-text out-title">{{ blog.title }}</h2>

        </div>

        <!-- Card content -->
        <div class="card-body card-body-cascade">

            <!-- Text -->
            
            <p>Content:</p>
            <p>{{ blog.content }}</p>

        </div>

    </div>
    <!-- Card -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            authors: ['Joakim', 'Jeanette', 'Liam', 'Wille'],
            blog: {
                title: '',
                content: ''
            }
        }
    }

}
</script>

<style>
    .out-title {
        min-height: 40px;
    }
</style>