<template>
    <div v-if="!loading">
        <BusinessTop :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BusinessTop>
        <div class="top border-box pf">
            <div class="title">使用行业</div>
            <div class="list r-w-c-c">
              <div class="item c-c-c" v-for="(i,k) in list1" :key = k>
                <img :src="i.icon" alt="">
                <div class="text">{{i.text}}</div>
              </div>
            </div>
        </div>
        <div class="business">
          <div class="title-box c-c-c pf">
            <div class="title">打通小程序和公众号双渠道业务</div>
            <div class="info pf-light">打通会员服务数据</div>
          </div>
          <img v-if="site" :src="site + '/img/solution/beauty/icon2.png'" alt="">
        </div>
        <div class="swiper-box pf border-box">
            <div class="title-box c-c-c pf">
              <div class="title">专于美业</div>
              <div class="info pf-light">在线直接预约服务 帮助门店提高转化</div>
            </div>
            <swiper class="swiper r-nw-fs-c" indicator-dots indicator-color='rgba(224,224,224,1)' indicator-active-color='#22509E'>
              <swiper-item class="item border-box r-nw-c-c"  v-for="(i,k) in swiper1" :key = k>
                  <div class="box c-c-c" v-for="(i1,k1) in i" :key = k1>
                    <img mode='widthFix' :src="i1.img" alt="">
                    <div class="text pf-light">{{i1.text}}</div>
                  </div>
              </swiper-item>
            </swiper>
            <div class="title-box c-c-c pf">
              <div class="title">提前锁定用户四部曲</div>
              <div class="info pf-light">提升门店经营效率 提高门店经营收益</div>
            </div>
            <swiper class="swiper r-nw-fs-c" indicator-dots indicator-color='rgba(224,224,224,1)' indicator-active-color='#22509E'>
              <swiper-item class="item border-box r-nw-c-c"  v-for="(i,k) in swiper2" :key = k>
                  <div class="box c-c-c" v-for="(i1,k1) in i" :key = k1>
                    <img mode='widthFix' :src="i1.img" alt="">
                    <div class="text pf-light">{{i1.text}}</div>
                  </div>
              </swiper-item>
            </swiper>
            <div class="title-box c-c-c pf">
              <div class="title">员工管理</div>
              <div class="info pf-light">信息展示提升门店形象 分析体系提高员工积极性</div>
            </div>
            <swiper class="swiper r-nw-fs-c" indicator-dots indicator-color='rgba(224,224,224,1)' indicator-active-color='#22509E'>
              <swiper-item class="item border-box r-nw-c-c"  v-for="(i,k) in swiper3" :key = k>
                  <div class="box c-c-c" v-for="(i1,k1) in i" :key = k1>
                    <img mode='widthFix' :src="i1.img" alt="">
                    <div class="text pf-light">{{i1.text}}</div>
                  </div>
              </swiper-item>
            </swiper>
            <div class="title-box c-c-c pf">
              <div class="title">社交营销</div>
              <div class="info pf-light">玩法新 工具多 效果好</div>
            </div>
            <div class="swiper-bottom r-nw-c-c">
              <div class="item c-c-c" v-for="(i,k) in swiper4" :key = k>
                      <img mode='widthFix' :src="i.img" alt="">
                      <div class="text pf-light">{{i.text}}</div>
              </div>
            </div>
        </div>
        <div class="list2 border-box">
          <div class="title-box c-c-c pf">
              <div class="title">支持多种连锁运营管理模式</div>
              <div class="info pf-light">贴合直营、加盟、联营场景</div>
          </div>
          <div class="box r-w-c-c">
            <div class="item c-fs-c" v-for="(i,k) in list2" :key = k>
              <img :src="i.icon" alt="">
              <div class="title">{{i.title}}</div>
              <div class="info pf-light">{{i.info}}</div>
            </div>    
          </div>
        </div>
        <div class="bottom border-box pf">
          <div class="title-box c-c-c pf">
              <div class="title">更完善的会员管理体系</div>
              <div class="info pf-light">记录会员数据，积累会员资产全方位助你更好地拓、锁、留、升客</div>
          </div>
          <div class="list3-box">
            <div class="list3 r-w-c-c">
              <div class="item c-fs-c" v-for="(i,k) in list3" :key = k>
                <img :src="i.icon" alt="">
                <div class="text pf-light">{{i.text}}</div>
              </div>
            </div>
            <img class="bg" v-if="site" :src="site + '/img/solution/beauty/manage-bg.png'" alt="">
          </div>
          <div class="title-box c-c-c pf">
              <div class="title">面向客户成功的服务体系</div>
          </div>
          <img v-if="site" class="bottom-img" :src="site +'/img/solution/beauty/bottom.png'" alt="">
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
        title: "美业解决方案",
        subTitle:
          "行业带头实现小程序+公众号的美业解决方案提高营销效率、提升用户体验、帮助门店转化",
        bg: this.$site + "/img/solution/beauty/top-bg.png"
      },
      list1: [
        {
          icon: this.$site + "/img/solution/beauty/apply1.png",
          text: "美容美体"
        },
        {
          icon: this.$site + "/img/solution/beauty/apply2.png",
          text: "美甲美睫"
        },
        {
          icon: this.$site + "/img/solution/beauty/apply3.png",
          text: "医疗美容"
        },
        {
          icon: this.$site + "/img/solution/beauty/apply4.png",
          text: "美发养发"
        },
        {
          icon: this.$site + "/img/solution/beauty/apply5.png",
          text: "健身塑形"
        },
        {
          icon: this.$site + "/img/solution/beauty/apply6.png",
          text: "医疗诊所"
        }
      ],
      swiper1: [
        [
          {
            img: this.$site + "/img/solution/beauty/swiper1-1.png",
            text: "预约预定"
          },
          {
            img: this.$site + "/img/solution/beauty/swiper1-2.png",
            text: "选择店铺"
          }
        ],
        [
          {
            img: this.$site + "/img/solution/beauty/swiper1-3.png",
            text: "选择美容师"
          },
          {
            img: this.$site + "/img/solution/beauty/swiper1-4.png",
            text: "选择项目"
          }
        ]
      ],
      swiper2: [
        [
          {
            img: this.$site + "/img/solution/beauty/swiper2-1.png",
            text: "套餐卡"
          },
          {
            img: this.$site + "/img/solution/beauty/swiper2-2.png",
            text: "服务卡"
          }
        ],
        [
          {
            img: this.$site + "/img/solution/beauty/swiper2-3.png",
            text: "充值卡"
          },
          {
            img: this.$site + "/img/solution/beauty/swiper2-4.png",
            text: "体验卡"
          }
        ]
      ],
      swiper3: [
        [
          {
            img: this.$site + "/img/solution/beauty/swiper3-1.png",
            text: "员工工作台"
          },
          {
            img: this.$site + "/img/solution/beauty/swiper3-2.png",
            text: "预约详情"
          }
        ],
        [
          {
            img: this.$site + "/img/solution/beauty/swiper3-3.png",
            text: "我的顾客"
          },
          {
            img: this.$site + "/img/solution/beauty/swiper3-4.png",
            text: "服务记录"
          }
        ]
      ],
      swiper4: [
        {
          img: this.$site + "/img/solution/beauty/swiper4-1.png",
          text: "积分商城"
        },
        {
          img: this.$site + "/img/solution/beauty/swiper4-2.png",
          text: "积分抽奖"
        }
      ],
      list2: [
        {
          icon: this.$site + "/img/solution/beauty/icon2-1.png",
          title: "数据全面打通",
          info: "连锁门店会员共享、资源共享，合理优化资源配置，节约成本。"
        },
        {
          icon: this.$site + "/img/solution/beauty/icon2-2.png",
          title: "数据全面分析",
          info: "总部可查看各门店经营、商品、会员等数据，依托数据为未来做决策。"
        },
        {
          icon: this.$site + "/img/solution/beauty/icon2-3.png",
          title: "高效利用资金",
          info: "资金自动归集，优化因人工操作繁琐低效且容易出错的情况。"
        },
        {
          icon: this.$site + "/img/solution/beauty/icon2-4.png",
          title: "合理配置库存",
          info:
            "线上线下统一管理，库存要货、调拨、预警，让库存最大合理化，减少资金占用。"
        },
        {
          icon: this.$site + "/img/solution/beauty/icon2-5.png",
          title: "线上赋能门店",
          info: "总部可统一线上营销，吸引客户到门店消费，为门店赋能。"
        },
        {
          icon: this.$site + "/img/solution/beauty/icon2-6.png",
          title: "提升品牌体验",
          info: "提供品牌元素定制，拥有一个专属品牌的系统。"
        }
      ],
      list3: [
        {
          icon: this.$site + "/img/solution/beauty/manage1.png",
          text: "等级"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage2.png",
          text: "积分"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage3.png",
          text: "卡项"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage4.png",
          text: "余额"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage5.png",
          text: "会员标签"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage6.png",
          text: "智能群分"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage7.png",
          text: "交易数据"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage8.png",
          text: "互动记录"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage9.png",
          text: "权益"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage10.png",
          text: "档案"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage11.png",
          text: "服务日志"
        },
        {
          icon: this.$site + "/img/solution/beauty/manage12.png",
          text: "敏感加密"
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
  methods: {},
  components: {
    BusinessTop
  }
};
</script>
<style lang="scss" scoped>
.top {
  width: 100%;
  padding: 1rpx 0 50rpx;
  background: white;
  .title {
    margin: 53rpx 0 16rpx 0;
    font-size: 26rpx;
    font-weight: bold;
    text-align: center;
    color: rgba(102, 102, 102, 1);
  }
  .list {
    width: 100%;
    .item {
      margin: 35rpx 50rpx;
      img {
        width: 107rpx;
        height: 108rpx;
        margin: 0 0 36rpx 0;
      }
      .text {
        font-size: 22rpx;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
        line-height: 41rpx;
      }
    }
  }
}
.title-box {
  .title {
    font-size: 26rpx;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 23rpx;
    margin: 61rpx 0 24rpx 0;
  }
  .info {
    font-size: 20rpx;
    font-weight: bold;
    color: rgba(102, 102, 102, 1);
    line-height: 23rpx;
  }
}
.business {
  img {
    width: 687rpx;
    height: 310rpx;
    margin: 88rpx auto 75rpx;
    display: block;
  }
}
.swiper-box {
  width: 100%;
  background: white;
  padding: 1rpx 0;
  .swiper {
    height: 850rpx;
    width: 100%;
    .item {
      width: 100%;
      .box {
        width: 45%;
        margin: 0 11rpx;
        img {
          width: 100%;
          margin: 0 0 45rpx 0;
        }
        .text {
          font-size: 20rpx;
          font-weight: bold;
          color: rgba(136, 136, 136, 1);
        }
      }
    }
  }
  .swiper-bottom {
    margin: 68rpx 0;
    width: 100%;
    .item {
      width: 46%;
      margin: 0 11rpx;
      img {
        width: 100%;
        margin: 0 0 45rpx 0;
      }
      .text {
        font-size: 20rpx;
        font-weight: bold;
        color: rgba(136, 136, 136, 1);
      }
    }
  }
}
.list2 {
  width: 100%;
  padding: 1rpx 0 70rpx 0;
  background: rgba(246, 246, 246, 1);
  .box {
    margin: 60rpx 0 0;
    .item {
      width: 45%;
      margin: 30rpx 10rpx;
      img {
        width: 121rpx;
        height: 121rpx;
      }
      .title {
        margin: 31rpx 0 36rpx 0;
        font-size: 24rpx;
        font-weight: bold;
        color: rgba(102, 102, 102, 1);
      }
      .info {
        width: 277rpx;
        font-size: 20rpx;
        font-weight: 400;
        color: rgba(102, 102, 102, 0.7);
        line-height: 34rpx;
      }
    }
  }
}
.bottom {
  width: 100%;
  padding: 16rpx 0 171rpx 0;
  background: white;
  .list3-box {
    margin: 74rpx 0 0 0;
    position: relative;
    width: 100%;
    height: 1000rpx;
    .list3 {
      z-index: 2;
      position: absolute;
      width: 100%;
      top: 0;
      .item {
        width: 120rpx;
        margin: 35rpx 20rpx;
        img {
          width: 92rpx;
          height: 92rpx;
          margin: 0 0 25rpx 0;
        }
        .text {
          font-size: 24rpx;
          font-weight: bold;
          color: rgba(85, 85, 85, 1);
          line-height: 37px;
        }
      }
    }
    .bg {
      width: 100%;
      height: 377rpx;
      bottom: 0;
      left: 0;
      z-index: 1;
      position: absolute;
      bottom: 0;
    }
  }
  .bottom-img {
    width: 674rpx;
    height: 320rpx;
    display: block;
    margin: 103rpx auto 0;
  }
}
</style>
