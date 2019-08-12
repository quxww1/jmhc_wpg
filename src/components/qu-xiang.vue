<template>
    <cover-view class="warp r-nw-sa-c">
            <cover-image class="bg" v-if="site" :src="site+'/tabs/bg.png'" alt=""></cover-image>
            <cover-view class="item c-fe-c" :class="[k == 2 ? 'center':'']" @click="skip(i,k)" v-for="(i,k) in list" :key = k>
                <cover-image class="img" :src="i.iconPath" alt="" v-if="num != k"></cover-image>
                <cover-image class="img" :src="i.selectedIconPath" v-if="num == k" alt=""></cover-image>
                <cover-view class="text" :style="{color:num == k ? '#22509E':''}">{{i.text}}</cover-view>
            </cover-view>
    </cover-view>
</template>
<script>
export default {
  name: "QuXiang",
  props: {
    num: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      site:this.$site,
      list: [
        {
          text: "首页",
          pagePath: "/pages/home/main",
          iconPath: this.$site + "/tabs/home.png",
          selectedIconPath: this.$site + "/tabs/home-active.png"
        },
        {
          text: "合作案例",
          pagePath: "/pages/case/main",
          iconPath: this.$site + "/tabs/case.png",
          selectedIconPath: this.$site + "/tabs/case-active.png"
        },
        {
          text: "聚米互创",
          pagePath: "/pages/jumihc/main",
          iconPath: this.$site + "/tabs/jumihc.png",
          selectedIconPath: this.$site + "/tabs/jumihc.png"
        },
        {
          text: "聚米学院",
          pagePath: "/pages/news/main",
          iconPath: this.$site + "/tabs/news.png",
          selectedIconPath: this.$site + "/tabs/news-active.png"
        },
        {
          text: "联系我们",
          pagePath: "/pages/cantact/main",
          iconPath: this.$site + "/tabs/cantact.png",
          selectedIconPath: this.$site + "/tabs/cantact-active.png"
        }
      ]
    };
  },
  methods: {
    skip(i, k) {
      let url = i.pagePath;
      wx.switchTab({ url: url });
    }
  }
};
</script>
<style lang="scss" scoped>
.warp {
  width: 100%;
  height: 146rpx;
  bottom: 0;
  position: fixed;
  z-index: 999;
  .bg {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: -1;
    bottom: 0;
  }
  .item {
    height: 100%;
    padding: 0 0 15rpx 0;
    width: 25%;
    .text {
      font-size: 20rpx;
      font-family: MicrosoftYaHei;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
    }
    .img {
      width: 45rpx;
      height: 45rpx;
      margin: 0 0 5rpx 0;
    }
  }
  .center {
    .img {
      width: 92rpx;
      height: 92rpx;
      margin: 0 0 5rpx 0;
    }
  }
}
</style>
