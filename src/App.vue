<template>
  <NavBar :Title="name"/>

  <img alt="Vue logo" src="./assets/logo.png">

  <router-link to="/" style="margin-right:1rem">Home</router-link>
  <router-link to="/app">App</router-link>
  <br/>
  <router-view></router-view>
</template>

<script>

import { ref, reactive, provide } from "vue";
import NavBar from "./components/NavBar";
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
        let name = ref("Ladoya");

        provide("Data", data);

        return { name, data };
    },
    components: { NavBar }
}
</script>

<style scoped>
img {
  display: block;
  margin: auto
}
</style>
