<template>
    <div>
    <!-- Card -->
        <div class="card card-cascade" v-for="(post, index) in posts" :key="index">

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
    props: ['posts']

}
</script>

<style>

</style>