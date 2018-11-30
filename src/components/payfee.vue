<template>
    <div class="payfee-container">
      <mt-header title="缴纳党费" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="payfee-content">
        <div class="payfee-choice">请选择支付方式</div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "payfee"
    }
</script>

<style scoped>
.payfee-content{margin-top: 50px}
</style>
