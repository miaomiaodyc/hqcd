<template>
  <div class="footer">
    <router-link to="/shouye">
      <i class="iconfont icon-dangwugongkai"></i>
      <span>首页</span>
    </router-link>
    <router-link to="/msg">
      <i class="iconfont icon-xiaoxi"></i>
      <span>通知早知道</span>
    </router-link>
    <router-link to="/myalre">
      <i class="iconfont icon-wode"></i>
      <span>我的党建</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Tab"
  }
</script>

<style scoped>
  .footer{
    position:fixed;
    left:0;
    bottom:0;
    width:100%;
    background: #fafbfe;
    height:50px;
    display: flex;
  }
  a{
    flex:1;
    display:flex;
    flex-direction:column;
    color:#999999;
    justify-content: center;
    align-items: center;
  }
  i{
    display: block;
    font-size: 28px;
    margin-bottom: 1px;
  }
  span{
    font-size: 12px;
  }
  a.router-link-active{
    border-top:2px solid #ef473a;
    color:#ef473a;
  }
</style>
