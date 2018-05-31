<template lang="pug">
  gmap-map(
    :center="center"
    :zoom="12"
    style="width: 100%; height: 500px; backgroundPosition: '30% center'"
    :options="{scrollwheel:false}"
  )

  gmap-marker(
     v-for="m, key in markers"
     :position="m.position"
     :clickable="true"
     :draggable="false"
     :key="key"
     @click="center=m.position"
  )
</template>

<script>
export default {
  data () {
    return {
      center: { lat: 45.662361, lng: 8.792127 },
      markers: [{
        position: { lat: 45.662361, lng: 8.792127 }
      }]
    }
  }
}
</script>
