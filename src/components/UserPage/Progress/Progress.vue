<template>
  <ul>
    <h1 id="head"> Users progress list </h1>
    <div class="btnResults">
      <form class="form">
        <input type="text" class="form-control mr-4" v-model="userEmail" placeholder="user Email">
        <button class="btn btn-success" v-on:click="showResults()">Show list</button>
      </form>
    </div>

    <li>
      <span><h3>Task</h3></span>
      <span><h3>Status</h3></span>
    </li>
    <hr>

    <ProgressItem v-for="exportArr in exportArr"
                  v-bind:exportArr="exportArr"
                  v-bind:userEmail="userEmail"
                  v-bind:key="exportArr"/>

  </ul>
</template>




<script>
import ProgressItem from "@/components/UserPage/Progress/ProgressItem";
export default {
name: "Progress",
  components: {
    ProgressItem
  },


  data() {
    return {
      userEmail: 'userEmail',
      exportArr: []
    }
  },

  methods: {
   showResults() {
// tasklist user emails
     let allUserTasks = JSON.parse(localStorage.getItem('tasksList'));
     let tasksInArray = [];
     for (let i in allUserTasks) {
       tasksInArray.push(allUserTasks[i]); // chosen user all tasks
       if (tasksInArray[i]["userMail"] == this.userEmail){

// deletedTasksList user emails
         let binedTasks = JSON.parse(localStorage.getItem('deletedTasksList'));
         let NewbinedTasks = [];
         for (let z in binedTasks) {
           NewbinedTasks.push(binedTasks[z]); // chosen user done tasks
           let exportArr = [tasksInArray[i]["task"]];
          // exportArr -> chosen user done tasks in array
           this.exportArr=exportArr;
           break;
       }
       console.log(this.exportArr)
      }
     }
   }
  }

}
</script>






<style scoped>
#head{
  text-align: center;
  margin-bottom: 50px;
}
ul{
  margin-top: 50px;
}
li{
  margin-top: 50px;
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.form{
  display: flex;
}
input{
  width: 300px;
}
.btnResults{
  text-align: center;
}
</style>