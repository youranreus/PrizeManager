<template>
  <div id="header">
    <div id="header-container" class="clear">
      <div class="left" id="header-left">
        <h3>团委管理系统</h3>
      </div>
      <div class="right" id="header-right">
        <nav>
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
          <router-link to="/u/login">登录</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Header"
}
</script>

<style scoped>
#header{
  height: 80px;
  line-height: 80px;
  background: RGBA(250,250,250,1);
}
#header-container{
  width: 800px;
  margin: 0 auto;
}
#header-container h3{
  padding: 0;
  margin: 0;
  font-size: 1.5rem;
}
nav a{
  font-size: large;
  margin-left: 15px;
  position: relative;
}
nav a::before{
  content: '·';
  position: absolute;
  color: #07F;
  font-size: 350%;
  top: -40px;
  left: -13px;
  opacity: 0;
  transition: all .3s;
}
.router-link-exact-active::before{
  opacity: 1;
}
</style>