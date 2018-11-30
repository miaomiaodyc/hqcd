<template>
  <div class="personalsummary-container">
    <mt-header title="心得总结" fixed>
      <mt-button icon="back" @click="$router.back()" slot="left">
      </mt-button>
    </mt-header>

    <div class="personalsummary-content">
      <div class="upload">
        <label id="imgwrap">
          <input type="file" name="file" accept="image/jpeg,image/png" @change="up" id="file-input">
          <img :src="item.img" v-if="item.img">
          <img src="../assets/upload.png" alt="">
        </label>
        <!--<div class="custom-wrap" style="display: none;">-->
        <!--<div class="custom-spinner">-->
        <!--<div style="text-align: right">-->
        <!--<div class="vue-simple-spinner" style="margin: 0 auto;border-radius: 100%;border-width: 4px;border-style: solid;border-color: rgba(0,0,0,0) rgb(255,255,255) rgb(255,255,255);border-image: initial;width: 64px;height: 64px;"></div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
      </div>
      <router-link to="/xindesumm">
        <div class="personalsummary-submit">
          <div class="personalsummary-sub" @click="getUp">提交审核</div>
        </div>
      </router-link>
    </div>


  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "thoughtrep1",
    data(){
      return{
        item:{
          img:''
        },
        token:''
      }
    },
    methods:{
      up($event){
        console.log($event);
        var file=$event.target.files[0];
        var form=new FormData();
        form.append("file",file);
        form.append("token",this.token);

        axios.post("https://upload-z1.qiniup.com",form,{
          headers:{"Content-Type":"multipart/form-data"}
        }).then(res=>{
          console.log(res);
          this.img=res.data.url;
        })
      },
      getToken(){
        axios.get("http://up.yaojunrong.com/getToken").then(res=>{
          this.token=res.data.data;
        })
      },
      upLoad(){
        this.$axios.post("ideas",{img:this.item.img,kind:1}).then(res=>{
          console.log(res)
          if(res.data.type==0){
                alert("提交成功")
                this.$router.push('/xindesumm')
          }else{
            alert:('提交失败')
          }
          
        })
      },getUp(){
        this.$axios.post("getIdeas",{kind:1}).then(res=>{
          console.log(res)
          this.data=res.data
          if(res.data.type==1){
            this.$router.push('/xindesummover')
          }
        })
      }
    },
    created(){
      this.getToken();
      this.getUp()
    }
  }
</script>

<style scoped>
  .personalsummary-content{
    margin-top: 50px;
    overflow-y: auto;
    background: #fff;
  }
  .upload #imgwrap{
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
    width: 6.33rem;
    height: 3.333rem;
    /*border: 1px dashed #bbb;*/
    border-radius: 4px;
    margin: 1px;
    padding: 10px;
    margin-left: -9px;
    /*float: left;*/
    /*background: url("../assets/upload.png") no-repeat;*/
    /*-webkit-background-size: 100%;*/
    /*background-size: 100%;*/
  }
  #file-input{
    display: none;
  }
  .icon-xinzeng{
    font-size: 50px;
    color: #bbb;

  }
  .upload #imgwrap img{
    float: left;
    width: 150px;
    height: 150px;
    margin-left: 10px;
  }
  .custom-wrap{
    position: fixed;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 2;
  }
  .custom-spinner{
    position: absolute;
    top: 50%;
    left: 50%;
    background: rgba(0,0,0,.5);
    padding: 50px;
    border-radius: 10%;
  }
  .vue-simple-spinner{white-space: nowrap;}
  .personalsummary-submit{
    position: absolute;
    bottom: 70px;
    width: 100%;
    text-align: center;
  }
  .personalsummary-sub{
    display: block;
    height: 47px;line-height: 42px;
    text-align: center;
    border-color: transparent;
    border-radius: 4px;
    background: #ef473a;
    color: #fff;font-size: 16px;
    margin-top: 10px;margin-bottom: 10px;
    padding: 0 12px;
  }
</style>
