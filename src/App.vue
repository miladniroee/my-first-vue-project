<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <router-link to="/">Go to Home</router-link>
  <router-link to="/app">Go to About</router-link>
  <router-view></router-view>
</template>

<script>

import { ref, reactive, provide } from "vue";
export default {
  setup() {
    let data = reactive([
      {
        name: "Milad",
        age: 23
      },
      {
        name: "Ali",
        age: 19
      },
      {
        name: "Yaser",
        age: 30
      },
      {
        name: "Gholi",
        age: 42
      }
    ]);
    let name = ref("Names");
    provide('Data', data)
    return { name, data }
  },


}
</script>

<style scoped>
img {
  display: block;
  margin: auto
}
</style>
