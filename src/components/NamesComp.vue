<template>
  <div>
    <slot name="ali"></slot>
    <p v-for="(d,i) in Data" :key="i">Name: {{d.name}} | Age: {{d.age}}</p>
  </div>
</template>

<script>
    
export default {
    props:{
        Data: Array,
    },
}
</script>

<style>

</style>