<template>
    <div class="xindesumm-container">
      <mt-header title="正在审核" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="xindesumm-content">
        <div class="xindesumm-logo">
          <img src="../assets/reviewing.png" alt="">
        </div>
        <div class="statetext">正在审核中</div>
        <button  @click="getReport">关闭</button>
      </div>

    </div>
</template>

<script>
  export default {
    name: "xindesumm",
    data(){
      return{
        type:""
      }
    },
    methods:{
      getReport(){
        this.$axios.post("getIdeas",{kind:1}).then(res=>{
          console.log(res)
        this.data=res.data
        })
      },
     
    },
    mounted(){
      this.getReport();
    }
  }
</script>

<style scoped>
  .xindesumm-content{
    overflow-y: auto;
    background: #fff;
    width: auto;height: auto;
    margin-top: 50px;
  }
  .xindesumm-logo{
    margin-top: 50px;
    text-align: center;
  }
  .xindesumm-logo img{
    width: 92px;
    height: 92px;
  }
  .xindesumm-content .statetext{
    width: 100%;
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-top: .13rem;
    margin-bottom: 5px;
  }
  .xindesumm-content .closeBtn{
    width: 4rem;
    height: 40px;line-height: 40px;
    margin: 0 auto;
    background: #c50206;
    color: #fff;font-size: 16px;
    text-align: center;
    border-radius: 10px;
    margin-top: 90px;
  }
</style>
