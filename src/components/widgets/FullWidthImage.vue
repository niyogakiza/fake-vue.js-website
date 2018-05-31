<template lang="pug">
    .image(:style="style")
</template>

<script>
export default {
  props: {
    src: {default: ''},
    height: {default: '300px'},
    maxHeight: {default: '100%'},
    backgroundPosition: {default: '30% center'}
  },
  computed: {
    style: function () {
      return {
        height: this.height,
        'max-height': this.maxHeight,
        'background-image': 'url(' + this.src + ')',
        'background-position': this.backgroundPosition
      }
    }
  }
}
</script>

<style scoped>
  .image {
    width: 100%;
    background-size: cover;
    background-position: center 30%;
    background-clip: content-box;
  }
</style>
