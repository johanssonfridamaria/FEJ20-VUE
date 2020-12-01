<template>
  <div>
      <form class="border border-light p-5" @submit.prevent="create">

    <p class="h4 mb-4 text-center">Sign in</p>

    <label for="title">Title</label>
    <input type="text" id="title" class="form-control mb-4" :class="{'is-invalid': titErr}" v-model.lazy="blog.title">
    <p class="invalid-feedback mb-4">Please enter a title</p>

    <label for="content">Content</label>
    <textarea id="content" class="form-control mb-4" v-model="blog.content"></textarea>
    <p class="invalid-feedback mb-4">Please enter some content</p>

    <p>Categories</p>
    <div class="d-flex">

        <div class="custom-control custom-checkbox mb-4 mr-4">
            <input type="checkbox" class="custom-control-input" id="travel" value="Travel" v-model="blog.categories">
            <label class="custom-control-label" for="travel">Travel</label>
        </div>


        <div class="custom-control custom-checkbox mb-4 mr-4">
            <input type="checkbox" class="custom-control-input" id="food" value="Food" v-model="blog.categories">
            <label class="custom-control-label" for="food">Food</label>
        </div>

        <div class="custom-control custom-checkbox mb-4 mr-4">
            <input type="checkbox" class="custom-control-input" id="computers" value="Computers" v-model="blog.categories">
            <label class="custom-control-label" for="computers">Computers</label>
        </div>

        <div class="custom-control custom-checkbox mb-4 mr-4">
            <input type="checkbox" class="custom-control-input" id="frontend" value="Frontend" v-model="blog.categories">
            <label class="custom-control-label" for="frontend">Frontend</label>
        </div>

    </div>
    <p class="text-danger small mb-4" :class="{'d-none': !catErr}">Please choose a category</p>

    <label for="select">Author</label>
    <select class="browser-default custom-select mb-4" id="select" v-model="blog.author">
        <option value="" disabled="" selected=""></option>
        <option v-for="(au, index) in authors" v-bind:key="index">{{ au }}</option>
    </select>
    <p class="invalid-feedback mb-4">Please choose an author</p>

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
            <p>Categories:</p>
            <ul class="list-group list-group-horizontal">
                <li v-for="(cat, index) in blog.categories" :key="index">{{ cat }}</li>
            </ul>
            <p>Author: {{ blog.author }}</p>

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
                content: '',
                categories: [],
                author: ''
            },
            titErr: false,
            catErr: false
        }
    },
    methods: {
        create(e) {
            if(this.blog.title !== '' && this.blog.content !== '' && this.blog.categories.length > 0 && this.blog.author !== '') {
                this.$emit('new-post', this.blog)
                e.target.forEach(i => i.classList.remove('is-invalid'))
                this.blog = {
                    title: '',
                    content: '',
                    categories: [],
                    author: ''
                }
            } else {
                e.target.forEach(input => {
                    if(input.type == 'checkbox') {


                        if(this.blog.categories.length > 0) {
                            input.classList.remove('is-invalid')
                            this.catErr = false
                        } else {
                            input.classList.add('is-invalid')
                            this.catErr = true
                        }

                    } else {

                        if(input.value == '') {
                            input.classList.add('is-invalid')
                        } else {
                            input.classList.remove('is-invalid')
                        }

                    }
                })
            }
        }
    }

}
</script>

<style>
    .out-title {
        min-height: 40px;
    }
    .list-group {
        list-style: none;
    }
    .list-group li {
        padding: 0 1rem 0.5rem 1rem;
    }
</style>