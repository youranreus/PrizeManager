<template>
<div id="Login">
  <a-row>
    <a-col :span="8">
    <!--占位-->
    </a-col>
    <a-col :span="8">
      <a-card title="登录">
        <a-input placeholder="账号" v-model="userName"/>
        <br />
        <br />
        <a-input-password v-model="pwd" placeholder="密码"/>
        <br />
        <br />
        <a-popover title="帮助" trigger="click">
          <template slot="content">
            <p>学生账号以xx开头<br>教师账号以yy开头</p>
          </template>
          <a-button type="link" icon="question-circle" shape="circle"></a-button>
        </a-popover>
        <a-button type="primary" style="float:right" @click="Login">GO!</a-button>
      </a-card>
    </a-col>
    <a-col :span="8">
    <!--占位-->
    </a-col>
  </a-row>
</div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  name: "Login",
  data() {
    return {
      userName: '',
      pwd: '',
      message: ['','']
    };
  },
  methods: {
    getStatus(){
      if(this.$store.state.logged === true) {
        this.$router.push({path: '/u/me'});
      }
    },
    Login(){
      if(this.userName && this.pwd)
      {
        Cookies.set('status', 'logged')
        Cookies.set('token', 'testToken')
        this.$store.commit('login','testToken')
        this.message[0] = '登录成功'
        this.message[1] = '正在跳转'
        this.openNotificationWithIcon('success',this.message[0],this.message[1])
        setTimeout(()=>{
          this.$router.push({path:'/u/me'});
        },"2000");
      }
      else
      {
        this.message[0] = '登录失败'
        this.message[1] = '是不是还有什么没有填？'
        this.openNotificationWithIcon('error',this.message[0],this.message[1])
      }

    },
    openNotificationWithIcon(type,msg,des) {
      this.$notification[type]({
        message: msg,
        description: des,
      });
    }
  },
  created() {
    this.getStatus()
  }
}
</script>

<style scoped>
#Login{
  margin-top: 200px;
}
</style>