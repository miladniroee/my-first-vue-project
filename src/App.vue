<template>
  <NavBar :Title="name" />
  <img alt="Vue logo" src="./assets/logo.png">
  <NamesComp :Data="data">
  <template v-slot:ali>
    <p> My name is Milad</p>
  </template>
  </NamesComp>
</template>

<script>
import NavBar from './components/NavBar.vue';
import NamesComp from './components/NamesComp.vue';

export default {
  data() {
    return {
      data: [
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
      ],
      name: "Names"
    }
  },
  components: {
    NavBar,
    NamesComp
}
}
</script>

<style scoped>
img {
  display: block;
  margin: auto
}
</style>
