<template>
    <div class="scoredetails-container">
      <mt-header title="积分明细" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="scoredetails-content">
        <div class="scoredetails-list">

          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼22222</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>
          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>
          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>
          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>
          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>
          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>
          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>
          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>
          <div class="scoredetails-item">
            <div class="scoredetails-icon1">
              <div class="typename">查看新闻眼</div>
              <div class="timefor">2018-04-18 17:26:35</div>
            </div>
            <div class="scoredetails-icon2">+0.1</div>
          </div>

        </div>
        <div class="scoredetails-tail">
          <span>没有更多数据了...</span>
        </div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "scoredetails"
    }
</script>

<style scoped>
  .scoredetails-content{margin-top: 50px}
 .scoredetails-item{
   background: #fff;
   overflow-y: auto;
   left: 0;right: 0;
   width: auto;height: auto;
 }
  .scoredetails-list{padding: 1px 0;}
  .scoredetails-item{
    border: 1px solid #ddd;
    background: white;
    color: #444;
    font-size: 16px;
    position: relative;
    display: block;
    height: 79px;
    margin: -1px;
    padding: 15px;
  }
  .scoredetails-icon1{
    float: left;
  }
 .scoredetails-icon1 .typename{
   display: block;
   font-size: 18px;color: #333;
   margin-bottom: 5px;
 }
 .scoredetails-icon1 .timefor{
   display: block;
   font-size: 14px;
 }
  .scoredetails-icon2{
    float: right;
    color: red;
  }
  .scoredetails-tail{
    padding-top: 7px;
    text-align: center;
  }
  .scoredetails-tail span{
    font-size: 14px;
    color: #666;
  }
</style>
