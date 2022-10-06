<template>
  <div>
    <slot name="ali"></slot>
    <p v-for="(d,i) in Data" :key="i">Name: {{d.name}} | Age: {{d.age}}</p>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
    
export default {
  setup(){
    const Data = inject('Data')

    return { Data }
  }
}
</script>

<style>

</style>