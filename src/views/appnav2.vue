<template>
<div>

  <div class="block">
    <span class="demonstration">条件选择2的内容</span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'appnav2',
  data () {
    return {
      item:[1,2,3,4]
    }
  },
  methods: {
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

</style>
