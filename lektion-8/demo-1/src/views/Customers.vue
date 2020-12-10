<template>
  <div class="container mt-3">
    <add-customer-form class="my-5" />
    <customer-list />
  </div>
</template>

<script>
import AddCustomerForm from '@/components/Customer/AddCustomerForm'
import CustomerList from '../components/Customer/CustomerList'
export default {
  components: {
    AddCustomerForm,
    CustomerList
  }
}
</script>

<style>

</style>