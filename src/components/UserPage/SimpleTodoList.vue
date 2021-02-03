<template>
  <div>
    <ul>
      <SimpleTodoItem v-for="(tasksThroughArray, i) in tasksThroughArray"
                      v-bind:tasksThroughArray="tasksThroughArray" :key="tasksThroughArray.task"
                      v-bind:index="i"/>
    </ul>
  </div>
</template>

<script>
import SimpleTodoItem from './SimpleTodoItem'
export default{
  name: 'SimpleTodoList',
  props: ["tasksThroughArray"],
  components:{
    SimpleTodoItem
  },
}
</script>



<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>