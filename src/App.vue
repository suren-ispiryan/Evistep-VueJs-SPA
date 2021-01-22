<template>
  <div id="app">

    <!--Connecting icons-->
    <link rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

    <!-- <LoginPage/> -->
     <SignInPage/>
   </div>
 </template>



 <script>
 /*import LoginPage from './components/Login/Login.vue'*/
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
