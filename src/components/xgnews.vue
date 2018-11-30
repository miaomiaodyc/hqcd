<template>
  <div class="xgnews-container">
    <mt-header title="信工新闻眼" fixed>
      <mt-button icon="back" @click="$router.back()" slot="left">
      </mt-button>
    </mt-header>

    <!--<router-link :to="'/newsItem?id='+item._id">-->
      <!--<div class="item" v-for="item in arr" :key="item._id">-->
        <!--<p v-text="item.img">我是图片</p>-->
        <!--<h3 v-text="item.title">我是标题</h3>-->
        <!--<p class="content" v-text="item.contentText">我是内容</p>-->
        <!--<p class="time" v-text="item.updateTime">我是时间</p>-->
      <!--</div>-->
    <!--</router-link>-->

    <div class="xgnews-wrap">
      <div class="xgnews-content" v-for="item in arr" :key="item._id">
        <router-link :to="'/xgnewItem?id='+item._id" class="new">
          <!--<span>{{item.type}}</span>-->
          <div class="new-left">
            <img :src="item.img" alt="">
          </div>
          <div class="new-right">
            <h3>{{item.title}}</h3>
            <div class="new-bar">
              <span>{{item.updateTime}}</span>
              <span class="new-counter">
                <i class="iconfont icon-icon_find"></i>
                133
              </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="xgnews-tail">
      <span>没有更多数据了...</span>
    </div>

  </div>
</template>

<script>
    export default {
        name: "xgnews",
      data(){
          return{
            arr:[]
          }
      },
      methods:{
          getNews(){
        this.$axios.post("getNews",{type:1}).then(res=>{
          console.log(res)
          console.log(res.data);
          this.arr=res.data;
        })
          }
      },
      created(){
          this.getNews();
      }
    }
</script>

<style scoped>
  @import "../../style/xgnews.css";
</style>
