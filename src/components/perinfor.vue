<template>
    <div class="perinfor-container">
      <mt-header title="个人信息">
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
        <router-link to="/modiperin" slot="right">编辑</router-link>
      </mt-header>

      <div class="perinfor-content" v-for="item in arr" :key="item._id">
        <div class="perinfor-list" >
          <div class="info-item">
            <span>头像</span>
            <img :src="item.avatar">
          </div>
          <div class="info-item">
            <span>姓名</span>
            <span>{{item.userName}}</span>
          </div>
          <div class="info-item">
            <span>身份证</span>
            <span>{{item.idNum}}</span>
          </div>
          <div class="info-item">
            <span>家庭住址</span>
            <span>{{item.homeAddress}}</span>
          </div>
          <div class="info-item">
            <span>工作地址</span>
            <span>{{item.workAddress}}</span>
          </div>
          <div class="info-item">
            <span>民族</span>
            <span>{{item.nation}}</span>
          </div>
          <div class="info-item">
            <span>微信号</span>
            <span>{{item.weChat}}</span>
          </div>
          <div class="info-item">
            <span>qq号</span>
            <span>{{item.qqNumber}}</span>
          </div>
          <div class="info-item">
            <span>性别</span>
            <span>{{item.sex}}</span>
          </div>
          <div class="info-item">
            <span>最高学历</span>
            <span>{{item.education}}</span>
          </div>
          <div class="info-item">
            <span>职称</span>
            <span>{{item.jobTitle}}</span>
          </div>
          <div class="info-item">
            <span>薪资水平</span>
            <span>{{item.emolument}}</span>
          </div>
          <div class="info-item">
            <span>入党时间</span>
            <span>{{item.enterPartyTime}}</span>
          </div>
          <div class="info-item">
            <span>党费最后缴纳时间</span>
            <span>{{item.paymentTime}}</span>
          </div>
          <div class="info-item">
            <span>当前身份</span>
            <span>{{item.partyStatus}}</span>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "perinfor",
        
        data(){
          return{
            arr:[]
          }
        },
   methods:{
      getUser(){
        this.$axios.get('getUsers').then(res =>{
            console.log(res);
            this.arr=res
        })
      }
    },
    
    mounted(){
    this.getUser();
  }

    }
</script>

<style scoped>
@import "../../style/perinfor.css";
</style>
