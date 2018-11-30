<template>
    <div class="perscore-container">
      <mt-header title="个人量化积分" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="perscore-content">
        <div class="perscore-banner">
          <img src="../assets/jifen.png" alt="">
          <span>20</span>
        </div>

        <router-link to="/scoredetails" class="perscore-item">
          <img src="../assets/lxjf.png" alt="">
          <span>积分明细</span>
          <i>></i>
        </router-link>

        <div class="scoreregu">
          <span>积分规则</span>
          <img src="../assets/wenhao.png" alt="">
        </div>

        <div class="perscore-list">
          <div class="perscore-item1">
            <span class="perscore-icon1">登陆APP</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">完善个人信息</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">查看积分</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">按时交纳党费</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">查看通知</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">了解学院工作动态</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">上交思想汇报经审核通过</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">主动学习相关文件</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">认真撰写心得总结并上交，经审核通过</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">提交个人总结，并参与评议</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">积极参与互动</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">学习党建知识</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">学习党史</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">创先争优事迹</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">学党章，学习近平总书记系列讲话</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">用镜头记录两学一做过程中令人感动的人和事</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">关注并积极参与特色活动</span>
            <span class="perscore-icon2">5</span>
          </div>
          <div class="perscore-item1">
            <span class="perscore-icon1">制度化、常态化建设</span>
            <span class="perscore-icon2">5</span>
          </div>
        </div>

      </div>


    </div>
</template>

<script>
    export default {
        name: "perscore"
    }
</script>

<style scoped>
  @import "../../style/perscore.css";
</style>
