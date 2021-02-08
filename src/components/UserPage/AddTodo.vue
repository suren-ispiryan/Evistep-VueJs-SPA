<template>
  <form @submit.prevent="onSubmit">
    <input type="text" class="form-control" v-model="title" placeholder="write a task">
    <input type="email" class="form-control" v-model="userMail" placeholder="user Email">
    <button type="submit"  @click="submitInfo()" class="btn btn-success ml-4">Add Task</button>
  </form>
</template>

<script>
export default{
  name: 'AddTodo',
  data() {
    return {
      userMail: '',
      title: ''
    }
  },
  methods: {
    mounted() {
      let tasks = localStorage.getItem('tasksList');
      if (!tasks) {
        localStorage.setItem('tasksList',JSON.stringify([{"title":"title","userMail":"userMail"}]));
      }
    },

    submitInfo() {
//put tasks in array
      let allTasks = JSON.parse(localStorage.getItem('tasksList'));
      let tasksArray = [];
      if (this.title!=="") {
        for (let i in allTasks)
          tasksArray.push(allTasks[i]);

//check user in storage
          let userdata = JSON.parse(localStorage.getItem('Users'));
          let userArray = [];
          for (let i in userdata) {
            userArray.push(userdata[i]); // Users
          }
          for (let j in userArray) {
            if (userArray[j]["mail"].includes(this.userMail) && this.userMail !== "") {
//Add task
              let objTasks = {
                'task': this.title,
                'userMail': this.userMail
              };
              tasksArray.push(objTasks);
              localStorage.setItem("tasksList", JSON.stringify(tasksArray));
              console.log("task added");
            }
          }
      }
    },
    onSubmit() {
      if (this.title.trim(), this.userMail.trim()){
        const newTodo = {
          id: Date.now(),
          title: this.title,
          userMail: this.userMail,
          completed: false
        }
        console.log(newTodo)
        this.$emit('add-todo', newTodo)
        this.title="",
        this.userMail=""
      }
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
}
input{
  margin-left: 20px;
  width: 350px;
}
</style>