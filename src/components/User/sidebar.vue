<template>
<div id="sidebar">
  <div class="section">
    <li>我的奖状</li>
    <li>我的证书</li>
    <li>其他荣誉</li>
  </div>
  <div class="section">
    <li>我的信息</li>
    <li>我的xx</li>
    <li>其他xx</li>
  </div>
  <div class="section">
    <li>bla bla</li>
  </div>
</div>
</template>

<script>
export default {
name: "sidebar"
}
</script>

<style scoped>
#sidebar{
  padding-right: 10px;
}
.section{
  background: rgba(250,250,250,1);
  border-radius: 10px;
  margin-bottom: 30px;
  overflow: hidden;
  padding-top: 10px;
  padding-bottom: 10px;
}
.section li{
  list-style-type: none;
  display: block;
  padding: 10px 15px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  -webkit-transition: .2s ease-out all;
  -moz-transition: .2s ease-out all;
  -ms-transition: .2s ease-out all;
  -o-transition: .2s ease-out all;
  transition: .2s ease-out all;
}
/*.section li:first-of-type{*/
/*  padding-top: 15px;*/
/*}*/
/*.section li:last-of-type{*/
/*  padding-bottom: 15px;*/
/*}*/

.section li:hover{
  background: black;
  color:#fff;
}

</style>