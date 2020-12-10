<template>
    <tr :class="activeClass">
      <th scope="row">{{ id }}</th>
      <td>{{ customer.name }}</td>
      <td>{{ isActiveText }}</td>
      <td class="py-2 d-flex justify-content-end">
        <button @click="toggleActive(customer)" class="btn btn-sm btn-blue-grey text-center btn-fixed-width">{{ activeStateText }}</button>
        <button @click="removeCustomer(customer)" class="btn btn-sm btn-danger text-center btn-fixed-width"><i class="fas fa-trash mr-2"></i>DELETE</button>
      </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['customer', 'id'],
  methods: {
    ...mapActions(['toggleActive', 'removeCustomer'])
  },
  computed: {
    activeStateText() {
      if(this.customer.active) {
        return 'Inactivate'
      } else {
        return 'Activate'
      }
    },
    activeClass() {
      if(!this.customer.active) {
        return 'inactive'
      } else {
        return ''
      }
    },
    isActiveText() {
      if(this.customer.active) {
        return 'Active'
      } else {
        return 'Inactive'
      }
    }
  }
}
</script>

<style scoped>
  .inactive {
    color: #dcdcdc;
  }
  .btn-fixed-width {
    width: 110px;
  }
</style>