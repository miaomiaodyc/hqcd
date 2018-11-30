<template>
    <div class="showsf-container">
      <mt-header title="党员亮身份">
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="showsf-content">
        <router-link to="/" class="new2">
          <div class="new2-left">
            <img src="../assets/tu1.png" alt="">
          </div>
          <div class="new2-right">
            <h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>
            <div class="new2-bar">
              <span>2018-04-12 11:08:52</span>
              <span class="new2-counter">
              <i class="iconfont icon-icon_find"></i>
              133
            </span>
            </div>
          </div>
        </router-link>
        <router-link to="/" class="new2">
          <div class="new2-left">
            <img src="../assets/tu1.png" alt="">
          </div>
          <div class="new2-right">
            <h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>
            <div class="new2-bar">
              <span>2018-04-12 11:08:52</span>
              <span class="new2-counter">
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
        name: "showsf"
    }
</script>

<style scoped>
  .showsf-content .new2{
    position: relative;
    display: flex;
    width: 100%;
    height: 100px;
    padding: 10px;
    border-bottom: 1px solid #969696;
  }
  .new2-left img{
    width: 80px;
    height: 80px;
    position: absolute;
    left: 8px;
    top: 8px;
  }
  .new2-right{
    position: relative;
    height: 80px;
    margin-left: 87px;
  }
  .new2-right h3{
    height: 48px;
    font-size: 16px;
    color: #222;
  }
  .new2-bar{
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 10px;
  }
  .new2-counter{
    float: right;
  }
  .new2-counter i{
    color: #ccc;
    padding-right: 5px;
  }

</style>
