<template>
    <div class="polstudy-container">
      <mt-header title="政治学习" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="polstudy-content">
        <router-link to="/" class="polstudynew">
          <div class="polstudy-left">
            <img src="../assets/tu1.png" alt="">
          </div>
          <div class="polstudy-right">
            <h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>
            <div class="polstudy-bar">
              <span>2018-04-12 11:08:52</span>
              <span class="polstudy-counter">
              <i class="iconfont icon-icon_find"></i>
              133
            </span>
            </div>
          </div>
        </router-link>
        <router-link to="/" class="polstudynew">
          <div class="polstudy-left">
            <img src="../assets/tu1.png" alt="">
          </div>
          <div class="polstudy-right">
            <h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>
            <div class="polstudy-bar">
              <span>2018-04-12 11:08:52</span>
              <span class="polstudy-counter">
              <i class="iconfont icon-icon_find"></i>
              133
            </span>
            </div>
          </div>
        </router-link>
        <div class="polstudy-tail">
          <span>没有更多数据了...</span>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "polstudy"
    }
</script>

<style scoped>
  .polstudy-content{
    overflow-y: auto;
    margin-top: 50px;
  }
  .polstudy-content .polstudynew{
    position: relative;
    display: flex;
    width: 100%;
    height: 100px;
    padding: 10px;
    border-bottom: 1px solid #969696;
  }
  .polstudy-left img{
    width: 80px;
    height: 80px;
    position: absolute;
    left: 8px;
    top: 8px;
  }
  .polstudy-right{
    position: relative;
    height: 80px;
    margin-left: 87px;
  }
  .polstudy-right h3{
    height: 48px;
    font-size: 16px;
    color: #222;
  }
  .polstudy-bar{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 10px;
  }
  .polstudy-counter{
    float: right;
  }
  .polstudy-counter i{
    color: #ccc;
    padding-right: 5px;
  }
  .polstudy-tail{
    padding-top: 7px;
    text-align: center;
  }
  .polstudy-tail span{
    font-size: 14px;
    color: #666;
  }
</style>
