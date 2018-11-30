<template>
  <mt-header :title="title" fixed>
    <mt-button icon="back" @click="$router.back()" slot="left">
    </mt-button>
  </mt-header>
</template>

<script>
    export default {
      name: "Header",
      computed:{
          title(){
            return this.$route.meta.title;
          }
       }
    }
</script>

<style>
/*.mint-header-button{*/
  /*z-index: 2;*/
  /*font-size: 20px;*/
/*}*/
</style>
