<template>
    <div class="charaact-container">
      <mt-header title="特色活动">
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="charaact-content">
        <router-link to="/" class="newthree">
          <div class="newthree-left">
            <img src="../assets/tu1.png" alt="">
          </div>
          <div class="newthree-right">
            <h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>
            <div class="newthree-bar">
              <span>2018-04-12 11:08:52</span>
              <span class="newthree-counter">
              <i class="iconfont icon-icon_find"></i>
              133
            </span>
            </div>
          </div>
        </router-link>
        <router-link to="/" class="newthree">
          <div class="newthree-left">
            <img src="../assets/tu1.png" alt="">
          </div>
          <div class="newthree-right">
            <h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>
            <div class="newthree-bar">
              <span>2018-04-12 11:08:52</span>
              <span class="newthree-counter">
              <i class="iconfont icon-icon_find"></i>
              133
            </span>
            </div>
          </div>
        </router-link>
        <div class="charaact-tail">
          <span>没有更多数据了...</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "charaact"
    }
</script>

<style scoped>
  .charaact-content .newthree{
    position: relative;
    display: flex;
    width: 100%;
    height: 100px;
    padding: 10px;
    border-bottom: 1px solid #969696;
  }
  .newthree-left img{
    width: 80px;
    height: 80px;
    position: absolute;
    left: 8px;
    top: 8px;
  }
  .newthree-right{
    position: relative;
    height: 80px;
    margin-left: 87px;
  }
  .newthree-right h3{
    height: 48px;
    font-size: 16px;
    color: #222;
  }
  .newthree-bar{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 10px;
  }
  .newthree-counter{
    float: right;
  }
  .newthree-counter i{
    color: #ccc;
    padding-right: 5px;
  }
  .charaact-tail{
    padding-top: 7px;
    text-align: center;
  }
  .charaact-tail span{
    font-size: 14px;
    color: #666;
  }
</style>
