<template>
  <div class="my-container">
    <mt-header title="我的党建">
      <mt-button icon="back" @click="$router.back()" slot="left">
      </mt-button>
    </mt-header>

    <div class="up-t">
      <div class="hsc">
        <img src="../assets/touxi.png" alt="">
      </div>
      <div class="no-deng">
        <router-link to="/login">my name</router-link>
      </div>
    </div>

    <div class="my-content">
      <router-link to="/perinfor">
        <img src="../assets/person.png" class="my-content-left">
        <span>个人信息</span>
        <i>></i>
      </router-link>
      <router-link to="/perscore">
        <img src="../assets/lxjf.png" class="my-content-left">
        <span>个人量化积分</span>
        <i>></i>
      </router-link>
      <router-link to="/modifypwd">
        <img src="../assets/xgmm.png" class="my-content-left">
        <span>修改密码</span>
        <i>></i>
      </router-link>
      <router-link to="/payfee">
        <img src="../assets/icon3.png" class="my-content-left">
        <span>党费缴纳</span>
        <i>></i>
      </router-link>
    </div>

    <router-link to="/login" class="exde">
      <input type="button" value="退出登录" class="buttonex">
    </router-link>

  </div>
</template>

<script>
    export default {
        name: "myalre"
    }
</script>

<style scoped>
  @import "../../style/myalre.css";
</style>
