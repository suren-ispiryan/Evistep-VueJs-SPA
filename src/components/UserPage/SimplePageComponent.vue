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
export default{
  name: 'UserPageComponent',
  components:{
    SimpleTodoList
  },




  data() {
    return {
       newTasks: [], // global variable for users chosen tasks
    }
  },

  methods: {
/*/!*page component>>>>>>>>>>>>>>>>>>>>>*!/
    submitAnswers(){
      if (this.title.trim()){
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title=""
      }
    },*/
/*pageComponent<<<<<<<<<<<<<<<<<<<<<<*/

/*Add>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
    getTodos(){
      //set to a localstorage chosen tasks
      let ChosenTasks = localStorage.getItem('ChosenTasks');
      if (!ChosenTasks) {
        let arr = window.localStorage.getItem('ChosenTasks');
        console.log(arr);
        localStorage.setItem( 'ChosenTasks',JSON.stringify({'tasks': 'task'}) );
      }

        // get tasks from local storage
        let allUserTasks = JSON.parse( localStorage.getItem('tasksList') );
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
              localStorage.setItem("ChosenTasks", JSON.stringify(NewChosenTasksInArray));  // tasks are added
              /*localStorage.removeItem("ChosenTasks")*/

              let transport = JSON.parse(localStorage.getItem('ChosenTasks'));
              let Newtransport = [];
              for (let z in transport) {
                Newtransport.push(transport[z]);
                this.newTasks = Newtransport;
              }

            }
          }
        }

        console.log(this.newTasks)

      }

/*Add<<<<<<<<<<<<<<<<<<<<*/

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
