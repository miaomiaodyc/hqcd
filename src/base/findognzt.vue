<template>
    <div class="findognzt-container">
      <mt-header title="流动党员找组织" fixed>
        <mt-button icon="back" @click="$router.back()" slot="left">
        </mt-button>
      </mt-header>

      <div class="findognzt-wrap">
        <div id="bd"></div>
      </div>


    </div>
</template>

<script>
    export default {
        name: "findognzt",
      data(){
          return{
            map:null
          }
      },
      methods:{
          initMap(){
            var mp = new BMap.Map('bd');
            mp.centerAndZoom(new BMap.Point(113.035956,34.489444), 13);
            var marker = new BMap.Marker(new BMap.Point(113.035956,34.489444));
            mp.addOverlay(marker);
            var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM, offset: new BMap.Size(20, 60)});
            mp.addControl(top_right_navigation);
            var label = new BMap.Label("这里是嵩山哦!!",{offset:new BMap.Size(20,-10)});
            marker.setLabel(label);
            var geolocationControl = new BMap.GeolocationControl();
            mp.addControl(geolocationControl);
          }
      },
      created(){
          this.$nextTick(()=>{
            this.initMap();
          })
      }
    }
</script>

<style scoped>
  .findognzt-wrap{
    position: fixed;
    top:0;bottom:0;left: 0;right:0;
    width: 100%;
    height: 100%;
  }
  #bd{width: 100%;height: 100%;}
</style>
