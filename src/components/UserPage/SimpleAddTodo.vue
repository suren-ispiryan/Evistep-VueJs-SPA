<template>
  <form @submit.prevent="onSubmit">
<!--    <input type="text" v-model="title">-->
    <button type="submit" @click="submitAnswer()">Submit</button>
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
    mounted() {
      /*let tasks = localStorage.getItem('tasksList');
      if (!tasks) {
        localStorage.setItem('tasksList',JSON.stringify([{"title":"title"}]));
      }*/
    },

    /*submitInfo() {
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
    },*/
    /*onSubmit() {
      if (this.title.trim()){
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
        this.title=""
      }
    }*/
  }
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