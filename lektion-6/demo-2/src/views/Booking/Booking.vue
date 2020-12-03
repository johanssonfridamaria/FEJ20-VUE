<template>
  <div class="container">
    <section>
      <div class="row">
        <room-card v-for="room in meetingRooms" :key="room.id" v-bind:room="room" />
      </div>
    </section>
  </div>
</template>

<script>
import RoomCard from '../../components/RoomCard'
export default {
  name: 'booking',
  components: {
    RoomCard
  },
  data() {
    return {
      meetingRooms: [
        {
          id: 1,
          name: 'Ängsö',
          capacity: 60,
          equipment: [
            'Projektor',
            'Whiteboard'
          ]
        },
        {
          id: 2,
          name: 'Björnö',
          capacity: 40,
          equipment: [
            'Projektor',
            'Whiteboard'
          ]
        },
        {
          id: 3,
          name: 'Lindö',
          capacity: 20,
          equipment: [
            'Projektor',
            'Whiteboard'
          ]
        },
        {
          id: 4,
          name: 'Dalarö',
          capacity: 2,
          equipment: [
            'Whiteboard'
          ]
        }
      ]
    }
  }

}
</script>

<style>

</style>