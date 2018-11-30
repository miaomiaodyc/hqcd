<template>
<div class="xgnewItem-container">
  <mt-header title="信工新闻眼" fixed>
    <mt-button icon="back" @click="$router.back()" slot="left">
    </mt-button>
  </mt-header>

  <div class="xgnewItem-wrap">
    <h2>{{item.title}}</h2>
    <div class="xgnewItem-content" v-html="item.contentText"></div>
  </div>

</div>
</template>

<script>
  // import axios from 'axios';
  export default {
    name: "xgnewItem",
    data(){
      return{
        item:{}
      }
    },
    methods:{
      getNews(){
        this.$axios.post("getNews",{id:this.$route.query.id,type:1}).then(res=>{
          console.log(res)
          this.item=res.data;
          console.log(res.data)
        })
      }
    },
    mounted(){
      this.getNews();
    }
  }
</script>

<style scoped>
.xgnewItem-wrap{
  overflow-y: auto;
  background: #fff;
  width: auto;height: auto;
  margin-top: 50px;
  padding: 10px;
}
.xgnewItem-wrap h2{
  font-size: 24px;
  font-weight: 500;
  color: #000;
  line-height: 1.2;
  margin-bottom: 10px;
}
  .xgnewItem-content{
    font-size: 15px;
    line-height: 2;
  }
  /*p{*/
    /*margin: 0 0 10px;*/
  /*}*/
</style>
