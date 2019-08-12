<template>
    <div v-if="!loading">
        <BusinessTop :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BusinessTop>
        <div class="top c-fs-c border-box">
           <div class="title pf">微商城，让经营变得更简单</div>
           <div class="info pf-light">助力每一位商家经营成功</div>
           <div class="list">
             <div class="item r-nw-fs-c" v-for="(i,k) in micromall" :key = k>
                <img mode='widthFix' :src="i.icon" alt="">
                <div class="title-box">
                    <div class="title pf">{{i.title}}</div>
                    <div class="info pf-light">{{i.info}}</div>
                </div>
             </div>
           </div>
        </div>
        <div class="attempt">
          <div class="title-box c-c-c">
            <div class="one pf-light">我们尝试用</div>
            <div class="two pf">完成的在线商城</div>
            <div class="three pf-light">帮您实现搭建自己的品牌商城，与客户直接连接向单一的销售渠道说再见</div>
          </div>
          <img mode='widthFix' v-if="site" :src="site + '/img/solution/shapping/attempt.png'" alt="">
        </div>
        <div class="fun  border-box">
          <div class="title-box c-c-c">
            <div class="one pf-light">我们尝试用</div>
            <div class="two pf">百余种促销玩法</div>
            <div class="three pf-light">帮您实现店铺高活跃、高客单、高复购向乏味的营销方式说再见</div>
          </div>  
          <swiper class="swiper r-nw-fs-c" @change="change1">
              <swiper-item class="item border-box c-fs-c"  v-for="(i,k) in swiper1" :key = k>
               <img mode='widthFix' :src="i.img" alt="">  
               <div class="text pf-light">{{i.text}}</div>
              </swiper-item>
          </swiper>
          <div class="dots r-nw-c-c">
             <div :class="[currentSwiper1 == k ? 'active':'']" class="item" v-for="(i,k) in swiper1" :key = k>
             </div>
          </div>
        </div>
        <div class="fun manage border-box">
          <div class="title-box c-c-c">
            <div class="one pf-light">我们尝试用</div>
            <div class="two pf">SCRM客户管理</div>
            <div class="three pf-light">帮您实现会员的全周期管理及精准化营销向逐日攀升的客户流失率说再见</div>
          </div>  
          <swiper class="swiper r-nw-fs-c" @change="change2">
              <swiper-item class="item border-box c-fs-c"  v-for="(i,k) in swiper2" :key = k>
               <img mode='widthFix' :src="i.img" alt="">  
               <div class="text pf-light">{{i.text}}</div>
              </swiper-item>
          </swiper>
          <div class="dots r-nw-c-c">
             <div :class="[currentSwiper2 == k ? 'active':'']" class="item" v-for="(i,k) in swiper2" :key = k>
             </div>
          </div>
        </div>
        <div class="attempt2 border-box attempt">
          <div class="title-box c-c-c">
            <div class="one pf-light">我们尝试用</div>
            <div class="two pf">分销，激励客户参与卖货</div>
            <div class="three pf-light">帮您实现裂变式销量增长向昂贵的经营渠道和成本说再见</div>
          </div>
          <img mode='widthFix' v-if="site" :src="site + '/img/solution/shapping/attempt2.png'" alt="">
          <div class="bottom-text pf-light">佣金奖励、等级刺激、功能灵活，满足您的经营场景</div>
        </div>
        <div class="fun analysis border-box">
          <div class="title-box c-c-c">
            <div class="one pf-light">我们尝试用</div>
            <div class="two pf">全面领先的数据分析</div>
            <div class="three pf-light">帮您实现多角度、全方位的店铺经营分析，驱动发展向没有方向的店铺运营说再见</div>
          </div>  
          <swiper class="swiper r-nw-fs-c" @change="change3">
              <swiper-item class="item border-box c-fs-c"  v-for="(i,k) in swiper3" :key = k>
               <img mode='widthFix' :src="i.img" alt="">  
               <div class="text pf-light">{{i.text}}</div>
              </swiper-item>
          </swiper>
          <div class="dots r-nw-c-c">
             <div :class="[currentSwiper3 == k ? 'active':'']" class="item" v-for="(i,k) in swiper3" :key = k>
             </div>
          </div>
        </div>
        <div class="list2 border-box pf c-c-c">
          <div class="text1 pf-light">我们不仅提供精致的产品，更有</div>
          <div class="text2">全面领先的数据分析</div>
          <div class="item border-box r-nw-fs-fs" v-for="(i,k) in list2" :key = k>
              <img mode='widthFix' :src="i.icon" alt="">
              <div class="text-box c-fs-fs">
                <div class="title">{{i.title}}</div>
                <div class="info pf-light">{{i.info}}</div>
              </div>
          </div>
        </div>
        <div class="list3 border-box pf">
          <div class="title">安心的技术支持</div>
          <div class="item-box r-w-c-c">
            <div class="item" v-for="(i,k) in list3" :key = k>
              <img class="bg" :src="i.bg" alt="">
              <div class="text pf-light">{{i.text}}</div>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import BusinessTop from "../../components/business-top.vue";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "电子商务解决方案",
        subTitle:
          "打造线上线下渠道一体化的新零售解决方案，用数据智能驱动企业增长。",
        bg: this.$site + "/img/solution/shapping/top-bg.png"
      },
      micromall: [
        {
          icon: this.$site + "/img/solution/shapping/1-1.png",
          title: "多渠道获客",
          info: "微信10亿+流量共享，多渠道拓展流量，多入口直达微信商城"
        },
        {
          icon: this.$site + "/img/solution/shapping/1-2.png",
          title: "营业额飙升",
          info: "多种营销工具，帮你拓客锁客用过的老板表示：营业额轻松超标"
        },
        {
          icon: this.$site + "/img/solution/shapping/1-3.png",
          title: "经营效率提升",
          info: "大数据系统诊断店铺情况提供经营方向，减少试错成本。"
        },
        {
          icon: this.$site + "/img/solution/shapping/1-4.png",
          title: "全部行业适用",
          info: "你身边的服装、食品、生鲜、美妆等行业都在使用微商城"
        }
      ],
      swiper1: [
        {
          img: this.$site + "/img/solution/shapping/swiper1-1.png",
          text: "分享传播，让你的顾客带来更多优惠"
        },
        {
          img: this.$site + "/img/solution/shapping/swiper1-2.png",
          text: "互动小游戏，让你与客户的距离再近一点"
        }
      ],
      swiper2: [
        {
          img: this.$site + "/img/solution/shapping/swiper2-1.png",
          text: "让新客户在互动中，逐步成为店铺的忠实VIP"
        },
        {
          img: this.$site + "/img/solution/shapping/swiper2-2.png",
          text: "会员权益灵活多样 智能触达精准客户"
        }
      ],
      swiper3: [
        {
          img: this.$site + "/img/solution/shapping/swiper3-1.png",
          text: "店铺数据全掌握，运营状况会说话"
        },
        {
          img: this.$site + "/img/solution/shapping/swiper3-2.png",
          text: "数据维度全提供 自由组合更高能"
        }
      ],
      currentSwiper1: 0,
      currentSwiper2: 0,
      currentSwiper3: 0,
      list2: [
        {
          icon: this.$site + "/img/solution/shapping/list2-1.png",
          title: "服务指导",
          info: "一对一客服在线产品上手培训"
        },
        {
          icon: this.$site + "/img/solution/shapping/list2-2.png",
          title: "运营培训",
          info: "线上线下实战培训全国百场嘉宾，大咖互动分享"
        },
        {
          icon: this.$site + "/img/solution/shapping/list2-3.png",
          title: "流量支持",
          info: "大号免费推送异业合作"
        }
      ],
      list3: [
        {
          bg: this.$site + "/img/solution/shapping/list3-1.png",
          title: "稳定的系统"
        },
        {
          bg: this.$site + "/img/solution/shapping/list3-2.png",
          title: "强大的安全防御"
        },
        {
          bg: this.$site + "/img/solution/shapping/list3-3.png",
          title: "高弹性扩展能力"
        },
        {
          bg: this.$site + "/img/solution/shapping/list3-4.png",
          title: "多服务器均衡负载"
        }
      ]
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
    // swiper1
    change1(e) {
      this.currentSwiper1 = e.mp.detail.current;
    },
    // swiper2
    change2(e) {
      this.currentSwiper2 = e.mp.detail.current;
    },
    // swiper3
    change3(e) {
      this.currentSwiper3 = e.mp.detail.current;
    }
  },

  components: {
    BusinessTop
  }
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  height: 1081rpx;
  padding: 1rpx 0;
  background-color: white;
  .title {
    margin: 51rpx 0 20rpx 0;
    font-size: 26rpx;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 23rpx;
  }
  .info {
    font-size: 22rpx;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 23rpx;
    margin: 0 0 25rpx 0;
  }
  .list {
    width: 690rpx;
    margin: 0 auto;
    .item {
      width: 100%;
      height: 206rpx;
      background: rgba(255, 255, 255, 1);
      box-shadow: 6rpx 4rpx 13rpx 0 rgba(174, 174, 174, 0.19);
      border-radius: 10rpx;
      margin: 0 0 13rpx 0;
      img {
        width: 129rpx;
        margin: 0 47rpx 0 59rpx;
      }
      .title-box {
        .title {
          font-size: 26rpx;
          font-weight: bold;
          color: rgba(85, 85, 85, 1);
          line-height: 23rpx;
        }
        .info {
          width: 373rpx;
          font-size: 20rpx;
          font-weight: bold;
          color: rgba(136, 136, 136, 1);
          line-height: 33rpx;
        }
      }
    }
  }
}
.attempt {
  padding: 18rpx 0 0;
  img {
    width: 593rpx;
    margin: 110rpx auto 77rpx;
    display: block;
  }
}
.title-box {
  margin: 50rpx 0;
  .one {
    font-size: 20rpx;
    font-weight: bold;
    color: rgba(136, 136, 136, 1);
    line-height: 23rpx;
  }
  .two {
    font-size: 26rpx;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 23rpx;
    margin: 20rpx 0 38rpx;
  }
  .three {
    width: 520rpx;
    font-size: 20rpx;
    font-weight: bold;
    color: rgba(136, 136, 136, 1);
    line-height: 32rpx;
    text-align: center;
  }
}
.fun {
  height: 1015rpx;
  width: 100%;
  padding: 18rpx 0 38rpx;
  background-color: white;
  .swiper {
    height: 670rpx;
    position: relative;
    .item {
      width: 100%;
      img {
        width: 80%;
        margin: 50rpx auto;
      }
      .text {
        font-size: 20rpx;
        font-weight: bold;
        color: rgba(85, 85, 85, 1);
        line-height: 31rpx;
        margin: 0 0 57rpx 0;
      }
    }
  }
}
.manage {
  height: 980rpx;
  background-color: transparent;
  .swiper {
    height: 630rpx;
  }
}
.dots {
  width: 100%;
  .item {
    width: 29rpx;
    height: 11rpx;
    margin: 0 10rpx;
    background: rgba(203, 216, 254, 1);
  }
  .active {
    background: rgba(81, 123, 252, 1);
  }
}
.attempt2 {
  height: 1001rpx;
  width: 100%;
  background: white;
  padding: 18rpx 0 0;
  img {
    width: 687rpx;
    margin: 20rpx auto 52rpx;
  }
  .bottom-text {
    font-size: 20rpx;
    font-weight: bold;
    color: rgba(85, 85, 85, 1);
    line-height: 31rpx;
    text-align: center;
  }
}
.analysis {
  height: 956rpx;
  padding: 18rpx 0 0;
  background-color: transparent;
  .swiper {
    height: 600rpx;
  }
}

