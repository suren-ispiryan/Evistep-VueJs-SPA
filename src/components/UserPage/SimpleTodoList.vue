<template>
  <div>
    <ul>
      <SimpleTodoItem v-for="(todo, i) in todos" v-bind:todo="todo" :key="todo.id" v-bind:index="i"/>
    </ul>
  </div>
</template>

<script>
import SimpleTodoItem from './SimpleTodoItem'
export default{
  name: 'SimpleTodoList',
  props: ["todos"],
  components:{
    SimpleTodoItem
  },
  methods: {

  }
}
</script>



<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>