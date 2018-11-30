<template>
  <div id="app">
    <router-view></router-view>
    <Tab v-if="isShow" ></Tab>
  </div>
</template>

<script>
  import Tab from '@/base/Tab.vue'
  export default {
    name: 'App',
    components:{
      Tab
    },
    computed:{
      isShow(){
        if(this.$route.name==='shouye' || this.$route.name==='msg' || this.$route.name==='my' || this.$route.name==='myalre'){
          return true;
        }else{
          return false;
        }
      }
    }
  }
</script>

<style>
  @import "../style/init.css";

  .container{
    padding-top:50px;
    padding-bottom:1.12rem;
  }
  *{margin:0;padding:0;}
  a{text-decoration: none;}
  .mint-header{
    height:50px;
    background: #c50206;
  }
  .mint-header-title{
    font-size: 19px;
    font-weight: 400;
  }
</style>