.list2 {
  width: 100%;
  background: white;
  padding: 1rpx 0 70rpx;
  .text1 {
    font-size: 22rpx;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 23rpx;
    margin: 51rpx 0 20rpx 0;
  }
  .text2 {
    font-size: 26rpx;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 23rpx;
    margin: 0 0 57rpx 0;
  }
  .item {
    width: 690rpx;
    height: 206rpx;
    padding: 40rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 6rpx 4rpx 13rpx 0px rgba(174, 174, 174, 0.19);
    border-radius: 10rpx;
    margin: 13rpx 0;
    img {
      width: 145rpx;
      margin: 0 71rpx 0 0;
    }
    .text-box {
      .title {
        font-size: 26rpx;
        font-weight: bold;
        color: rgba(85, 85, 85, 1);
        line-height: 23rpx;
        margin: 0 0 32rpx 0;
      }
      .info {
        width: 279rpx;
        font-size: 20rpx;
        font-weight: bold;
        color: rgba(136, 136, 136, 1);
        line-height: 33rpx;
      }
    }
  }
}
.list3 {
  width: 100%;
  height: 952rpx;
  background: transparent;
  padding: 57rpx 0 164rpx 0;
  .title {
    font-size: 26rpx;
    font-family: PingFang-SC-Regular;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 23rpx;
    text-align: center;
    margin: 0 0 63rpx 0;
  }
  .item-box {
    width: 100%;
    .item {
      width: 310rpx;
      height: 310rpx;
      margin: 14rpx 11.5rpx;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
      }
      .text {
        position: absolute;
        font-size: 24rpx;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
        bottom: 40rpx;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
      }
    }
  }
}
</style>
