<template>
    <div class="num-text c-c-c pf">
        <img :src="bg" alt="">
        <p class="text">{{text}}</p>
    </div>
</template>
<script>
export default {
  name: "numtext",
  props: {
    bg: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.num-text {
  width: 190rpx;
  height: 122rpx;
  margin: 100rpx auto;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
  .text {
    position: relative;
    z-index: 1;
    font-size: 25rpx;
    font-weight: 500;
    transform: translateY(4rpx);
    color: rgba(51, 51, 51, 1);
  }
}
</style>
