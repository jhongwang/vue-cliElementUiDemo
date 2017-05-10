<template>
  <div id="app">
    <div class="header">
       <div class="containerbox container-fluid">
         <div class="row">
            <div class="col-md-3 text-left logo">签到榜单</div>
            <div class="col-md-9 text-right">
                <router-link to="/poi">POI</router-link>
                <router-link to="/cate">类别</router-link>
                <router-link to="/city">城市</router-link>
                <router-link to="/home">室内地图</router-link>
            </div>
         </div>
       </div>
    </div>
    <div class="main">
         <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
