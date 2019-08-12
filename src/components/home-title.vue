<template>
    <div class="warp pf c-c-c" :style="{background:background}">
        <div class="cn" :style="{color:cnColor}">{{cn}}</div>
        <div class="space" :style="{background:spaceColor}"></div>
        <div class="en" :style="{color:enColor}">{{en}}</div>
    </div>
</template>
<script>
export default {
  name: "HomeTitle",
  props: {
    cn: {
      type: String,
      required: true
    },
    cnColor: {
      type: String,
      default: "rgba(51, 51, 51, 1)"
    },
    en: {
      type: String,
      required: true
    },
    enColor: {
      type: String,
      default: "rgba(157, 157, 157, 1)"
    },
    spaceColor:{
        type:String,
        default:"rgba(175, 175, 175, 1)"
    },
    background:{
      type:String,
      default:"white"
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 130rpx;
  padding: 50rpx 0;
  font-weight: 500;
  .cn {
    font-size: 36rpx;
  }
  .en {
    font-size: 19rpx;
  }
  .space {
    width: 67rpx;
    height: 4rpx;
    margin: 25rpx 0 23rpx 0;
    border-radius: 2rpx;
  }
}
</style>
