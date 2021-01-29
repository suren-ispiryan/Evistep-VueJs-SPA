<template>
  <div class="row log" id="ex1">
    <div class="col-md-12">
      <div class="form" action="" method="">
        <input class="input" v-model="firstName" placeholder="Name">
        <input class="input" v-model="lastName" placeholder="Surname">
        <input class="input" v-model="email" type="email" name="email" placeholder="Email" id="mail">
        <input class="input" v-model="password" :type="passwordFieldType" placeholder="Password">
        <button type="password" @click="switchVisibility" class="password-eye"><i class="fas fa-eye"></i></button>
        <input class="input" v-model="passCheck" :type="passwordFieldType" name="repeatPass" placeholder="Confirm Password" id="confirmPassword">

        <div>
          <button id="btn-sign-in" @click="submit()">Create an account</button>
        </div>
      </div>
      <p class="paragraph1">
        <b class="dark">
          or
          <i class="login-btn">
            <router-link to="/Login">login</router-link>
          </i>
          with
        </b>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passCheck: "",
      passwordFieldType: 'password'
    }
  },

  /*Create Admin*/
  mounted() {
   let users = localStorage.getItem('Users');
    if (!users) {
      localStorage.setItem('Users',JSON.stringify([{'firstName':'Admin','lastName':'Admin','password':'password','mail':'admin@admin.com'}]));
    }
  },

  /*create Users*/
  methods: {
    submit() {
      if ((this.email.match(/^\w+[+.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i)) && (this.password.match(/^[0-9a-zA-Z]+$/)) && (this.password === this.passCheck)) {
        console.log('valid');

        /*getting data and adding on it and pushing back*/
        //TODO check if user not exists in db then add new user use lodash
        let userdata = JSON.parse(localStorage.getItem('Users'));
        let userArray = [];
        for(let i in userdata)
          userArray.push(userdata[i]);

        if (this.email == this.email){
            let obj = {
              'firstName': this.firstName,
              'lastName':  this.lastName,
              'password':  this.password,
              'mail':  this.email
            };
          userArray.push(obj);
          localStorage.setItem("Users",JSON.stringify(userArray));
          console.log("added");
        }
        else{console.log("User exists");}
      }
      else {//TODO show errors
        console.log('inValid');
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
.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
}

.input {
  background-color: transparent;
  border: none;
  width: 80%;
  margin-top: 5%;;
  border-bottom: darkslateblue 1px solid;
  outline: none;
}

input, textarea {
  background-color: #d1d1d1;
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
  bottom: 50%;
  right: 15%;
  font-size: 12px !important;
  border-radius: 100%;
}

#btn-sign-in {
  border: none;
  width: 100%;
  margin-top: 10%;
  background-color: rgba(255, 255, 255, 0.8);
  outline: none;
  border-radius: 40px;
  height: 50px;
}

.login-btn {
  color: cornflowerblue;
  cursor: pointer;
}

.paragraph1 {
  color: white;
  margin-top: 5%;
  text-align: center;
  font-size: 15px;
}

.dark {
  font-size: 14px;
  text-shadow: 1px 1px black !important;
}
</style>