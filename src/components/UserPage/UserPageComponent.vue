<template>
  <div id="app">
    <h1 class="heading">Todo application</h1>
    <AddTodo @add-todo="AddTodo" />
    <hr>
    <TodoList v-if="todos.length" v-bind:todos="todos" @remove-todo="removeTodo"/>
    <p v-else>No todos!</p>
  </div>
</template>



<script>
import TodoList from './TodoList.vue'
import AddTodo from './AddTodo.vue'
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
  methods: {
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
    AddTodo(todo){
      this.todos.push(todo)
    }
  },
  components:{
    TodoList,
    AddTodo
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