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

