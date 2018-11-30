<template>
    <div class="hfsth-container">
      <mt-header title="党员云互动" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="hfsth-content">
        <div class="hfsth-list">
          <ul>
            <li class="hfsth-item">
              <div class="item-top clearfix">
                <div class="top-touxiang1">
                  <img src="../assets/touxi.png" alt="">
                </div>
                <div class="top-zhong1">
                  <div class="top-nickname1">my name</div>
                  <div class="top-time1">
                      <i class="iconfont icon-shijian"></i>
                      <span>2018-04-15 14:55:47</span>
                  </div>
                </div>
              </div>
              <div class="item-middle1">支持我党</div>
            </li>
          </ul>
        </div>

        <div class="shuju">
          <span>还没有数据..</span>
        </div>

        <div class="hfsth-comment">
          <label class="com-lab">
            <input type="text" placeholder="评论内容">
          </label>
          <button>评论</button>
        </div>

      </div>


    </div>
</template>

<script>
    export default {
        name: "hfsth"
    }
</script>

<style scoped>
  .hfsth-content{
    overflow-y: auto;
    background: #EFEFF4;
    width: auto;height: auto;
    margin-top: 50px;
    height: 667px;
  }
  .hfsth-item{
    margin-bottom: 10px;
    background: #fff;
    border: 1px solid #EFEFF4;
    color: #444;
    position: relative;
    display: block;
    padding: 16px;
    font-size: 16px;
    margin: 10px;
  }
  .hfsth-item .top-touxiang1{
    width: 33px;
    height: 33px;
    float: left;
  }
  .hfsth-item .top-touxiang1 img{
    width: 33px;
    height: 33px;
    border-radius: 50%;
  }
  .top-zhong1{
    margin-left: 10px;
    margin-top: 0;
    margin-bottom: 5px;
    float: left;
  }
  .top-time1{
    font-size: 12px;
    display: block;
    width: 210px;
    height: 21px;
    clear: both;
  }
  .top-time1 .iconfont{
    font-size: 12px;
  }
  .item-top{
    margin-bottom: 10px;
  }
  .shuju{
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
  }
  .hfsth-comment{
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    font-size: 16px;
    position: absolute;
    bottom: 0;
  }
  .com-lab input{
    border: 1px solid #c50206;
    background: #fff;
    border-radius: 4px;
    padding: 0 8px;
    width: 87%;height: 33px;
  }
  button{
    border-radius: 4px;
    background:  #c50206;
    color: #fff;
    width: 34px;height: 31px;
    margin-left: 6px;
  }
</style>
