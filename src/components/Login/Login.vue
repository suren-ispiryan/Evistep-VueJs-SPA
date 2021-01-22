<template>
  <div id="app" class="main">

    <div class="row a">
      <div class="col-md-12 general-element">

        <!--Heading-->

        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <b><p class="sign-up-heading">Welcome to VueJs</p></b>
          </div>
          <div class="col-md-2"></div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <form class="form" action="" method="post">
              <input class="input" type="email" name="email" placeholder="Email">
              <input class="input" type="password" name="pass" placeholder="Password" id="passwordlog">
              <i class="main-icons password-eye far fa-eye" id="togglePasswordlog"></i>
              <button class="btn-log-in" type="submit">Login my account</button>
            </form>
            <p class="paragraph1">Or <i class="login-btn"> login </i> with</p>
          </div>
        </div>

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
export default {
  name: 'LoginPage', // component
  props: {
    msg: String
  }
}

window.onload = function() {

  /*Shoe/Hide password*/
  const togglePassword = document.querySelector('#togglePasswordlog');
  const password = document.querySelector('#passwordlog');
  togglePassword.addEventListener('click', function () {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
  });

}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
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
  background-color: transparent;
}
/*sign up heading*/
.sign-up-heading{
  margin-top: 15%;
  font-size: 32px;
  color: darkslateblue;
  text-align: center;
  font-family: ALEGREYA;
  font-style: italic;
}
/*form*/
.form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.input{
  border: none;
  width: 80%;
  margin-top: 10%;
  background-color: transparent;
  border-bottom: darkslateblue 1px solid;
  outline: none;
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: black;
  opacity: 0.8; /* Firefox */
  font-size: 14px;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: black;
  font-size: 14px;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: black;
  font-size: 14px;
}
.password-eye{
  cursor: pointer;
  position: absolute;
  bottom: 60%;
  right: 15%;
  font-size: 18px !important;
}
.btn-log-in{
  border: none;
  width: 80%;
  margin-top: 10%;
  background-color: rgba(255,255,255,0.8);
  outline: none;
  border-radius: 40px;
  height: 50px;
}
.login-btn{
  color: cornflowerblue;
  cursor: pointer;
}
.paragraph1{
  color: white;
  margin-top: 5%;
  text-align: center;
  font-size: 14px;
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
