<template>
 <div>
     <app-nav></app-nav>
 </div>

</template>

<script>
import Vue from 'vue';
import appNav from './views/appNav.vue';

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{ //局部组件
    'app-nav': appNav
  }
}
</script>

<style>
</style>
