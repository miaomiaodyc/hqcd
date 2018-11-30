<template>
    <div class="slearn-container">
      <mt-header title="随时随地学">
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="slearn-content">
        <router-link to="/" class="newone">
          <div class="newone-left">
            <img src="../assets/tu1.png" alt="">
          </div>
          <div class="newone-right">
            <h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>
            <div class="newone-bar">
              <span>2018-04-12 11:08:52</span>
              <span class="newone-counter">
              <i class="iconfont icon-icon_find"></i>
              133
            </span>
            </div>
          </div>
        </router-link>
        <router-link to="/" class="newone">
          <div class="newone-left">
            <img src="../assets/tu1.png" alt="">
          </div>
          <div class="newone-right">
            <h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>
            <div class="newone-bar">
              <span>2018-04-12 11:08:52</span>
              <span class="newone-counter">
              <i class="iconfont icon-icon_find"></i>
              133
            </span>
            </div>
          </div>
        </router-link>
      </div>

    </div>
</template>

<script>
    export default {
        name: "slearn"
    }
</script>

<style scoped>
  .slearn-content .newone{
    position: relative;
    display: flex;
    width: 100%;
    height: 100px;
    padding: 10px;
    border-bottom: 1px solid #969696;
  }
  .newone-left img{
    width: 80px;
    height: 80px;
    position: absolute;
    left: 8px;
    top: 8px;
  }
  .newone-right{
    position: relative;
    height: 80px;
    margin-left: 87px;
  }
  .newone-right h3{
    height: 48px;
    font-size: 16px;
    color: #222;
  }
  .newone-bar{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 10px;
  }
  .newone-counter{
    float: right;
  }
  .newone-counter i{
    color: #ccc;
    padding-right: 5px;
  }

</style>
