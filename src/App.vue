<template>
  <div id="app">

    <!--Connecting icons-->
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

<<<<<<< HEAD
    <router-view></router-view>

    <SignIn/>

  </div>
</template>


<script>
import SignIn from './components/SignIn/SignIn.vue'
/* import VueRouter from "vue-router";
 import SignUpForm from "@/components/SignIn/SignInComponent/SignUpForm";
 import LoginForm from "@/components/SignIn/SignInComponent/LoginForm";
 import SignIn from "@/components/SignIn/SignIn";*/

export default {
  name: 'App',
  components: {
    SignIn
  }
}

/* new VueRouter({
   routes: [
     {
       path: '/components/SignIn/SignIn.vue',
       component: SignIn,
       children: [
         {
           // при совпадении пути с шаблоном /user/:id/profile
           // в <router-view> компонента User будет показан UserProfile
           path: 'signUpForm',
           component: SignUpForm
         },
         {
           // при совпадении пути с шаблоном /user/:id/profile
           // в <router-view> компонента User будет показан UserProfile
           path: 'signUpForm',
           component: LoginForm
         }
       ]
     }
   ]
 })*/
</script>



<style scoped>

</style>
=======
<!-- <LoginPage/>-->
     <SignInPage/>

  </div>
 </template>


 <script>
/* import LoginPage from './components/Login/Login.vue'*/
 import SignInPage from './components/SignIn/SignIn.vue'

 export default {
   name: 'App',
   components: {
     /*LoginPage,*/
     SignInPage
   }
 }


 </script>



<style>
#app {

}
</style>
>>>>>>> 2561f0e82801705d60548c4473893818cad9e912
