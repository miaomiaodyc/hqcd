<template>
    <div class="discuss-container">
      <mt-header title="民主评议" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="discuss-content">
        <div class="discuss-wrap">
          <p class="noteHead">评议须知</p>
          <div class="noteContent">
            <p>
              在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：
            </p>
            <p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>
            <p>2、参加“两学一做”学习教育情况；</p>
            <p>3、参加党的组织生活、按要求交纳党费；</p>
            <p>4、学习情况、业务能力提高情况；</p>
            <p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>
            <p>6、联系群众、关心群众、服务群众情况；</p>
            <p>7、遵守党章党规、法律法规和学校规章制度情况。</p>
          </div>
          <div class="noteChoice">
            <div class="clearfix">
              <div class="selectBtn">
                <select class="branchSelect fleft">
                  <option value="0">请选择</option>
                  <option value="1">信息工程学院教工第一党支部</option>
                  <option value="2">信息工程学院教工第二党支部</option>
                  <option value="3">信息工程学院学生党支部</option>
                  <option value="4">信息工程学院学生流动党支部（北京）</option>
                </select>
              </div>
              <router-link to="cppartymem"><div class="nextBtn fleft">下一步</div></router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "discuss"
    }
</script>

<style scoped>
  @import "../../style/discuss.css";
</style>
