<template>
  <div id="app">
    <Header/>
    <div id="main-container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import '@/assets/basic.css';
import '@/assets/normalize.css';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
<style>
#app {
  font-family: "微軟正黑體","Droid Serif",Georgia,"Times New Roman","PingFang SC","Hiragino Sans GB","Source Han Sans CN","WenQuanYi Micro Hei","Microsoft Yahei",serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#main-container{
  width: 800px;
  margin: 50px auto;
}
</style>
