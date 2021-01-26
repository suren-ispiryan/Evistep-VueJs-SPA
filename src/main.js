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
    }
  ]
})

const app = new Vue({
  router
}).$mount('#app')
*/
