<template>
  <div class="row log">
    <div class="col-md-12">
      <div class="form" action="" method="">
        <input class="input form-control" v-model="email" name="email" placeholder="Email">
        <input class="input form-control" v-model="password" :type="passwordFieldType" name="pass" placeholder="Password" id="password">
        <button type="password" @click="switchVisibility" class="password-eye btn"><i class="fas fa-eye"></i></button>
        <button id="btn-log-in" type="button" class="btn btn-primary" @click="submit()">Login</button>
      </div>
      <p class="paragraph1">
        <b class="dark">
          <router-link to="/">or SignUp</router-link>
        </b>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      passwordFieldType: 'password'
    }
  },

  methods: {
    submit() {
console.log('test')
      let userdata = JSON.parse(localStorage.getItem('Users'));
      let userArray = [];
      for(let i in userdata) {
        userArray.push(userdata[i]);
      }

      for(let j in userArray) {
        if (userArray[j]["mail"].includes(this.email) && userArray[j]["password"].includes(this.password)
        && userArray[j]["mail"] == "admin@admin.com" && userArray[j]["password"] == "password"
        && this.email !== "" && this.password !== "" ) {
          console.log("Admin mail exist");
          this.$router.push('/AdminPage')
        }
        else if ( userArray[j]["mail"].includes(this.email) && userArray[j]["password"].includes(this.password)
        && this.email !== "" && this.password !== "" ) {
          console.log("User mail exist");
          this.$router.push('/UserPage')

        // add login's mail
          localStorage.setItem('JustLogInUser',JSON.stringify([{'mail': this.email}]));
        }
        else {
          console.log("mail is not exist or no password");
        }
      }
    },

    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    }

  }

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
  width: 90%;
  margin-top: 3%;
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
.password-eye {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  cursor: pointer;
  position: absolute;
  bottom: 65%;
  right: 10%;
  font-size: 18px !important;
  border-radius: 100%;
}
#btn-log-in{
  margin-top: 20%;
  width: 80%;
  border-radius: 10px;
}
.paragraph1{
  color: white;
  margin-top: 5%;
  text-align: center;
  font-size: 15px;
}
.dark{
  font-size: 14px;
  text-shadow: 1px 1px black !important;
}
</style>