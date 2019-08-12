<template>
    <div v-if="!loading">
        <BussinessTop2 :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BussinessTop2>
        <div class="top border-box">
          <div class="public-title c-c-c">
            <div class="title pf">一个线上营销H5能为我们带来什么？</div>
            <div class="space"></div>
          </div>
          <div class="list1 pf c-c-c" v-for="(i,k) in list1" :key = k>
              <div class="title c-c-c">
                <div class="text">{{i.title}}</div>
                <div class="bg"></div>
              </div>
              <div class="info">{{i.info}}</div>
              <div class="box">
                <div class="item r-nw-fs-fs" v-for="(i1,k1) in i.list" :key = k1>
                  <div class="point">·</div>
                  <div>{{i1}}</div>
                </div>
              </div>
          </div>
          <div class="public-title c-c-c">
            <div class="title pf">一个线上营销H5能为我们带来什么？</div>
            <div class="space"></div>
          </div>
          <div class="list2 pf r-nw-c-c" v-for="(i,k) in list2" :key = k>
              <img :src="i.icon" class="icon" alt=""> 
              <div class="info-box c-c-fs">
                <div class="title">{{i.title}}</div>
                <div class="info pf-light">{{i.info}}</div>
              </div>
          </div>
        </div>
        <div class="bottom border-box">
          <img v-if="site" class="bottom-img" :src="site + '/img/business/h5/img.png'" alt="">
          <div class="public-title c-c-c">
              <div class="title pf">聚米营销合作伙伴</div>
              <div class="space"></div>
          </div>
          <div class="friends">
              <swiper class="swiper r-nw-fs-c" @change="friendsChange">
                <swiper-item class="item border-box r-w-sb-c" v-for="(i,k) in friends" :key = k>
                    <div class="logo-box c-c-c" v-for="(i1,k1) of i" :key = k1>
                      <img mode='widthFix' :src="i1.logo" alt="">
                    </div>
                </swiper-item>
              </swiper>
              <div class="dots r-nw-c-c">
                <div class="item" v-for="(i,k) in friends" :key = k :style="{background:currentFriend != k ? 'rgba(224, 224, 224, .4)':'rgba(224, 224, 224,1)'}"></div>
              </div>
          </div> 
        </div>
    </div>
</template>
<script>
import BussinessTop2 from "../../components/business-top2";
import { friends_list } from "../../api/friends.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "营销H5开发",
        subTitle:
          "互联网+时代，一切可能从官网开始用心打造企业与客户的最强连接器",
        bg: this.$site + "/img/business/h5/top-bg.png"
      },
      list1: [
        {
          title: "获取流量",
          info: "在这个流量如黄金的时代，让你用更低成本获取流量",
          list: [
            "游戏+抽奖的模式，让活动更具吸引力，用户参与活动也",
            "强大的涨粉功能，利用社交力量裂变传播，流量成本减少"
          ]
        },
        {
          title: "活跃用户",
          info:
            "有效解决用户流失严重的问题，通过与用户的持续互动来增强用户粘性",
          list: [
            "内设连续参与机制，真正做到增强用户粘性",
            "持续更新节日、热点活动，让你随时随地做活动"
          ]
        },
        {
          title: "转化用户",
          info: "活动最后一步，多款促销工具助你转化客户成交订单",
          list: [
            "支持多种奖品类型，微信卡券、电商优惠券、门店优惠券...转化客户更快捷",
            "促销工具花样多多，砍价、拼团...转化手段更多样",
            "支持好友助力，订单成交翻倍如此简单"
          ]
        }
      ],
      list2: [
        {
          icon: this.$site + "/img/business/h5/list1-1.png",
          title: "上百种营销玩法，总有一款适合你",
          info: "朋友圈刷屏的活动原型都在这里"
        },
        {
          icon: this.$site + "/img/business/h5/list1-2.png",
          title: "自定义外观，满足品牌个性展示",
          info: "更有海量节日行业模板更你选择"
        },
        {
          icon: this.$site + "/img/business/h5/list1-3.png",
          title: "营销功能强大，活动效果更有保障",
          info: "强制关注。好友助力/红包派发等强大功能助你达成目的"
        }
      ],
      friends: [],
      currentFriend: 0
    };
  },
  onLoad() {
    friends_list({ type: 3 }).then(res => {
      this.friends = res.data;
      this.loading = false;
    });
  },
  onShow() {
    wx.hideTabBar();
  },
  onShareAppMessage() {
    
  },
  methods: {
    // 合作伙伴滑动
    friendsChange(e) {
      this.currentFriend = e.mp.detail.current;
    }
  },
  components: {
    BussinessTop2
  }
};
</script>
<style lang="scss" scoped>
.public-title {
  margin: 80rpx 0 62rpx 0;
  font-size: 30rpx;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  .title {
    font-size: 26rpx;
    line-height: 21rpx;
    font-weight: 500;
    color: rgba(102, 102, 102, 1);
  }
  .space {
    width: 56rpx;
    height: 4rpx;
    background: rgba(104, 102, 248, 1);
    margin: 34rpx 0 0 0;
  }
}
.top {
  background-color: white;
  padding: 1rpx 0;
  .list1 {
    margin: 60rpx 0 50rpx 0;
    width: 100%;
    .title {
      position: relative;
      width: 100%;
      font-size: 29rpx;
      height: 40rpx;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      .text {
        position: absolute;
        z-index: 2;
      }
      .bg {
        width: 148rpx;
        height: 31rpx;
        background: rgba(232, 245, 255, 1);
        border-radius: 13rpx;
        position: absolute;
        bottom: 10rpx;
        left: 50%;
        transform: translate(-45%, 50%);
        z-index: 1;
      }
    }
    .info {
      margin: 42rpx 0;
      width: 571rpx;
      font-size: 28rpx;
      font-weight: 500;
      color: rgba(85, 85, 85, 1);
      line-height: 42rpx;
    }
    .box {
      width: 570rpx;
      .item {
        width: 95%;
        font-size: 22rpx;
        margin: 25rpx 0;
        font-weight: 400;
        color: rgba(119, 119, 119, 1);
        line-height: 33rpx;
        .point {
          margin: 0 5rpx 0 0;
          font-weight: 500;
        }
      }
    }
  }
  .list2 {
    width: 690rpx;
    height: 206rpx;
    margin: 29rpx auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 6px 4rpx 13rpx 0px rgba(174, 174, 174, 0.19);
    border-radius: 10rpx;
    .icon {
      width: 126rpx;
      height: 127rpx;
      margin: 0 35rpx 0 0;
    }
    .info-box {
      .title {
        font-size: 26rpx;
        font-weight: bold;
        color: rgba(85, 85, 85, 1);
        line-height: 23rpx;
        margin: 0 0 30rpx 0;
      }
      .info {
        width: 313rpx;
        font-size: 20rpx;
        color: rgba(136, 136, 136, 1);
        line-height: 33rpx;
      }
    }
  }
}
.bottom {
  width: 100%;
  background: white;
  padding: 1rpx 0 180rpx 0;
  .bottom-img {
    width: 100%;
    height: 206rpx;
    margin: 84rpx 0 30rpx 0;
  }
  .friends {
    width: 100%;
    .swiper {
      width: 100%;
      height: 900rpx;
      .item {
        width: 100%;
        padding: 0 45rpx;
        .logo-box {
          width: 45%;
          img {
            width: 80%;
          }
        }
      }
    }
    .dots {
      .item {
        width: 15rpx;
        height: 15rpx;
        border-radius: 50%;
        margin: 0 10rpx;
      }
    }
  }
}
</style>
