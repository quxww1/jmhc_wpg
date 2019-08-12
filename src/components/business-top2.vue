<template>
    <div class="warp c-fs-fs" :style="{height:h + 'rpx'}">
        <img class="bg" :src="bg" alt="">
        <div class="title pf" :style="{color:xiaoyouxi ? '#8C6D79':''}">{{title}}</div>
        <div class="space" :style="{background:xiaoyouxi ? '#8C6D79':''}"></div>
        <div class="info pf-light" :style="{color:xiaoyouxi ? '#8C6D79':''}">{{subTitle}}</div>
    </div>
</template>
<script>
export default {
  name: "BusinessTop2",
  data() {
    return {};
  },
  props: {
    // 高度
    h: {
      type: String,
      default: "348"
    },
    // 背景图
    bg: {
      type: String,
      required: true
    },
    // 标题
    title: {
      type: String,
      default: ""
    },
    // 副标题
    subTitle: {
      type: String,
      default: ""
    },
    // 是否小游戏
    xiaoyouxi: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
  width: 100%;
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .title {
    font-weight: 400;
    letter-spacing: 3rpx;
    color: rgba(255, 255, 255, 0.8);
    margin: 100rpx 0 0 30rpx;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    line-height: 49rpx;
    font-size: 34rpx;
  }
  .space {
    width: 62rpx;
    height: 3rpx;
    margin: 26rpx 0 42rpx 30rpx;
    background: rgba(255, 255, 255, 1);
  }
  .info {
    width: 350rpx;
    font-weight: 200;
    margin: 0 0 0 30rpx;
    color: rgba(255, 255, 255, 1);
    font-size: 20rpx;
    line-height: 33rpx;
  }
}
</style>
