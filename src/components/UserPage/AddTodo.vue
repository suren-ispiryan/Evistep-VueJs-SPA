<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" placeholder="write a task">
    <button type="submit" @click="submitInfo()">Create</button>
    <input type="email" v-model="userMail" placeholder="user Email">
    <button type="submit" @click="AddTaskToUser()">Add task</button>
  </form>
</template>

<script>
export default{
  name: 'AddTodo',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    mounted() {
      let tasks = localStorage.getItem('tasksList');
      if (!tasks) {
        localStorage.setItem('tasksList',JSON.stringify([{"title":"title"}]));
      }
    },

    submitInfo() {
      let allTasks = JSON.parse(localStorage.getItem('tasksList'));
      let tasksArray = [];
      if (this.title!==""){
        for (let i in allTasks)
          tasksArray.push(allTasks[i]);
          let objTasks = {
            'task': this.title
          };
        tasksArray.push(objTasks);
        localStorage.setItem("tasksList", JSON.stringify(tasksArray));
        console.log("task added");
      }
    },
    onSubmit() {
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