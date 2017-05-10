<template>
  <div id="app">
    <el-row class="bg-purple-dark">
      <el-col :span="4"><div class="grid-content"></div></el-col>
      <el-col :span="16">
        <div class="grid-content text-right">
           <el-menu  :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1"><router-link to="/appnav1">条件选择1</router-link></el-menu-item>
              <el-submenu index="2">
                <template slot="title"><router-link to="/appnav2">条件选择2</router-link></template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-submenu>
              <el-menu-item index="3"><a href="https://www.ele.me" target="_blank"><router-link to="/appnav3">条件选择3</router-link></a></el-menu-item>
            </el-menu>
        </div>
      </el-col>
      <el-col :span="4"><div class="grid-content"></div></el-col>
    </el-row>
    <div class="main">
         <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'appnav',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .grid-content {
    min-height: 70px;
    line-height: 70px;
  }
  .text-right{
    text-align: right;
  }
  .row-bg {
    background-colobg-purple-darkr: #f9fafc;
  }
  .el-menu{
    background-color: none;
  }

  .main{
    padding: 40px 0;
  }
</style>