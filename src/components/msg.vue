<template>
   <div class="msg-container">
     <mt-header title="通知早知道">
       <mt-button icon="back" @click="$router.back()" slot="left">
       </mt-button>
     </mt-header>

     <div class="msg-container">
       <div class="msg-content" v-for="item in arr" :key="item._id">
         <router-link :to="'/xgnewItem?id='+item._id" class="not">
           <div class="msg-laba">
             <img src="../assets/laba.png" alt="">
           </div>
           <div class="msg-right">
             <div class="notice-title">{{item.title}}</div>
             <div class="notice-time">{{item.updateTime}}</div>
           </div>
         </router-link>
       </div>
     </div>
     <div class="msg-tail">
       <span>没有数据了...</span>
     </div>

   </div>
</template>

<script>
  export default {
    name: "msg",
    data(){
      return{
        arr:[]
      }
    },
    methods:{
      getNews(){
        this.$axios.get("getNews",{type:3}).then(res=>{
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
  /*内容*/
  .msg-content{overflow-y: auto}
  .msg-content .not{
    color: #666;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    display: flex;
    width: 100%;
    height: 85px;
  }
  .msg-laba{
    text-align: center;
    padding: 25px 0 18px;
    flex: 0 0 20%;
    display: block;
    width: 100%;
  }
  .msg-laba img{
    width: 36px;
    height: 36px;
  }
  .msg-right .notice-title{
    flex: 1;
    display: block;
    color: #555;
    font-size: 15px;
    padding: 13px 25px 3px 5px;
  }
  .msg-right .notice-time{
    margin-left: 5px;
    color: #777;
    font-size: 8px;
  }
/*尾部*/
  .msg-tail{
    padding-top: 7px;
    text-align: center;
  }
  .msg-tail span{
    font-size: 14px;
    color: #666;
  }
</style>
