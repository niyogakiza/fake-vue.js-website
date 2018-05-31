<template lang="pug">
  .content-width.mng-nav-bar
  template(v-if='fullWidth > 1060')
  .logo
  .menugroup
   el-menu( mode="horizontal", @select="handleSelect")
    el-menu-item(v-for="(page, i) in pages", :key="i" :index="page.link") {{page.title}}
  el-menu.vertical(v-else mode="vertical", @select="handleSelect")
  el-submenu(index='2')
  template(slot="title")
  .logo(:style="{width: '200px'}")
  el-menu-item(v-for="(page, i) in pages", :key="i", :index="page.link") {{page.title}}
</template>

<script>
export default {
  data: function () {
    return {
      pages: [
        {
          title: 'Benvenuto',
          link: 'benvenuto'
        },
        {
          title: 'Maneggio',
          link: 'maneggio'
        },
        {
          title: 'Attività',
          link: 'attività'
        },
        {
          title: 'Itinerari',
          link: 'itinerari'
        },
        {
          title: 'Struttura',
          link: 'struttura'
        },
        {
          title: 'Chi siamo',
          link: 'chi siamo'
        },
        {
          title: 'Contatti',
          link: 'contatti'
        }
      ],
      fullWidth: 0
    }
  },
  methods: {
    handleSelect: function (key, keyPath) {
      this.$router.push(key)
    },
    handleResize: function (event) {
      this.fullWidth = document.documentElement.clientWidth
    }
  },
  mounted: function () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
}
</script>

<style scoped>
  .vertical {
    width: 100%;
    text-align: center;
  }
  .logo {
    display: inline-block;
    margin: 15px 10px 15px;
    width: 300px;
    height: 50px;
    background: url("../assets/logo.jpg") no-repeat center fixed;
    background-size: contain;
  }
  .el-menu,
  .el-submenu,
  .el-menu-item,
  .el-menu-item:hover,
  .el-submenu .el-submenu__title:hover,
  .el-submenu__title,
  .el-submenu__title:focus
  {
    background-color: white !important;
  }
  .menugroup {
    float: right;
    margin-top: 5px;
  }
  .el-menu-item {
    font-family: Lato;
    font-size: 16px;
    color: #238C8B;
  }

  .el-menu {
    margin-bottom: 5px
  }
  .el-menu-item.is-active {
    font-weight: bold;
  }

</style>
