<template>
    <div v-if="!loading">
        <BussinessTop2 xiaoyouxi=1 :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BussinessTop2>
        <div class="top border-box">
          <div class="public-title r-nw-c-c">
            <div class="title pf">微信小游戏</div>
            <div class="info pf">优势</div>
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
        <div class="provide">
          <img class="bg" v-if="site"  :src= "site + '/img/business/wxgame/our-bg-phone.png'" alt="">
          <div class="box border-box">
              <div class="public-title r-nw-c-c">
                <div class="title pf">我们为你</div>
                <div class="info pf">提供</div>
              </div>
              <img class="img1"  v-if="site" :src="site + '/img/business/wxgame/our-img.png'" alt="">
              <div class="public-title r-nw-c-c">
                <div class="title pf">辅助功能完善</div>
                <div class="info pf"></div>
              </div>
              <div class="list r-nw-sa-c">
                <div class="item" v-for="(i,k) in list2" :key = k>
                  <img :src="i.icon" alt="">
                  <div class="title">{{i.title}}</div>
                </div>
              </div>
          </div>
        </div>
        <div class="bring">
            <img v-if="site" class="bg"  :src="site + '/img/business/wxgame/what-bg.png'" alt="">
            <div class="box">
              <div class="public-title r-nw-c-c">
                <div class="title pf">能给你带来什么</div>
                <div class="info pf"></div>
              </div>
              <img v-if="site"  :src="site + '/img/business/wxgame/what-img.png'" alt="">
            </div>
        </div>
        <div class="case border-box">
          <div class="public-title r-nw-c-c">
                <div class="title pf">精品</div>
                <div class="info pf">案例</div>
          </div>
          <swiper class="swiper r-nw-fs-c" @change="change1">
              <swiper-item class="item border-box r-nw-c-c"  v-for="(i,k) in cases" :key = k>
               <img mode='widthFix' v-for="(i1,k1) in i.show_images" :key = k1 :src="i1" alt="">  
              </swiper-item>
          </swiper>
          <div class="dots r-nw-c-c">
             <div :class="[currentSwiper1 == k ? 'active':'']" class="item" v-for="(i,k) in cases" :key = k>
             </div>
          </div>
        </div>
        <div class="friends border-box">
            <div class="public-title r-nw-c-c">
                <div class="title pf">他们</div>
                <div class="info pf">都在用</div>
            </div>
            <div class="friends-box">
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
import { multi_cases } from "../../api/case.js";
import { friends_list } from "../../api/friends.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "微信小游戏定制开发",
        subTitle: "策划、美术、研发铁三角团队，丰富案例，高端品质",
        bg: this.$site + "/img/business/wxgame/top-bg.png"
      },
      list1: [
        {
          icon: this.$site + "/img/business/wxgame/list1-1.png",
          title: "快速进入",
          info: "扫描二维码或者点击游戏网址即可体验，无需下载游戏"
        },
        {
          icon: this.$site + "/img/business/wxgame/list1-2.png",
          title: "高度参与",
          info: "休闲有趣的方式用户更容易接受，并与用户形成良好互动"
        },
        {
          icon: this.$site + "/img/business/wxgame/list1-3.png",
          title: "分享传播",
          info: "用户在炫耀心理和奖品的刺激下，容易主动分享，传播游戏"
        },
        {
          icon: this.$site + "/img/business/wxgame/list1-4.png",
          title: "简单好玩",
          info: "玩家容易上手，丰富玩家在等车和排队等碎片化的时间"
        },
        {
          icon: this.$site + "/img/business/wxgame/list1-5.png",
          title: "转化率高",
          info: "玩家在游戏中潜移默化的接受相关促销推广信息"
        }
      ],
      list2: [
        {
          icon: this.$site + "/img/business/wxgame/list2-1.png",
          title: "奖品设置"
        },
        {
          icon: this.$site + "/img/business/wxgame/list2-1.png",
          title: "卡券核销"
        },
        {
          icon: this.$site + "/img/business/wxgame/list2-1.png",
          title: "数据监测"
        },
        {
          icon: this.$site + "/img/business/wxgame/list2-1.png",
          title: "报表导出"
        }
      ],
      // 案例展示
      cases: [],
      currentSwiper1: 0,
      // 合作伙伴
      friends: [],
      currentFriend:0
    };
  },
  onLoad() {
    multi_cases({ cate: 2 }).then(res => {
      this.cases = res.data;
      this.loading = false;
    });
    friends_list({ type: 2 }).then(res => {
      this.friends = res.data;
    });
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  methods: {
    change1(e) {
      this.currentSwiper1 = e.mp.detail.current;
    },
    // 合作伙伴滑动
    friendsChange(e){
      this.currentFriend = e.mp.detail.current;
    },
  },
  components: {
    BussinessTop2
  }
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  padding: 1rpx 0 60rpx;
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
.public-title {
  margin: 57rpx 0;
  font-size: 30rpx;
  font-family: RTWSYueRoudGoDemo-Regular;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  .info {
    color: #ff9000;
  }
}
.provide {
  width: 100%;
  height: 965rpx;
  position: relative;
  .bg,
  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .bg {
    z-index: 1;
  }
  .box {
    z-index: 2;
    .img1 {
      width: 690rpx;
      height: 419rpx;
      display: block;
      margin: 0 auto;
    }
    .list {
      width: 100%;
      .item {
        img {
          width: 90rpx;
          height: 94rpx;
          margin: 0 0 25rpx 0;
        }
        .title {
          font-size: 25rpx;
          font-weight: bold;
          color: rgba(255, 138, 21, 1);
          text-shadow: 0rpx 2rpx 1rpx rgba(194, 194, 194, 0.43);
        }
      }
    }
  }
}
.bring {
  width: 100%;
  height: 738rpx;
  position: relative;
  .bg,
  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .bg {
    z-index: 1;
  }
  .box {
    z-index: 2;
    img {
      width: 691rpx;
      height: 428rpx;
      display: block;
      margin: 123rpx auto 0;
    }
  }
}
.case {
  width: 100%;
  padding: 1rpx 0;
  margin: 0 0 55rpx 0;
  .swiper {
    height: 684rpx;
    .item {
      width: 100%;
      img {
        width: 40%;
        margin: 0 10rpx;
      }
    }
  }
}
.dots {
  width: 100%;
  .item {
    width: 29rpx;
    height: 11rpx;
    margin: 0 10rpx;
    background: rgba(34, 80, 158, 0.4);
  }
  .active {
    background: #22509e;
  }
}
.friends {
  width: 100%;
  padding: 1rpx 0 40rpx;
  background: rgba(255, 255, 255, 1);
  .friends-box {
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
