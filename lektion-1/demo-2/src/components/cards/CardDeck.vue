<template>
  <div class="card-deck">

    <card v-bind:imgURL="imgOne" title="Hej" body="japaplksaaa" />
    <card imgURL="/img/federico-di-dio-photography-arhiSNIqbaA-unsplash.jpg" title="HEJHEJNR2" body="japjapp2222" />
    <card imgURL="/img/federico-di-dio-photography-haO04L8LoaU-unsplash.jpg" />
    
  </div>
</template>

<script>
import Card from './Card'
export default {
  data() {
    return {
      imgOne: require('@/assets/img/federico-di-dio-photography-a1juGVInn5U-unsplash.jpg')
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>