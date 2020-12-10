<template>
  <form class="d-flex" v-on:submit.prevent="onSubmit">
    <div class="col-10">
      <div class="md-form form-lg">
        <input type="text" v-model="customerName" id="cName" class="form-control form-control-lg" autocomplete="off">
        <label for="cName">Enter Customer Name</label>
      </div>
    </div>
    <div class="col-auto mt-3">
      <button class="btn btn-primary mb-0">Add Customer</button>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      customerName: ''
    }
  },
  methods: {
    ...mapActions(['addCustomer']),
    onSubmit() {
      this.addCustomer(this.customerName)
      this.customerName = ''
    }
  }
}
</script>

<style>

</style>