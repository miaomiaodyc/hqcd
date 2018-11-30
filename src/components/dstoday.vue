<template>
    <div class="dstoday-container">
      <mt-header title="党史上的今天" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="dstoday-wrap">
        <div class="datoday-content">{{item.getData}}</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "dstoday",
      data(){
        return{
          item:{}
        }
      },
      methods:{
        getDs(){
          this.$axios.get("getData").then(res=>{
            console.log(res);console.log(res.data);
            this.item=res.data;
          })
        }
      },
      mounted(){
        this.getDs();
      }
    }
</script>

<style scoped>
  .dstoday-wrap{
    margin-top: 50px;
  }
  .datoday-content{
    overflow-y: auto;
  }
</style>
