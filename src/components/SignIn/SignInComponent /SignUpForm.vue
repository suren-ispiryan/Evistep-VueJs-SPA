<template>
  <div class="row sign">
    <div class="col-md-12">
      <form class="form" action="" method="post">
        <input class="input" type="text" name="name" placeholder="Name">
        <input class="input" type="email" name="email" placeholder="Email">
        <input class="input" type="password" name="pass" placeholder="Password" id="password">
        <i class="main-icons password-eye far fa-eye" id="togglePassword"></i>
        <button class="btn-log-in" type="submit">Create my account</button>
      </form>
      <p class="paragraph1">or <i class="login-btn"> login </i> with</p>
    </div>
  </div>
</template>



<script>
export default {
name: "SignUpForm"
}

window.onload = function() {

  /*Shoe/Hide password*/
  const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
  togglePassword.addEventListener('click', function () {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
  });

}
</script>




<style scoped>
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
  bottom: 47%;
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
  font-size: 15px;
}
</style>