import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import  catalogs from './catalogs.vue'
import  oneCatalog from './oneCatalog.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes:[
    {path: '/catalogs',name:'catalogs', component: catalogs},
    {path: '/catalogs/:id',name:'oneCatalog', component: oneCatalog, props: true},
  ],
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
