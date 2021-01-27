<template>
  <div id="app">
    <Header/>
    <div id="main-container">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import '@/assets/basic.css';
import '@/assets/normalize.css';
import '@/assets/yue.css';


export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#main-container{
  width: 800px;
  margin: 50px auto;
}
</style>
