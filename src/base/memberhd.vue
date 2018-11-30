<template>
    <div class="memberhd-container">
      <mt-header title="党员云互动" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

    <div class="memberhd-content">
 <div class="content" v-for="item in arr" :key="item.id">
          <img :src="item.avater" alt="">
          <p>用户名:{{item.idNum}}</p>
          <p>内容:{{item.content}}</p>
          <p>时间:{{item.updatetime}}</p>  
 </div>
          <button class="btn" @click="getPPeply">回复</button> 
    </div>
</div>

      <!--    <div class="memberhd-list">
           <ul>
            <li class="memberhd-item">
              <div class="item-top clearfix" >
               <div class="top-touxiang">
                 <img src="../assets/touxi.png" alt="">
                </div>
                <div class="top-zhong">
               <div class="top-nickname">my name</div>
                 <div class="top-time">
                    <div class="top-time1">
                    <i class="iconfont icon-shijian"></i>
                      <span>2018-04-15 14:55:47</span>
                   </div>
                  <div class="top-time2">
                 <i class="iconfont icon-laba"></i>
                     <span>公开</span>
               </div>
                  </div>
                 </div>
               <div class="top-right">党员互动</div>
               </div>
               <div class="item-middle">支持我党</div>
              <router-link to="/hfsth" class="item-bottom clearfix">
                <span class="bottom-hf">
                 <i class="iconfont icon-xiaoxi"></i>
                  <span>回复</span>
                 </span>
               </router-link>
             </li> --> 

            <!-- <li class="memberhd-item">
              <div class="item-top clearfix">
                <div class="top-touxiang">
                  <img src="../assets/touxi.png" alt="">
                </div>
                <div class="top-zhong">
                  <div class="top-nickname">my name</div>
                  <div class="top-time">
                    <div class="top-time1">
                      <i class="iconfont icon-shijian"></i>
                      <span>2018-04-15 14:55:47</span>
                    </div>
                    <div class="top-time2">
                      <i class="iconfont icon-laba"></i>
                      <span>公开</span>
                    </div>
                  </div>
                </div>
                <div class="top-right">党员互动</div>
              </div>
              <div class="item-middle">支持我党</div>
              <router-link to="/hfsth" class="item-bottom clearfix">
                <span class="bottom-hf">
                  <i class="iconfont icon-xiaoxi"></i>
                  <span>回复</span>
                </span>
              </router-link>
            </li> -->
          <!-- </ul>
        </div>

        <div class="fabu" @click="handleClick">
          <i class="iconfont icon-add"></i>
        </div>
      </div>

      <mt-popup v-model="popupVisible" position="bottom" modal=false class="memberhd-popup">
        <div class="memberhd-kuang">
          <form class="addsth">
            <textarea></textarea>
            <div class="btns">
              <input type="button" value="发布" class="fb">
              <input type="button" value="取消" class="qx">
            </div>
          </form>
        </div>
      </mt-popup> -->

    
</template>

<script>
    export default {
        name: "memberhd",
      data(){
          return{
            // popupVisible:false,
            arr:[]
          }
      },
      methods:{
        // handleClick(){
        //   this.popupVisible=true
        // },
        getTT(){
          this.$axios.get("getTz").then(res=>{
            console.log(res)
            this.arr=res.data
          })
        },
        getPPeply(){
          this.$axios.post("getReply").then(res=>{
              if(res.code==200){
                this.$router.push({path:'/hfsth'})
              }

          })
        }

      },
      mounted(){
        this.getTT();
      }
    }
</script>

<style scoped>
  @import "../../style/memberhd.css";
</style>
