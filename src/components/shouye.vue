<template>
  <div class="index-container container">
    <!--顶部-->
    <div class="header">
      <div class="header-left">
        <img src="../assets/logo.png" class="header-img">
      </div>
      <router-link to="/login">登录</router-link>
    </div>
    <!--轮播图-->
    <div class="slider">
      <mt-swipe :auto="0" class="wrap">
        <mt-swipe-item v-for="item in arr" :key="item._id">
          <router-link :to="'/xgnewItem?id='+item._id" class="slider-wrap">
            <div class="wrap">
              <img class="tu1" :src="item.img">
              <div class="t1"><p v-text="item.title"></p></div>
            </div>
            </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!--主菜单-->
    <div class="main-menu">
      <div class="row1">
        <router-link to="/xgnews" class="menu-item">
          <div><img src="../assets/icon_01.png" alt=""></div>
          <div class="menu-btn-title">信工新闻眼</div>
        </router-link>
        <router-link to="/horlife" class="menu-item">
          <div><img src="../assets/icon_03.png" alt=""></div>
          <div class="menu-btn-title">掌上组织生活</div>
        </router-link>
        <router-link to="/memberhd" class="menu-item">
          <div><img src="../assets/icon_05.png" alt=""></div>
          <div class="menu-btn-title">党员云互动</div>
        </router-link>
      </div>
      <div class="row2">
        <router-link to="/djyd" class="menu-item">
          <div><img src="../assets/icon_04.png" alt=""></div>
          <div class="menu-btn-title">党建一点通</div>
        </router-link>
        <router-link to="/showsf" class="menu-item">
          <div><img src="../assets/icon_06.png" alt=""></div>
          <div class="menu-btn-title">党员亮身份</div>
        </router-link>
        <router-link to="/dstoday" class="menu-item">
          <div><img src="../assets/icon_02.png" alt=""></div>
          <div class="menu-btn-title">党史上的今天</div>
        </router-link>
      </div>
    </div>
    <!--菜单结束-->
    <div class="banner">
      <img src="../assets/banner02.png">
    </div>
    <!--下菜单-->
    <div class="footer-menu">
      <div class="menu-left"></div>
      <div class="menu-right">
        <div class="row">
          <router-link to="/slearn"></router-link>
          <router-link to="/spai"></router-link>
        </div>
        <div class="row">
          <router-link to="/syscons"></router-link>
          <router-link to="/charaact"></router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    name:'shouye',
    data(){
      return{
        arr:{}
      }
    },
    methods:{
      getSlider(){
        this.$axios.get("getSlider").then(res=>{
          console.log(res);
          this.arr=res.data;
        })
      }
    },
    created(){
      this.getSlider();
    }
  }
</script>

<style scoped>
  @import "../../style/shouye.css";
</style>

