<template>
  <div>
    <li>
      <span>{{ this.exportArr }}</span>
      <span>{{ this.userEmail }}</span>
    </li>
    <hr>
  </div>
</template>



<script>
export default {
  name: "ProgressItem",
  props: [
    "userEmail",
    "exportArr"
  ]
}
</script>



<style scoped>
li{
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
</style>