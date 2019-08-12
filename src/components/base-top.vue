<template>
    <div class="warp border-box c-fs-c" :style="{height:h + 'rpx'}">
        <img class="bg" :src="bg" alt="">
        <div class="title pf">{{title}}</div>
        <div class="info pf-light">{{subTitle}}</div>
    </div>
</template>
<script>
export default {
  name: "BaseTop",
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
    // 是否是解决方案顶部
    isSolution: {
      type: Boolean,
      default: "fasle"
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
    font-size: 26rpx;
    font-weight: 400;
    letter-spacing: 3rpx;
    color: rgba(255, 255, 255, 0.8);
    margin: 135rpx 0 20rpx 0;
  }
  .info {
    font-size: 19rpx;
    text-align: center;
    font-weight: 200;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
