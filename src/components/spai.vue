<template>
    <div class="spai-container">
      <mt-header title="随时随地拍">
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="scroll-content">
        <div class="con-list">
          <router-link to="/" class="spai-item">
            <div class="sptu">
              <img src="../assets/lbtu.png" alt="">
            </div>
            <div class="spline">扫雪除冰暖人心---学院组织开展师生党员志愿扫雪活动</div>
          </router-link>
          <router-link to="/" class="spai-item">
            <div class="sptu">
              <img src="../assets/lbtu.png" alt="">
            </div>
            <div class="spline">扫雪除冰暖人心---学院组织开展师生党员志愿扫雪活动</div>
          </router-link>
          <router-link to="/" class="spai-item">
            <div class="sptu">
              <img src="../assets/lbtu.png" alt="">
            </div>
            <div class="spline">扫雪除冰暖人心---学院组织开展师生党员志愿扫雪活动</div>
          </router-link>
          <router-link to="/" class="spai-item">
            <div class="sptu">
              <img src="../assets/lbtu.png" alt="">
            </div>
            <div class="spline">扫雪除冰暖人心---学院组织开展师生党员志愿扫雪活动</div>
          </router-link>
          <router-link to="/" class="spai-item">
            <div class="sptu">
              <img src="../assets/lbtu.png" alt="">
            </div>
            <div class="spline">扫雪除冰暖人心---学院组织开展师生党员志愿扫雪活动</div>
          </router-link>
          <router-link to="/" class="spai-item">
            <div class="sptu">
              <img src="../assets/lbtu.png" alt="">
            </div>
            <div class="spline">扫雪除冰暖人心---学院组织开展师生党员志愿扫雪活动</div>
          </router-link>
          <router-link to="/" class="spai-item">
            <div class="sptu">
              <img src="../assets/lbtu.png" alt="">
            </div>
            <div class="spline">扫雪除冰暖人心---学院组织开展师生党员志愿扫雪活动</div>
          </router-link>
        </div>
        <div class="spai-tail">
          <span>没有更多数据了...</span>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "spai"
    }
</script>

<style scoped>
  @import "../../style/spai.css";
</style>
