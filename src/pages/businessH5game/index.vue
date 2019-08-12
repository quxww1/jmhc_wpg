<template>
    <div v-if="!loading">
        <BussinessTop2 :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BussinessTop2>
        <div class="top">
          <div class="public-title r-nw-c-c">
            <div class="title pf">H5小游戏，极速制作，多渠道推广</div>
          </div>
          <img class="img" v-if="site" :src="site + '/img/business/h5game/img1.png'" alt="">
        </div>
        <div class="top2 border-box">
          <div class="public-title r-nw-c-c">
            <div class="title pf">游戏化营销，让营销变得简单，让营销变得有趣</div>
          </div>
          <div class="list border-box r-w-sb-fs">
              <div class="item c-c-c" v-for="(i,k) in list1" :key = k>
                  <div class="title-box pf r-nw-c-c" >
                    <img  :src="i.icon" alt="">
                    <div class="title">{{i.title}}</div>
                  </div>
                  <div class="info pf">{{i.info}}</div>
              </div>
          </div>
        </div>
        <div class="fn">
          <div class="public-title r-nw-c-c">
            <div class="title pf">丰富的功能设置</div>
          </div>
          <div class="content r-nw-c-c">
            <div class="left">
              <div class="item border-box r-nw-fs-c" @click="checkCurrentFn(i,k)" :class="[fnCurrent == k? 'active':'']" v-for="(i,k) in fn" :key = k>
                <img class="icon" mode='aspectFit' v-if="fnCurrent != k" :src="i.icon" alt="">
                <img class="icon" mode='aspectFit' v-if="fnCurrent == k" :src="i.selectIcon" alt="">
                <div class="title pf">{{i.title}}</div>
              </div>
            </div>
            <div class="right c-c-c">
              <img mode='widthFix' :src="fn[fnCurrent].img" alt="">
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="public-title r-nw-c-c">
            <div class="title pf">精准的传播数据分析</div>
          </div>
          <img class="img" :src="list2[current].img" alt="">
          <div class="choose pf">选择分析模式：</div>
          <div class="icon-box r-nw-c-c">
            <img  :src="i.icon" @click="checkBottom(i,k)" :class="[current == k ? 'active':'']" v-for="(i,k) in list2" :key = k  alt="">
          </div>
        </div>
    </div>
