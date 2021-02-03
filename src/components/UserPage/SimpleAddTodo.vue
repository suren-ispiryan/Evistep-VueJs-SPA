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
      title: '',
    }
  },

  mounted() {
    //set to a localstorage chosen tasks
    let ChosenTasks = localStorage.getItem('ChosenTasks');
    if (!ChosenTasks) {
      localStorage.setItem( 'ChosenTasks',JSON.stringify([{'tasks':'tasks'}]) );
    }
  },

  methods: {
    getTodos(){

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

// check and put tasks in arr for sending to storage
              let NewChosenTasksInArray = [];
                if (tasksInArray[i]["userMail"] == loginesInArr[j]['mail']) { // check logined user tasks
                  NewChosenTasksInArray.push(tasksInArray[i]["task"]);  // put a chosen task from tasklist task6 task7 task8

                  let getChosentasks = JSON.parse(localStorage.getItem('ChosenTasks'));
                  let getChosenTasksInArray = [];
                  for (let z in getChosentasks) {
                    getChosenTasksInArray.push(tasksInArray[z]);
                  }
                  getChosenTasksInArray.push(tasksInArray[i]["task"]);
                  localStorage.setItem("ChosenTasks",JSON.stringify(getChosenTasksInArray));
                  break;
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
</style>