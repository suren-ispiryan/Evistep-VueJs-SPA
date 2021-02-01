<template>
  <li>
		<span v-bind:class="{done: todo.completed}">
			<input type="checkbox" v-on:change="todo.completed = !todo.completed">
			<strong>{{index+1}}</strong>
			{{todo.title}}
		</span>
    <button class="rm" @click="removeItems()" v-on:click="$emit('remove-todo', todo.id)">&times;</button>
  </li>
</template>

<script>
export default{
  data() {
    return {
      title: 'title'
    }
  },
  methods: {
    /*delete task*/
    removeItems(){
      let allTasks = JSON.parse(localStorage.getItem('tasksList'));
      let tasksArray = [];
      for (let i in allTasks)
        tasksArray.push(allTasks[i]);
        tasksArray.splice(this.index, 1);
      localStorage.setItem("tasksList", JSON.stringify(tasksArray));
      console.log("task deleted");
    },
  },
  props: {
    todo: {
      required: true
    },
    index: Number
  }
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
.rm{
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}
input{
  margin-right: 1rem;
}
.done{
  text-decoration: line-through;
}
</style>