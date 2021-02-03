<template>
  <li>
		<span v-bind:class="{done: todo.completed}">
			<input type="checkbox  form-control" v-on:change="todo.completed = !todo.completed">
			<strong>{{index+1}}</strong>
			{{todo.title}}
		</span>
  </li>
</template>

<script>
export default{
  name: 'SimpleTodoItem',

  data() {
    return {
      title: 'title'
    }
  },
  /*get from local storage*/
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