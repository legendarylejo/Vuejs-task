import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App'

Vue.config.productionTip = false

import homepage from './components/pages/index.vue'
import stylePage from './components/pages/style.vue'
import aboutPage from './components/pages/about.vue'
import contactPage from './components/pages/contact.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: homepage },
    { path: '/style', component: stylePage },
    { path: '/about', component: aboutPage },
    { path: '/contact', component: contactPage },
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
