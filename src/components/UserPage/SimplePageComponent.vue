<template>
  <div id="app">
    <h1 class="heading">Todo application</h1>
    <SimpleAddTodo/>
    <hr>
    <SimpleTodoList v-if="todos.length" v-bind:todos="todos"/>
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import SimpleTodoList from './SimpleTodoList.vue'
import SimpleAddTodo from './SimpleAddTodo.vue'
export default{
  name: 'UserPageComponent',
  data() {
    return {
      todos: [
        /*{id: 1, title: "action1", completed: false},
        {id: 2, title: "action2", completed: false},
        {id: 3, title: "action3", completed: false}*/
      ]
    }
  },

  components:{
    SimpleTodoList,
    SimpleAddTodo
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
</style>
