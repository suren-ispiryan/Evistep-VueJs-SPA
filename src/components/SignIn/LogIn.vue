<template>
  <div id="app" class="main">

<!--========================================== Connecting icons =======================================-->

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

    <div class="row a">
      <div class="col-md-12 general-element">

        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <b>
              <p class="sign-up-heading">Welcome to VueJs</p>
            </b>
          </div>
          <div class="col-md-2"></div>
        </div>


        <LoginForm/>


        <div class="row login-footer">
          <div class="col-md-12">
            <p class="sign-up-heading2">I am already learning VueJs</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>




<script>
import LoginForm from './SigninComponents/LoginForm'

export default {
  name: 'LogIn',
  components: {
    LoginForm
  }
}
</script>





<style scoped>
*{
  color: black;
}
.main{
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/9e7b47982ee1b58fef26717182b4b28c.jpg");
  background-size: cover;
  backgroud-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
}
.general-element{
  border-radius: 10px;
  padding: 15px 15px 0 15px;
  -webkit-box-shadow: 0 0 20px 1px #000000;
  box-shadow: 0 0 20px 1px #000000;
  width: 25vw;
  height: 75vh;
  background-color: rgba(255,255,255,0.5);
}
/*sign up heading*/
.sign-up-heading{
  margin-top: 15%;
  margin-bottom: 50px;
  font-size: 24px;
  color: darkslateblue;
  text-align: center;
  font-family: ALEGREYA;
  font-style: italic;
}
.a{
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-footer{
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position:absolute;
  bottom: 0;
  background-color: rgb(3, 90, 252);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
}
.sign-up-heading2{
  font-size: 18px;
  color: white;
  text-align: center;
  font-family: ALEGREYA;
  font-style: italic;
}

</style>