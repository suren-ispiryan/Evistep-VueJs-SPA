<template>
  <li>
		<span v-bind:class="{done: newBindTasks.completed}">
			<strong class="pr-4">{{index+1}}</strong>
			<input type="checkbox"
             v-on:change="newBindTasks.completed = !newBindTasks.completed"
             v-on:click="disappearSendInfoToAdmin"
             v-model="choose">
      {{newBindTasks}}
		</span>
  </li>
</template>



<script>
export default {
  name: 'SimpleTodoItem',

  data() {
    return {
      title: 'title',
      choose: ''
    }
  },

  props: [
    "index",
    "newBindTasks",
  ],

  mounted() {
    let deletedTasksList = localStorage.getItem('deletedTasksList');
    if (!deletedTasksList) {
      localStorage.setItem('deletedTasksList',JSON.stringify([{"tasks":this.task}]));
    }
  },

  methods: {
    disappearSendInfoToAdmin() {
// call chosentasks from chosen tasklist from localstorage
      let getChosentasks = JSON.parse(localStorage.getItem('ChosenTasks'));
      let NewChosenTasksInArray = [];
      let newarray = [];
      for (let z in getChosentasks) {
        NewChosenTasksInArray.push(getChosentasks[z]); // all chosen user tasks
// check clicked tasks
        if (NewChosenTasksInArray[z] == this.newBindTasks) {
          newarray.push(NewChosenTasksInArray[z]);
          let binedTasks = JSON.parse(localStorage.getItem('deletedTasksList'));
          let NewbinedTasks = [];
          for (let z in binedTasks) {
            NewbinedTasks.push(binedTasks[z]); // all chosen user tasks
          }
// add new clicked tasks
          NewbinedTasks.push(newarray);
// put updated stasks beck to localstorage
          localStorage.setItem('deletedTasksList', JSON.stringify(NewbinedTasks));
          break;
        }
      }
    }

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
  background-color: greenyellow;
}
</style>