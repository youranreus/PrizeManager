<template>
<div>
  <a-row>
    <a-col :span="18" :push="6">
      <div class="main yue">
        <h2 style="margin: 0;">我的</h2>

        <p>当是某些操作页面或者管理页面时，偏向于双栏布局，方便用户的使用</p>
      </div>
    </a-col>
    <a-col :span="6" :pull="18">
      <sidebar/>
    </a-col>
  </a-row>
</div>
</template>

<script>
import sidebar from '@/components/User/sidebar.vue'
export default {
  name: "me",
  components:{
    sidebar
  }
}
</script>

<style scoped>
.main{
  padding-left: 20px;
}
</style>