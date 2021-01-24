<template>
  <div class="logout">
    <p>成功登出</p>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "logout",
  created() {
    let that = this;
    that.$nextTick(() => {
      setTimeout(()=>{
        Cookies.set('status', ' ')
        Cookies.set('token', ' ')
        this.$store.commit('logout')
        this.$router.push({path:'/u/login'});
      },"2000");
    })
  }
}
</script>

<style scoped>
.logout p{
  padding: 200px 0;
  text-align: center;
  font-size: 4rem;
  color: #999;
  font-weight: 200;
}
</style>