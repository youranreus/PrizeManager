<template>
  <div class="single-page yue">
    <h2 align="center">{{ title }}</h2>
    <div v-html="content">

    </div>
  </div>
</template>

<script>
export default {
  name: "single-page",
  data(){
    return {
      title:'',
      content:''
    }
  },
  methods:{
    getContent(){
      let that = this;
      this.$axios.get("http://localhost:3003/pages?slot="+this.$route.params.slot).then(response => {
        that.$nextTick(() => {
          that.title = response.data[0].title;
          that.content = response.data[0].content;
        })
      });
    }
  },
  mounted() {
    this.getContent()
  }
}
</script>

<style scoped>

</style>