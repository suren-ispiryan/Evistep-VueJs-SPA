<template>
  <div>
    <li>
      <span>{{ (this.i)+1 }}</span>
      <span>{{ this.exportArr }}</span>
      <span>{{ this.userEmail }}</span>
      <span>{{ this.status }}</span>
    </li>
    <hr>
  </div>
</template>



<script>
export default {
  name: "ProgressItem",
  props: [
    "userEmail",
    "exportArr",
      "i",
      "status"
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
span{
  text-align: center;
  width: 24%;
}
</style>