</template>
<script>
import BussinessTop2 from "../../components/business-top2";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "H5小游戏开发",
        subTitle:
          "互联网+时代，一切可能从官网开始用心打造企业与客户的最强连接器",
        bg: this.$site + "/img/business/h5game/top-bg.png"
      },
      list1: [
        {
          icon: this.$site + "/img/business/h5game/list1-1.png",
          title: "快速进入",
          info: "扫描二维码或者点击游戏网址即可体验，无需下载游戏"
        },
        {
          icon: this.$site + "/img/business/h5game/list1-2.png",
          title: "高度参与",
          info: "休闲有趣的方式用户更容易接受，并与用户形成良好互动"
        },
        {
          icon: this.$site + "/img/business/h5game/list1-3.png",
          title: "分享传播",
          info: "用户在炫耀心理和奖品的刺激下，容易主动分享，传播游戏"
        },
        {
          icon: this.$site + "/img/business/h5game/list1-4.png",
          title: "简单好玩",
          info: "玩家容易上手，丰富玩家在等车和排队等碎片化的时间"
        },
        {
          icon: this.$site + "/img/business/h5game/list1-5.png",
          title: "转化率高",
          info: "玩家在游戏中潜移默化的接受相关促销推广信息"
        }
      ],
      fn: [
        {
          icon: this.$site + "/img/business/h5game/fn-icon1.png",
          selectIcon: this.$site + "/img/business/h5game/fn-select-icon1.png",
          title: "强制吸粉",
          img: this.$site + "/img/business/h5game/fn-img1.png"
        },
        {
          icon: this.$site + "/img/business/h5game/fn-icon2.png",
          selectIcon: this.$site + "/img/business/h5game/fn-select-icon2.png",
          title: "自定义参与地区",
          img: this.$site + "/img/business/h5game/fn-img2.png"
        },
        {
          icon: this.$site + "/img/business/h5game/fn-icon3.png",
          selectIcon: this.$site + "/img/business/h5game/fn-select-icon3.png",
          title: "中奖概率",
          img: this.$site + "/img/business/h5game/fn-img3.png"
        },
        {
          icon: this.$site + "/img/business/h5game/fn-icon4.png",
          selectIcon: this.$site + "/img/business/h5game/fn-select-icon4.png",
          title: "虚拟参与人数",
          img: this.$site + "/img/business/h5game/fn-img4.png"
        },
        {
          icon: this.$site + "/img/business/h5game/fn-icon5.png",
          selectIcon: this.$site + "/img/business/h5game/fn-select-icon5.png",
          title: "口令红包",
          img: this.$site + "/img/business/h5game/fn-img5.png"
        }
      ],
      fnCurrent: 0,
      list2: [
        {
          img: this.$site + "/img/business/h5game/an-img1.png",
          icon: this.$site + "/img/business/h5game/an-icon1.png"
        },
        {
          img: this.$site + "/img/business/h5game/an-img2.png",
          icon: this.$site + "/img/business/h5game/an-icon2.png"
        }
      ],
      current: 0
    };
  },
  onLoad() {
    this.loading = false;
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  methods: {
    checkCurrentFn(i, k) {
      this.fnCurrent = k;
    },
    checkBottom(i, k) {
      this.current = k;
    }
  },
  components: {
    BussinessTop2
  }
};
</script>
<style lang="scss" scoped>
.public-title {
  margin: 57rpx 0;
  font-size: 30rpx;
  font-family: RTWSYueRoudGoDemo-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  .title {
    font-size: 26rpx;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 21rpx;
  }
}
.top {
  width: 100%;
  height: 572rpx;
  padding: 23rpx 0;
  background: rgba(255, 255, 255, 1);
  .img {
    width: 690rpx;
    height: 293rpx;
    margin: 84rpx auto 0;
    display: block;
  }
}
.top2 {
  width: 100%;
  padding: 34rpx 0 60rpx;
  margin: 0 0 20rpx 0;
  .list {
    width: 100%;
    padding: 0 30rpx;
    .item {
      width: 334rpx;
      height: 203rpx;
      margin: 10rpx 0;
      background: rgba(255, 255, 255, 1);
      .title-box {
        margin: 0 0 22rpx 0;
        img {
          width: 44rpx;
          height: 44rpx;
          margin: 0 18rpx 0 0;
        }
        .title {
          font-size: 24rpx;
          font-weight: 500;
          color: rgba(51, 51, 51, 1);
        }
      }
      .info {
        width: 299rpx;

        font-size: 20rpx;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
        line-height: 35rpx;
      }
    }
  }
}
.fn {
  width: 100%;
  height: 652rpx;
  background: rgba(255, 255, 255, 1);
  padding: 34rpx 0;
  .content {
    width: 690rpx;
    margin: 20rpx auto;
    .left {
      width: 37%;
      .item {
        width: 100%;
        height: 89rpx;
        padding: 0 0 0 20rpx;
        .icon {
          height: 31rpx;
          max-width: 35rpx;
          margin: 0 20rpx 0 0;
        }
        .title {
          font-size: 22rpx;
          font-weight: 500;
          color: rgba(165, 165, 165, 1);
          line-height: 9rpx;
        }
      }
      .active {
        background: rgba(34, 80, 158, 1);
        .title {
          font-size: 22rpx;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 9rpx;
        }
      }
    }
    .right {
      width: 63%;
      img {
        width: 70%;
      }
    }
  }
}
.bottom {
  width: 100%;
  height: 971rpx;
  padding: 34rpx 0;
  .img {
    width: 639rpx;
    height: 472rpx;
    display: block;
    margin: 0 auto 90rpx;
  }
  .choose {
    font-size: 22rpx;
    font-weight: 500;
    color: rgba(136, 136, 136, 1);
    line-height: 17rpx;
    margin: 0 0 37rpx 35rpx;
  }
  .icon-box {
    width: 100%;
    img {
      width: 51rpx;
      height: 66rpx;
      margin: 0 35rpx;
      opacity: 0.7;
    }
    .active {
      opacity: 1;
    }
  }
}
</style>
