<template>
   <div class="horlife-content">
     <router-link to="/shouye">
       <mt-header title="掌上组织生活">
         <mt-button icon="back"  slot="left"></mt-button>
       </mt-header>
     </router-link>

     <div class="abo-tu">
       <img src="../assets/timg.jpg" alt="">
     </div>

     <div class="h-life">
       <div class="row1">
         <router-link to="/polstudy" class="hor-option">
           <img src="../assets/icon1.png" alt="">
           <i>政治学习</i>
         </router-link>
         <router-link to="/thoughtrep1" class="hor-option">
           <img src="../assets/icon2.png" alt="">
           <i>思想汇报</i>
         </router-link>
         <router-link to="/xindesum1" class="hor-option">
           <img src="../assets/icon3.png" alt="">
           <i>心得总结</i>
         </router-link>
       </div>
       <div class="row2">
         <router-link to="/minzhu" class="hor-option">
           <img src="../assets/icon4.png" alt="">
           <i>民主评议</i>
         </router-link>
         <router-link to="/findognzt" class="hor-option">
           <img src="../assets/icon5.png" alt="">
           <i>流动党员找组织</i>
         </router-link>
       </div>
     </div>

   </div>
</template>

<script>
    export default {
        name: "horlife",
            methods:{
        back(){
          this.$router.push("/index")
        },
        btnsx(){
          this.$axios.post("getUsers").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/thoughtrep1"})
            }else{
              this.$router.push({path:"/login",query:{mark:"horlife"}})
            }
          })
          this.$axios.post("getIdeas",{kind:1}).then(res => {
            // console.log(res.data);
            if(res.data.type==0||res.data.type==1||res.data.type==2){
              this.$router.push("/xindesummover")
            }else{
              this.$router.push("/thoughtrep1")
            }
          })
        },
        btnxd(){
          this.$axios.post("getUsers").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/thoughtrep1"})
            }else{
              this.$router.push({path:"/login",query:{mark:"horlife"}})
            }
          })
          this.$axios.post("getreport",{kind:2}).then(res => {
            // console.log(res.data);
            if(res.data.type==0||res.data.type==1||res.data.type==2){
              this.$router.push("/xindesummover")
            }else{
              this.$router.push("/thoughtrep1")
            }
          })
        },
        btnmz(){
          this.$axios.post("getInfo").then(res=>{
            // console.log(res.data);
            this.data = res.data.data
            if(res.data.code==200){
              this.$router.push({path:"/zhangshang_mz"})
            }else{
              this.$router.push({path:"/login",query:{mark:"zhangshang"}})
            }
          })
        },
      }
    }
</script>

<style scoped>
  @import "../../style/horlife.css";
</style>
