<template>
  <li>
		<span v-bind:class="{done: newBindTasks.completed}">
			<strong class="pr-4">{{index+1}}</strong>
			<input type="checkbox" v-on:change="newBindTasks.completed = !newBindTasks.completed">
      {{newBindTasks}}
		</span>
  </li>
</template>



<script>
export default {
  name: 'SimpleTodoItem',

  data() {
    return {
      title: 'title'
    }
  },

  props: [
    "index",
    "newBindTasks",
  ],

/*mounted() {
    if (this.title.trim()){
      const newBindTasks = {
        id: Date.now(),
        title: this.title,
        completed: false
      }
      this.$emit('add-todo', newBindTasks)
      this.title=""
    }
}*/

}
</script>


<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}
input{
  margin-right: 1rem;
}
.done{
  text-decoration: line-through;
}
</style>