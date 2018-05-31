import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
// import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/it'
import * as VueGoogleMaps from 'vue2-google-maps'
import PageHeader from './components/PageHeader'
import routes from './routes'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUi, {locale})
Vue.component('pageheader', PageHeader)
// Vue.component('parallax', Parallax)
Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    v: '3',
    scrollwheel: false
  }
})

const router = new VueRouter({
  routes,
  mode: 'history'
})
router.beforeEach((to, form, next) => {
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})
