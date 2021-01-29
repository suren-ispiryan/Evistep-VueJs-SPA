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

        <div class="row a">
          <div class="icons-box">
            <div class="row row-icons">

              <div class="col-md-12 i-container">
                <span class="icons"> <i class="main-icons fab fa-twitter"></i> </span>
                <span class="icons"> <i class="main-icons fab fa-facebook-f"></i> </span>
                <span class="icons"> <i class="main-icons fab fa-instagram"></i> </span>
              </div>

            </div>
          </div>
        </div>

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
  background-image: url("../../assets/Login-page-back.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.general-element{
  padding: 15px 15px 0 15px;
  -webkit-box-shadow: 0 0 20px 1px #000000;
  box-shadow: 0 0 20px 1px #000000;
  width: 30vw;
  height: 90vh;
  background-color: rgba(0,0,0,0.2);
}
/*sign up heading*/
.sign-up-heading{
  margin-top: 15%;
  font-size: 24px;
  color: darkslateblue;
  text-align: center;
  font-family: ALEGREYA;
  font-style: italic;
}
.row-icons{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.a{
  display: flex;
  align-items: center;
  justify-content: center;
}
.icons-box{
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-icons{
  color: white;
  font-size: 24px;
}
.icons{
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border: darkslateblue 1px solid;
  border-radius: 100%;
  margin-left: 5px;
}
.login-footer{
  position:absolute;
  bottom: 0;
  background-color: darkslateblue;
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
.i-container{
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>