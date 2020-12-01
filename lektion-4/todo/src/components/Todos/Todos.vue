<template>
    <div v-if="loading">
        <p>loading</p>
    </div>
    <div v-else>   
        <div v-if="todos.length">
            <transition-group name="fade-slide">
                <div v-for="t in todos" v-bind:key="t._id">
                    <todoComponent v-if="value === ''" v-bind:todo="t" v-on:delete-todo="$emit('delete-todo', t._id)" @update="$emit('update')" />
                    <todoComponent v-else-if="t.completed === value" v-bind:todo="t" v-on:delete-todo="$emit('delete-todo', t._id)" @update="$emit('update')" />
                </div>
            </transition-group>
        </div>
        <div v-else>
            <h3>No todos left</h3>
        </div>
    </div> 

</template>

<script>
import TodoComponent from './TodoComponent'
export default {
    props: ['todos', 'value', 'loading'],
    components: {
        TodoComponent
    }

}
</script>

<style>
.fade-slide-enter-active, .fade-slide-leave-active {
    transition: all 0.5s ease;
}
.fade-slide-enter {
    opacity: 0;
    /* transform: translateX(-30px); */
    transform: scale(0.5, 0.5);
}
.fade-slide-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>