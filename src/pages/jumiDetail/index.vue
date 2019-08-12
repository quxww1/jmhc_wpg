<template>
    <div v-if="!loading">
      <div class="top border-box">
        <img class="top-bg" :src="site + '/img/jumi/detail-top.png'" alt="">
        <div class="title-box pf top-title c-c-c">
          <div class="cn">聚米互创科技成都有限公司</div>
          <div class="en">JuMi mutual technology chengdu co. LTD</div>
          <div class="space"></div>
        </div>
        <div class="intd pf">{{info.introduce}}</div>
      </div>
      <div class="bottom border-box">
        <div class="title-box pf c-c-c">
          <div class="cn">企业愿景</div>
          <div class="en">Enterprise vision</div>
          <div class="space"></div>
        </div>
        <div class="vision">
          <div class="item c-fs-c" v-for="(i,k) in info.vision" :key = k>
              <div class="title-box r-nw-fs-c">
                <img :src="site + '/img/jumi/blue-start.png'" alt="">
                <div class="title">{{i.title}}</div>
              </div>
              <div class="content-box c-fs-fs">
                <div class="content" v-for="(i1,k1) in i.content" :key = k1>{{i1}}</div>
              </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { about } from "../../api/about.js";
import { friends_list } from "../../api/friends.js";
import { introduce } from "../../api/intd.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      info: {}
    };
  },
  onLoad() {
    introduce().then(res => {
      this.info = res.data;
      this.loading = false;
    });
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.top-bg {
  width: 100%;
}
.title-box {
  background: white;
  width: 100%;
  .cn {
    font-size: 32rpx;
    font-weight: normal;
    color: rgba(102, 102, 102, 1);
  }
  .en {
    font-size: 19rpx;
    font-weight: 500;
    color: rgba(136, 136, 136, 1);
    opacity: 0.5;
    margin: 15rpx 0 16rpx;
  }
  .space {
    width: 65rpx;
    height: 5rpx;
    background: rgba(8, 80, 164, 1);
    border-radius: 3rpx;
  }
}
.top-title {
  margin: -60rpx 0 0 0;
}
.top {
  background: white;
  padding: 0 0 89rpx;
  .intd {
    width: 683rpx;
    text-indent: 1cm;
    font-size: 26rpx;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 51rpx;
    margin: 57rpx auto 0;
  }
}
.bottom {
  margin: 20rpx 0 0;
  background: white;
  padding: 44rpx 0 129rpx;
  .vision {
    width: 686rpx;
    margin: 66rpx auto 0;
    .item {
      .title-box {
        img {
          width: 30rpx;
          height: 28rpx;
          margin: 0 15rpx 0 0;
        }
        .title {
          font-size: 26rpx;
          font-weight: 500;
          color: black;
          line-height: 40px;
        }
      }
      .content-box {
        margin: 20rpx 0;
        width: 100%;
        font-size: 26rpx;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
        line-height: 51rpx;
      }
    }
  }
}
</style>
