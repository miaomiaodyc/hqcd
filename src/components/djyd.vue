<template>
    <div class="djyd-container">
      <mt-header title="党建一点通" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="djyd-wrap">
        <div class="djyd-content" v-for="item in arr" :key="item._id">
          <router-link :to="'/xgnewItem?id='+item._id" class="new1">
            <div class="new1-left">
              <img :src="item.img" alt="">
            </div>
            <div class="new1-right">
              <h3>{{item.title}}</h3>
              <div class="new1-bar">
                <span>{{item.updateTime}}</span>
                <span class="new1-counter">
                <i class="iconfont icon-icon_find"></i>
                  133
                </span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="djyd-tail">
        <span>没有更多数据了...</span>
      </div>

    </div>
</template>

<script>
  export default {
    name: "djyd",
    data(){
      return{
        arr:[]
      }
    },
    methods:{
      getNews(){
        this.$axios.get("getNews",{type:2}).then(res=>{
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
  @import "../../style/djyd.css";
</style>
