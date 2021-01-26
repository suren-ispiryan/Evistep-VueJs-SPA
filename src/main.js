import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
<<<<<<< HEAD


=======
>>>>>>> 2561f0e82801705d60548c4473893818cad9e912
new Vue({
  render: h => h(App),
}).$mount('#app')



<<<<<<< HEAD
        /*connecting bootstrap to VueJs*/
=======
    /*connecting bootstrap to VueJs*/
>>>>>>> 2561f0e82801705d60548c4473893818cad9e912

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
<<<<<<< HEAD





            /*connecting router*/

/*import VueRouter from 'vue-router'
/*import SignIn from '@/components/SignIn/SignIn'
import SignUpForm from '@/components/SignIn/SigninComponents/SignUpForm'
import LoginForm from '@/components/SignIn/SigninComponents/LoginForm'*!/


Vue.use(VueRouter)*/

// eslint-disable-next-line no-unused-vars

/*

const router = new VueRouter({
  routes: [
    { path: '/', component: app,
      children: [

        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'SignIn', component: SignUpForm },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'LogIn', component: LoginForm }
      ]
=======
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
>>>>>>> 2561f0e82801705d60548c4473893818cad9e912
    }
  ]
})

<<<<<<< HEAD
const app = new Vue({
  router
}).$mount('#app')
*/
=======

// eslint-disable-next-line no-unused-vars
const router = new Vue({
  el: '#app',
  components: { app },
  render: h => h(App)
})
*/

>>>>>>> 2561f0e82801705d60548c4473893818cad9e912
