import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')



    /*connecting bootstrap to VueJs*/

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
new Vue({
  el: '#app',
  render: h => h(App)
});



    /*connecting icon */

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})







    /*connecting router*/
/*

import SignIn from "@/components/SignIn/SignIn";
import Login from "@/components/Login/Login";


import VueRouter from 'vue-router'
Vue.use(VueRouter)

new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      name: 'sign',
      component: SignIn
    },
    { path: '/logIn',
      name: 'log',
      component: Login
    }
  ]
})


// eslint-disable-next-line no-unused-vars
const router = new Vue({
  el: '#app',
  components: { app },
  render: h => h(App)
})
*/

