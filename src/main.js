import Vue from 'vue'
// import VueRouter from 'vue-router'
import App from './App.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

// Vue.config.productionTip = false

// Vue.use(VueRouter)

// const router = new VueRouter ({
//   routes: [
//     { path: '/cadastro', component: SignUp }, //teste.com/cadastro
//     { path: '/', component: SignIn }//teste.com
//   ]
// })

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')

