import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false


/*===================== connecting bootstrap to VueJs =====================*/

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);



/*====================== connecting router =================================*/

    /*Importing components for route*/

import Router from 'vue-router'
import SignIn from "@/components/SignIn/SignIn";
import LogIn from "@/components/SignIn/LogIn";
import UserPageComponent from "@/components/UserPage/UserPageComponent";
import SimplePageComponent from "@/components/UserPage/SimplePageComponent";
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name:'home',
      component: SignIn
    },
    {
      path: '/LogIn',
      name:'logIn',
      component: LogIn
    },
    {
      path: '/',
      component: SignIn
    },
    {
      path: '/AdminPage',
      name: 'UserPageComponent',
      component: UserPageComponent
    },
    {
      path: '/UserPage',
      name: 'SimplePageComponent',
      component: SimplePageComponent
    }
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
});

