<template>
    <div v-if="!loading">
        <BussinessTop2 :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BussinessTop2>
        <div class="top">
          <div class="item border-box r-nw-c-c" :class="[k == 1? '.gray':'']" v-for="(i,k) in list1" :key = k>
            <div class="left c-c-c" v-if="k == 0">
              <img mode='widthFix' :src="i.icon" alt="">
            </div>
            <div class="right border-box c-fs-fs pf">
              <div class="title">{{i.title}}</div>
              <div class="list-box c-fs-fs">
                <div class="info" v-for="(i1,k1) in i.list" :key = k1>
                  {{k1 + 1}}.{{i1}}
                </div>
              </div>
            </div>
            <div class="left c-c-c" v-if="k == 1">
              <img mode='widthFix' :style="{width:'100%'}" :src="i.icon" alt="">
            </div>
          </div>
        </div>
        <div class="box web">
          <div class="public-title pf c-c-c">
            <div class="en-title">WEBSITE CONSTRUCTION CATEGORIES</div>
            <div class="title">网站建设类别</div>
            <div class="space"></div>
          </div>
          <div class="list r-w-fs-fs">
            <div class="item c-fs-c" v-for="(i,k) in list2" :key = k>
              <img mode='aspectFit' :src="i.icon" alt="">
              <div class="title">{{i.title}}</div>
              <div class="info">{{i.info}}</div>
            </div>
          </div>
        </div>
        <div class="box solution">
          <img v-if="site" class="bg" :src="site + '/img/business/web/slution-bg.png'" alt="">
          <div class="public-title pf c-c-c">
            <div class="en-title">WEB SITE CONSTRUCTION SOLUTIONS</div>
            <div class="title">网站建设解决方案</div>
            <div class="space"></div>
          </div>
          <div class="text pf">5年网站设计理念，成型上万优质品牌包装，励志打造一流网站设计团队。 </div>
          <div class="list pf r-w-c-c">
            <div class="item c-c-c" v-for="(i,k) in list3" :key = k>
              {{i.title}}
            </div>
          </div>
        </div>
        <div class="box process">
          <div class="public-title pf c-c-c">
            <div class="en-title">WEBSITE CONSTRUCTION PROCESS</div>
            <div class="title">网站建设流程</div>
            <div class="space"></div>
          </div>
          <img v-if="site" class="img" :src="site + '/img/business/web/process.png'" alt="">
          <div class="list pf c-fs-fs">
            <div class="line border-box"></div>
            <div class="item r-nw-fs-fs" :class="[current == k? 'active':'']" @click="checkProcess(i,k)" v-for="(i,k) in list4" :key = k>
              <div class="k c-c-c">{{k + 1}}</div>
              <img class="icon" :src="i.icon" alt="">
              <div class="info-box c-fs-fs">
                <div class="title">{{i.title}}</div>
                <div class="info" v-if="current == k">{{i.info}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="box host">
          <img v-if="site" class="bg" :src="site + '/img/business/web/host-bg.png'" alt="">
          <div class="public-title pf c-c-c">
            <div class="en-title">DOMAIN NAME HOST</div>
            <div class="title">域名主机</div>
            <div class="space"></div>
          </div>
          <div class="list pf r-w-fs-c">
            <div class="item c-c-c" v-for="(i,k) in host" :key = k>
              <img v-if="site" class="bg" :src="site + '/img/business/web/host-item-bg.png'" alt="">
              <div>
                {{i.title}}
              </div>
            </div>
          </div>
        </div>
        <div class="box bottom">
          <div class="public-title pf c-c-c">
            <div class="en-title">PERFECT AFTER-SALES SERVICE</div>
            <div class="title">完善的售后服务</div>
            <div class="space"></div>
          </div>
          <div class="content r-nw-c-c">
            <div class="left c-c-fe">  
              <img v-if="site" mode='widthFix' :src="site + '/img/business/web/bottom-bg.png'" alt="">
            </div>
            <div class="right pf c-fs-c">
              <div class="up">
                <img v-if="site" mode='widthFix' :src="site + '/img/business/web/bottom-talk-bg.png'" alt="">
                <div>一对一服务，专人责任制。</div>
              </div>
              <div class="down">为客户一对一配备专业客户管家、设计师与商务顾问，专人负责，专业服务，专属的服务团队一目了然，项目服务进度清晰透明。</div>
            </div>
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
        title: "网站建设",
        subTitle:
          "互联网+时代，一切可能从官网开始用心打造企业与客户的最强连接器",
        bg: this.$site + "/img/business/web/top-bg.png"
      },
      list1: [
        {
          icon: this.$site + "/img/business/web/list1-1.png",
          title: "企业为什么需要建站?",
          list: [
            "抓住互联网机遇，抢占市场先机",
            "树立企业形象，提高公信力",
            "展示企业产品，获得海量订单",
            "改善企业服务，提升用户粘性"
          ]
        },
        {
          icon: this.$site + "/img/business/web/list1-2.png",
          title: "聚米建站优势",
          list: [
            "自适应任何屏幕尺寸，完善用户体验",
            "全网营销型网站，多终端覆盖，便捷后台管理",
            "符合seo抓取原则，优化+推广，挖掘潜在客户",
            "一对一VIP服务，专业售后服务团队",
            "专业设计，精湛技术，提升品牌知名度"
          ]
        }
      ],
      list2: [
        {
          icon: this.$site + "/img/business/web/list2.png",
          title: "精美型定制网站",
          info:
            "对企业、客户、市场进行专业的分析，为企业建设官方形象网站。适用于中小规模或初创型企业，以展示产品、介绍服务为主。"
        },
        {
          icon: this.$site + "/img/business/web/list2.png",
          title: "营销型定制网站",
          info:
            "注重网站优化SEO结构，适合以网络营销为目的客户，从网站定位与与策划到界面设计，充分体现产品与服务的优势，无营销，不建站。"
        },
        {
          icon: this.$site + "/img/business/web/list2.png",
          title: "创意型定制网站",
          info:
            "以创意元素设计企业品牌宣传型的网站，提升品牌形象，塑造品牌价值，适合对网站站的设计和功能有很高的，品牌宣传有明确定位的企业。"
        },
        {
          icon: this.$site + "/img/business/web/list2.png",
          title: "响应式网站设计",
          info:
            "响应式布局可以为不同终端的用户提供更加舒适的界面和更好的用户体验，一个网站等于同时兼顾了多个网站，电脑、手机平板、微信、电视都能友好访问，让使用不同设备访问的用户都能获得最佳的浏览体验。"
        },
        {
          icon: this.$site + "/img/business/web/list2.png",
          title: "商城型定制网站",
          info:
            "商城型网站重点围绕产品设计，突出产品才是访客的真实需求；细节上注重用户体验，有效增加客户的信任度，从而提高网站的转化率；打造真正能为您带来订单的在线商城。"
        },
        {
          icon: this.$site + "/img/business/web/list2.png",
          title: "大型开发网站",
          info:
            "针对大型的平台网站，除了设计，SEO，用户体验这些重点以外，在面对处理平台网站的巨大信息量带来的压力，系统架构必须比一般类型的网站更为精密，安全性稳定性成为此等大型平台网站的重中之重。"
        }
      ],
      list3: [
        {
          title: "创意设计"
        },
        {
          title: "集团品质"
        },
        {
          title: "互联世界"
        },
        {
          title: "三网合一"
        },
        {
          title: "立体展示"
        },
        {
          title: "高端大气"
        }
      ],
      list4: [
        {
          icon: this.$site + "/img/business/web/process-icon1.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon1.png",
          title: "提交您的需求",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        },
        {
          icon: this.$site + "/img/business/web/process-icon2.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon2.png",
          title: "项目时间预估与报价",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        },
        {
          icon: this.$site + "/img/business/web/process-icon3.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon3.png",
          title: "达成合作意向",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        },
        {
          icon: this.$site + "/img/business/web/process-icon4.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon4.png",
          title: "首页设计",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        },
        {
          icon: this.$site + "/img/business/web/process-icon5.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon5.png",
          title: "首页确认",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        },
        {
          icon: this.$site + "/img/business/web/process-icon6.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon6.png",
          title: "内页设计及确认",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        },
        {
          icon: this.$site + "/img/business/web/process-icon7.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon7.png",
          title: "程序开发及页面测试",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        },
        {
          icon: this.$site + "/img/business/web/process-icon8.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon8.png",
          title: "验收阶段",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        },
        {
          icon: this.$site + "/img/business/web/process-icon9.png",
          selectIcon: this.$site + "/img/business/web/process-select-icon9.png",
          title: "项目完成",
          info: "客户提出网站建设基本需求，包括：设计需求以及功能需求。"
        }
      ],
      current: 0,
      host: [
        {
          title: "英文国际域名"
        },
        {
          title: "中文域名"
        },
        {
          title: "国内电信服务器"
        },
        {
          title: "香港服务器"
        },
        {
          title: "美国服务器"
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
    checkProcess(i, k) {
      this.current = k;
    }
  },
  components: {
    BussinessTop2
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 1rpx 0;
  background-color: white;
  box-sizing: border-box;
  margin: 0 0 0 0;
}
.public-title {
  margin: 53rpx 0;
  height: 90rpx;
  position: relative;
  .title {
    position: absolute;
    z-index: 2;
    top: 20rpx;
    font-size: 30rpx;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    line-height: 40rpx;
    margin: 0 0 27rpx 0;
  }
  .en-title {
    position: absolute;
    z-index: 1;
    top: 0;
    font-size: 20rpx;
    font-family: FZLTTHJW--GB1-0;
    font-weight: 400;
    color: rgba(213, 213, 213, 1);
    line-height: 40rpx;
  }
  .space {
    width: 100rpx;
    height: 2rpx;
    position: absolute;
    z-index: 1;
    bottom: 0;
    background: rgba(85, 85, 85, 1);
  }
}
.top {
  width: 100%;
  .item {
    padding: 30rpx 0;
    background-color: white;
    width: 100%;
    .left {
      width: 50%;
      img {
        width: 80%;
      }
    }
    .right {
      width: 50%;
      .title {
        font-size: 30rpx;
        font-weight: 500;
        color: rgba(34, 34, 34, 1);
        margin: 60rpx 0;
      }
      .list-box {
        width: 321rpx;
        .info {
          font-size: 22rpx;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 40rpx;
        }
      }
    }
  }
  .gray {
    background-color: rgba(247, 247, 247, 1);
    .right {
      padding: 0 30rpx;
    }
  }
}
.web {
  width: 100%;
  padding: 1rpx 0 40rpx 0;
  .list {
    width: 100%;
    .item {
      width: 50%;
      margin: 30rpx 0;
      img {
        height: 91rpx;
        max-width: 110rpx;
      }
      .title {
        margin: 36rpx 0 39rpx;
      }
      .info {
        width: 295rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 40rpx;
      }
    }
  }
}
.solution {
  width: 100%;
  padding: 1rpx 0;
  height: 502rpx;
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .public-title {
    margin: 50rpx auto 20rpx;
    .en-title {
      color: rgba(255, 255, 255, 0.5);
    }
    .title {
      color: white;
    }
    .space {
      background: rgba(247, 247, 247, 1);
    }
  }
  .text {
    position: relative;
    z-index: 1;
    margin: 38rpx auto 26rpx;
    width: 606rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40rpx;
  }
  .list {
    position: relative;
    z-index: 1;
    width: 100%;
    .item {
      margin: 15rpx 23rpx;
      width: 170rpx;
      height: 55rpx;
      border: 1rpx solid rgba(247, 247, 247, 1);
      border-radius: 28rpx;
      font-size: 24rpx;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
    }
  }
}
.process {
  width: 100%;
  padding: 1rpx 0 40rpx 0;
  .list {
    position: relative;
    .line {
      position: absolute;
      left: 17.4%;
      height: 97%;
      width: 3rpx;
      z-index: 0;
      top: 10rpx;
      background: rgba(85, 85, 85, 1);
    }
    .item {
      width: 100%;
      margin: 0 0 23rpx 0;
      padding: 1rpx 0;
      .k {
        position: relative;
        opacity: 0;
        z-index: 1;
        width: 30rpx;
        height: 30rpx;
        background: rgba(34, 80, 158, 1);
        border-radius: 50%;
        font-size: 20rpx;
        font-family: ArialMT;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        margin: 9rpx 34rpx 0 117rpx;
      }
      .icon {
        width: 26rpx;
        height: 26rpx;
        margin: 9rpx 26rpx 0 0;
      }
      .info-box {
        .title {
          font-size: 28rpx;
          font-weight: bold;
          color: rgba(34, 34, 34, 1);
          margin: 0 0 22rpx 0;
        }
        .info {
          width: 387rpx;
          font-size: 24rpx;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 40rpx;
        }
      }
    }
    .active {
      .k {
        opacity: 1;
        .title {
          color: rgba(34, 80, 158, 1);
        }
      }
    }
  }
  .img {
    width: 536rpx;
    height: 315rpx;
    margin: 70rpx auto 100rpx;
    display: block;
  }
}
.host {
  width: 100%;
  padding: 1rpx 0;
  height: 776rpx;
  position: relative;
  .bg {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .public-title {
    margin: 50rpx auto 20rpx;
    .en-title {
      color: rgba(255, 255, 255, 0.5);
    }
    .title {
      color: white;
    }
    .space {
      background: rgba(247, 247, 247, 1);
    }
  }
  .list {
    margin: 30rpx 0 0 0;
    position: relative;
    z-index: 1;
    width: 100%;
    .item {
      width: 192rpx;
      margin: 40rpx 0 0 42rpx;
      height: 195rpx;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
      }
      div {
        font-size: 24rpx;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}
.bottom {
  .content {
    margin: 70rpx 0 200rpx 0;
    border: 1rpx;
    .left {
      width: 50%;
      img {
        width: 90%;
        position: relative;
        top: 30rpx;
      }
    }
    .right {
      width: 50%;
      .up {
        width: 341rpx;
        height: 64rpx;
        margin: 0 0 51rpx 0;
        position: relative;
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        div {
          font-size: 24rpx;
          position: absolute;
          right: 11rpx;
          top: 17%;
          z-index: 1;
          font-weight: 500;
          color: rgba(34, 34, 34, 1);
        }
      }
      .down {
        width: 318rpx;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(85, 85, 85, 1);
        line-height: 36rpx;
      }
    }
  }
}
</style>
