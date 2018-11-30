<template>
    <div class="modiperin-container">
      <mt-header title="修改个人信息">
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
        <router-link to="/perinfor" slot="right">保存</router-link>
      </mt-header>

      <div class="modiperin-content">
        <form class="modiperin-list">
          <div class="info-item">
            <span>头像</span>
            <img src="../assets/touxi.png" alt="">
          </div>
          <div class="info-item">
            <span>姓名</span>
            <span><input type="text" name="username" id="username"></span>
          </div>
          <div class="info-item">
            <span>身份证</span>
            <span>11111111</span>
          </div>
          <div class="info-item">
            <span>家庭住址</span>
            <span><input type="text" name="hometown" id="hometown"></span>
          </div>
          <div class="info-item">
            <span>工作地址</span>
            <span><input type="text" name="address" id="address"></span>
          </div>
          <div class="info-item">
            <span>民族</span>
            <span><input type="text" name="nation" id="nation"></span>
          </div>
          <div class="info-item">
            <span>微信号</span>
            <span><input type="text" name="wxNum" id="wxNum"></span>
          </div>
          <div class="info-item">
            <span>qq号</span>
            <span><input type="text" name="qqNum" id="qqNum"></span>
          </div>
          <div class="info-item">
            <span>性别</span>
            <span class="sexopti">
              <input type="radio" name="sex" value="1"><i>男</i>
              <input type="radio" name="sex" value="0"><i>女</i>
            </span>
          </div>
          <div class="info-item">
            <span>最高学历</span>
            <span><input type="text" name="education" id="education"></span>
          </div>
          <div class="info-item">
            <span>职称</span>
            <span><input type="text" name="jobRank" id="jobRank"></span>
          </div>
          <div class="info-item">
            <span>薪资水平</span>
            <span><input type="number" name="salary" id="salary"></span>
          </div>
          <div class="info-item">
            <span>入党时间</span>
            <span><input type="date" name="joinPartyTime" id="joinPartyTime"></span>
          </div>
          <div class="info-item">
            <span>党费最后缴纳时间</span>
            <span><input type="date" name="lastPayTime" id="lastPayTime"></span>
          </div>
          <div class="info-item">
            <span>当前身份</span>
            <span>
              <select name="partyStatus">
                <option value="2">党员</option>
                <option value="1">预备党员</option>
                <option value="0">积极分子</option>
              </select>
            </span>
          </div>
        </form>
      </div>


    </div>
</template>

<script>
    export default {
        name: "modiperin"
    }
</script>

<style scoped>
  @import "../../style/modiperin.css";
  input[type=radio] {
    -webkit-appearance: radio;
  }
</style>
