<template lang="pug">
.pageheader
  el-row.content-width
  el-col.img-col(:md="6", :sm="6", :xs="24")
  img(:src="img")
  el-col(:md="18", :sm="18", :xs="24")
  h1.title {{ title }}
  h2.subtitle {{ subtitle }}
</template>

<script>
export default {
  props: {
    title: {default: 'title'},
    subtitle: {default: 'subtitle'},
    img: {default: 'img'}
  }
}
</script>

<style lang="scss" scoped>
.pageheader {
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 60px;
}
  .img-col {
    text-align: center;
    height: auto;
  }
  img {
    max-width: 90%;
    width: 150px;
    margin-top: 10px;
  }
  h1,h2 {
    text-align: left;
  }
  h1 {
    margin-bottom: 10px;
  }
  h2 {
    font-size: 32px;
    margin-top: 15px;
  }
</style>
