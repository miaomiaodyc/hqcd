<template>
    <div class="modifypwd-container">
      <mt-header title="修改密码" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="modifypwd-content">
        <form class="login-form">
          旧密码:
          <input type="password" placeholder="旧密码" v-model="user.pwd">
          新密码:
          <input type="password" placeholder="新密码" v-model="user.newPwd">
          确认密码:
          <input type="password" placeholder="确认密码" v-model="user.newPwd">
          <input type="button" value="确定" class="modifypwd-btn" @click="getPwd">
        </form>
      </div>

    </div>
</template>

<script>
  export default {
    name: "modifypwd",
    data(){
      return{
        user:{
          pwd:"",
          newPwd:""
        }
      }
    },
    methods:{
      getPwd(){
          this.$axios.post("getPwd",this.user).then(res=>{
            console.log(res);
            if(res.ret){
              this.$router.push({path:'/login'})
            }
        })
      }
    }
    // created(){
    //   this.getPwd();
    // }
  }
</script>

<style scoped>
  .modifypwd-content{
  overflow-y: auto;
  background: #fff;
  width: auto;height: auto;
  margin-top: 50px;
}
  .login-form{
    width: 5.8rem;
    margin: 0 auto;
    margin-top: 50px;
    font-size: 16px;
  }
  .login-form input{
    /*position: relative;*/
    margin-top: 10px;margin-bottom: 10px;
    padding: 0 5px;
    background: #fff;
    color: #666;font-size: 14px;
    width: 100%;
    height: 0.8rem;
    border: 1px solid #999;border-radius: 5px;
  }
   .login-form .modifypwd-btn{
    background: #ef473a;
     color: #fff;font-size:16px;
    border-color: transparent;
  }
</style>
