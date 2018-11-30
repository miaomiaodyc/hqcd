<template>
    <div class="minzhu-container">
      <mt-header title="掌上组织生活" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="minzhu-content">
        <div class="submitWrap">
          <router-link to="/personalsummary" class="minzhu-item">个人总结</router-link>
          <router-link to="/discuss" class="minzhu-item">民主评议</router-link>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "minzhu"
    }
</script>

<style scoped>
  .minzhu-content{
    margin-top: 50px;
    overflow-y: auto;
    background: #fff;
  }
  .submitWrap{
    position: absolute;
    top: 35%;
    width: 100%;
  }
  .minzhu-item{
    display: block;
    text-align: center;
    width: 50%;
    height: 47px;line-height: 42px;
    background: #ef473a;
    border-color: transparent;
    border-radius: 4px;
    margin: 20px auto;
    color: #fff;font-size: 16px;
  }
</style>
