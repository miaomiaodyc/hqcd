<template>
    <div class="thoughtrep-container">
      <mt-header title="思想汇报" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="thoughtrep-content">
        <div class="thoughtrep-logo">
          <img src="../assets/reviewing.png" alt="">
        </div>
        <div class="statetext">正在审核中</div>
        <router-link to="/horlife"><div class="closeBtn">关闭</div></router-link>
      </div>

    </div>
</template>

<script>
    export default {
        name: "thoughtrep"
    }
</script>

<style scoped>
 .thoughtrep-content{
   overflow-y: auto;
   background: #fff;
   width: auto;height: auto;
   margin-top: 50px;
 }
 .thoughtrep-logo{
   margin-top: 50px;
   text-align: center;
 }
  .thoughtrep-logo img{
    width: 92px;
    height: 92px;
  }
 .thoughtrep-content .statetext{
   width: 100%;
   font-size: 14px;
   color: #666;
   text-align: center;
   margin-top: .13rem;
   margin-bottom: 5px;
 }
 .thoughtrep-content .closeBtn{
   width: 4rem;
   height: 40px;line-height: 40px;
   margin: 0 auto;
   background: #c50206;
   color: #fff;font-size: 16px;
   text-align: center;
   border-radius: 10px;
   margin-top: 90px;
 }
</style>
