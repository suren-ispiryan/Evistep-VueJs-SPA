<!--
<template>
  <form>
    <button @click="getTodos()" class="btn btn-primary mr-4">Get Todos</button>
    <button @click="submitAnswers()" class="btn btn-success">Submit</button>
  </form>
</template>

<script>
export default{
  name: 'SimpleAddTodo',
  data() {
    return {
      title: ''
    }
  },

  methods: {
    getTodos(){
    //set to a localstorage chosen tasks
    let ChosenTasks = localStorage.getItem('ChosenTasks');
    if (!ChosenTasks) {  let arr = window.localStorage.getItem('ChosenTasks');
      console.log(arr);
      localStorage.setItem( 'ChosenTasks',JSON.stringify([{'tasks':'tasks'}]) );
    }
    else{
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
                  }


              }

          }

    }
  },


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
    }
  },
}
</script>




<style scoped>
form{
  display: flex;
}
input{
  width: 400px;
}
</style>-->
