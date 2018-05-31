<template lang="pug">
  footer.bg-green.txt-white
  .content-width
  el-row
  el-col(:xs="24", :sm="'24", :md="8")
  p.txt-white.address.
    John Doe Maneggio<br />
    Arcisate / Varese<br />
    21051, ITALY<br />
  el-col(:xs="24", :sm="24", :md="8")
  h3 Funded By
  a(href='#' target="_blank")
  el-col(:xs="24", :sm="24" :md="8")
  h3 Contact Us
  p
  a.white(href="#") example@gmail.com
  br
  a.white(href="#") +39 555 555 5555
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  footer {
    text-align: center;
    padding-top: 40px;
    color: white;
    font-family: Lato, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  p {
    font-size: 20px;
    margin-top: 20px;
  }
  h3 {
    font-weight: normal;
    margin-top: 3px;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  }
</style>
