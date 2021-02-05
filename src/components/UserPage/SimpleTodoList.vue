<template>
  <div>
    <ul>
      <SimpleTodoItem v-for="(newBindTasks, i) in newBindTasks"
                      v-bind:newBindTasks="newBindTasks"
                      v-bind:index="i" :key="newBindTasks.newBindTasksID"/>
    </ul>
  </div>
</template>



<script>
import SimpleTodoItem from './SimpleTodoItem'
export default{
  name: 'SimpleTodoList',
  components:{
    SimpleTodoItem
  },

  props:[
    "newBindTasks",
  ],

}
</script>



<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>