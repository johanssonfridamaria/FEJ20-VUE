<template>
  <div class="mt-5">
      <button class="btn btn-sm m-0" :class="loginClasses" @click="change('Login')">Login</button>
      <button class="btn btn-sm m-0" v-bind:class="registerClasses" @click="change('Signup')">Register</button>
    <keep-alive>
      <component v-bind:is="comp" />
    </keep-alive>
  </div>
</template>

<script>
import Login from './Login'
import Signup from './Signup'

export default {
    name: 'User',
    components: {
        Login,
        Signup
    },
    data() {
        return {
            comp: 'Login',
            login: true,
            register: false
        }
    },
    methods: {
        change(val) {
            this.comp = val
            if(val === 'Login') {
                this.login = true
                this.register = false
            } else {
                this.login = false
                this.register = true
            }
        }
    },
    computed: {
        loginClasses() {
            return {
                'btn-default': this.login,
                'btn-outline-default': !this.login
            }
        },
        registerClasses() {
            return {
                'btn-default': this.register,
                'btn-outline-default': !this.register
            }
        }
    }
}
</script>

<style>

</style>