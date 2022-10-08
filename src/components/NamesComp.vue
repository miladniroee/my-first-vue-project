<template>
  <div>
    <p>{{Route.id}}</p>
    <slot name="ali"></slot>
    <p v-for="(d,i) in Data" :key="i">Name: {{d.name}} | Age: {{d.age}}</p>
  </div>
</template>

<script>
import { inject } from '@vue/runtime-core'
    import { useRoute } from 'vue-router'
    
export default {
  setup(){
    const Data = inject('Data')
    let Route = useRoute()
    Route = Route.params
    return { Data , Route }
  }
}
</script>

<style>

</style>