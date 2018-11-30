<template>
  <div class="xindesummover-container">
    <mt-header title="审核成功" fixed>
      <mt-button icon="back" @click="$router.back()" slot="left">
      </mt-button>
    </mt-header>

    <div class="xindesummover-content">
      <div class="xindesummover-logo">
        <img src="../assets/checkbox.png" alt="">
      </div>
      <div class="statetext1">审核成功</div>
      <router-link to="/xindesum1"><div class="closeBtn">继续提交</div></router-link>
    </div>

  </div>
</template>

<script>
    export default {
        name: "xindesummover"
    }
</script>

<style scoped>
  .xindesummover-content{
    overflow-y: auto;
    background: #fff;
    width: auto;height: auto;
    margin-top: 50px;
  }
  .xindesummover-logo{
    margin-top: 50px;
    text-align: center;
  }
  .xindesummover-logo img{
    width: 92px;
    height: 92px;
  }
  .xindesummover-content .statetext1{
    width: 100%;
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: .13rem;
    margin-bottom: 5px;
  }
  .xindesummover-content .closeBtn {
    width: 4rem;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    background: #c50206;
    color: #fff;
    font-size: 16px;
    text-align: center;
    border-radius: 10px;
    margin-top: 90px;
  }
</style>
