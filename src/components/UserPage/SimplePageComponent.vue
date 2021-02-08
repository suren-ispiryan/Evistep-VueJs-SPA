<template>
  <div id="app">
    <h1 class="heading">Todo application</h1>

<!--Add>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>-->
      <form>
        <button @click="getTodos()" class="btn btn-primary mr-4">Get Todos</button>
        <button @click="submitAnswers()" class="btn btn-success">Submit</button>
      </form>
<!--Add<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<-->

<!--simplePageComponent>>>>>>>>>>>>>>>>>>>>>-->
    <hr>
    <SimpleTodoList v-if="newTasks.length > 0" v-bind:newBindTasks="newTasks"/>
    <p v-else>No todos!</p>
<!--simplePageComponent<<<<<<<<<<<<<<<<<<<<<-->

  </div>
</template>





<script>
import SimpleTodoList from './SimpleTodoList.vue'
export default {
  name: 'UserPageComponent',
  components: {
    SimpleTodoList
  },

  data() {
    return {
      newTasks: [], // global variable for users chosen tasks
    }
  },

  methods: {
    /*Add>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
    getTodos() {
      //set into localstorage mail chosen tasks table
      let ChosenTasks = localStorage.getItem('ChosenTasks');
      if (!ChosenTasks) {
        let arr = window.localStorage.getItem('ChosenTasks');
        console.log(arr);
        localStorage.setItem('ChosenTasks', JSON.stringify({'ChosenTasks': 'task'}));
      }

      // get all tasks from locaNewbinedTasksl storage
      let allUserTasks = JSON.parse(localStorage.getItem('tasksList'));
      let tasksInArray = [];
      for (let i in allUserTasks) {
        tasksInArray.push(allUserTasks[i]); // all tasks

        // get logined user from local storage
        let loginedUser = JSON.parse(localStorage.getItem('JustLogInUser'));
        let loginesInArr = [];
        for (let j in loginedUser) {
          loginesInArr.push(loginedUser[j]); // logined user

          if (tasksInArray[i]["userMail"] == loginesInArr[j]['mail']) { // check logined user tasks

            // adding the tasks to Chosen task
            let getChosentaskss = JSON.parse(localStorage.getItem('ChosenTasks'));
            let NewChosenTasksInArray = [];
            for (let z in getChosentaskss) {
              NewChosenTasksInArray.push(getChosentaskss[z]);
            }
            NewChosenTasksInArray.push(tasksInArray[i]["task"]);
            localStorage.setItem("ChosenTasks", JSON.stringify(NewChosenTasksInArray));  // mail chosen tasks are added
            /*localStorage.removeItem("ChosenTasks")*/


            let transport = JSON.parse(localStorage.getItem('ChosenTasks'));  // getting ready for sending to child
            let Newtransport = [];
            for (let z in transport) {
              /*refresh>>>>>>>>>>>>>>>>>>*/
              if (Newtransport.includes(transport[z])){
                  continue;
              }
              else{
                Newtransport.push(transport[z]);
                this.newTasks = Newtransport;
              }
            }
          }
        }
      }
    },
  }
}
</script>



<style scoped>
#app{
  text-align: center;
  margin-top: 60px;
  padding: 50px;
}
.heading{
  padding-bottom: 50px;
}
form{
  display: flex;
}
input{
  width: 400px;
}
</style>
