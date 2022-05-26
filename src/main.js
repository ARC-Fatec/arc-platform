import Vue from 'vue'
import App from './App.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import LostPassword from './components/LostPassword.vue'
import VueRouter from './vue-router'

Vue.config.productionTip = false

const router = new VueRouter ({
  routes: [
    { path: '/password', component: LostPassword},
    { path: '/cadastro', component: SignUp }, //teste.com/cadastro
    { path: '/', component: SignIn }//teste.com
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default router