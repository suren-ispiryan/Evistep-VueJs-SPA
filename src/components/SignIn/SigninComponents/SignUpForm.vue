<template>
  <div class="row log" id="ex1">
    <div class="col-md-12">
      <div class="form" action="" method="">
        <input class="input form-control" v-model="firstName" placeholder="Name">
        <input class="input form-control" v-model="lastName" placeholder="Surname">
        <input class="input form-control" v-model="email" type="email" name="email" placeholder="Email" id="mail">
        <input class="input form-control" v-model="password" :type="passwordFieldType" placeholder="Password">
        <button type="password" @click="switchVisibility" class="password-eye btn "><i class="fas fa-eye"></i></button>
        <input class="input form-control" v-model="passCheck" :type="passwordFieldType" name="repeatPass" placeholder="Confirm Password" id="confirmPassword">

        <div>
          <button id="btn-sign-in" type="button" class="btn btn-primary" @click="submit()">Create an account</button>
        </div>
      </div>
      <p class="paragraph1">
        <b class="dark">
          or
          <i class="login-btn">
            <router-link to="/Login">login</router-link>
          </i>
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
  width: 90%;
  margin-top: 2%;;
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
  height: 70px;
  width: 70px;
  position: absolute;
  border: none;
  bottom: 47%;
  right: 8%;
  font-size: 20px !important;
  border-radius: 100%;
}

#btn-sign-in {
  margin-top: 30%;
  width: 100% !important;
  border-radius: 10px;
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