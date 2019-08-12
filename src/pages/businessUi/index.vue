<template>
    <div v-if="!loading">
        <BussinessTop2 :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BussinessTop2>
        <div class="box service">
          <div class="public-title pf c-c-c">
            <div class="en-title">THREE SERVICE SYSTEMS</div>
            <div class="title">三大服务体系</div>
            <div class="space"></div>
          </div>
          <div class="list border-box r-w-sb-c">
            <div class="item" v-for="(i,k) in list1" :key = k>
              <img class="bg" :src="i.bg" alt="">
              <div class="content c-c-c">
                <img mode='aspectFit' :src="i.icon" alt="">
                <div class="title">{{i.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="box process">
          <div class="public-title pf c-c-c">
            <div class="en-title">DESIGN FLOW</div>
            <div class="title">设计流程</div>
            <div class="space"></div>
          </div>
          <div class="text">我们拥有一群擅长策略研究、用户研究、交互设计、视觉设计、可用性测试的伙伴。拿到一个项目，我们先从客户的用户、产品、品牌入手，建立一套有效的策略，根据策略计划进行用户研究，再根据用研结果定义有效的信息架构和交互流程，得到客户及用户的认可后我们就开始大量的细致入微的视觉设计工作，随着视觉设计的完成，设计师开始协同开发人员调试完成的功能界面，测试人员开始测试收集产品使用报告，以确保产品的高效率、高品质。</div>
          <img v-if="site" :src="site + '/img/business/ui/process.png'" alt="">
        </div>
        <div class="box border-box advantage">
          <img v-if="site" class="bg" :src="site +'/img/business/ui/list2-bg.png'" alt="">
          <div class="public-title pf c-c-c">
            <div class="en-title">SERVICE ADVANTAGES</div>
            <div class="title">服务优势</div>
            <div class="space"></div>
          </div>
          <div class="list border-box r-w-sb-c">
            <div class="item r-nw-fs-fs" v-for="(i,k) in list2" :key = k>
              <img mode='widthFix' :src="i.icon" alt="">
              <div class="content">
                <div class="title">{{i.title}}</div>
                <div class="info">{{i.info}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="box what">
          <div class="public-title pf c-c-c">
            <div class="en-title">WHAT CAN I DO FOR YOU?</div>
            <div class="title">我们能为您做什么</div>
            <div class="space"></div>
          </div>
          <div class="list border-box pf r-w-sb-c">
            <div class="item c-fs-c" v-for="(i,k) in list3" :key = k>
                <img mode='aspectFit' :src="i.icon" alt="">
                <div class="title">{{i.title}}</div>
                <div class="info">{{i.info}}</div>
            </div>
          </div>
          <div class="text1">完稿时，将交付赠送您</div>
          <img class="img" v-if="site" :src="site +'/img/business/ui/down.png'" alt="">
          <div class="list4 r-w-c-c">
            <div class="item border-box r-nw-fs-c" v-for="(i,k) in list4" :key = k>
              <div class="point"></div>
              <div class="title pf">{{i.title}}</div>
            </div>
          </div>
        </div>
        <div class="box cases">
          <div class="public-title pf c-c-c">
            <div class="en-title">COOPERATION CASE</div>
            <div class="title">合作案例</div>
            <div class="space"></div>
          </div>
          <div class="case c-c-c">
              <img class="left" @click="nextPrev(-1)" v-if="site" :src="site+'/img/public/left-gray.png'" alt="">
              <img class="right" @click="nextPrev(1)" v-if="site" :src="site+'/img/public/left-gray.png'" alt="">
              <swiper class="swiper" circular  :current=currentTab>
                <swiper-item class="item pf c-fs-c" v-for="(i,k) in cases" :key = k>
                    <img class="img" mode='aspectFit' :src="i.show_images[0]" alt="">
                    <div class="title">{{i.title}}</div>                
                    <div class="info">{{i.short_profiles}}</div>                
                </swiper-item>
              </swiper>
              <div class="check pf r-nw-sa-c">
                <div class="check-detail c-c-c" @click="checkDetail">
                  了解详情
                </div>
                <div class="check-qrcode c-c-c" @click="checkQrcode">
                  扫码体验
                  <div class="box pf c-c-c" v-if="qrcodeIsShow">
                    <img v-if="site" :src="site+'/img/home/qr-code-bg.png'" alt="" class="bg">
                    <img @click="previewImage(cases[currentTab].qrcode)" class="qrcode" :src='cases[currentTab].qrcode' alt="">
                    <div>扫码上方二维码</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="box dream">
          <div class="public-title pf c-c-c">
            <div class="en-title">WE ACHIEVE EACH OTHER'S DREAMS</div>
            <div class="title">我们一起成就彼此的梦想</div>
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
import { multi_cases } from "../../api/case.js";
import { friends_list } from "../../api/friends.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "UI设计服务",
        subTitle:
          "一个友好美观的界面会给人带来舒适的视觉享受，拉近人与电脑的距离，为商家创造卖点。",
        bg: this.$site + "/img/business/ui/top-bg.png"
      },
      list1: [
        {
          icon: this.$site + "/img/business/ui/list1-1.png",
          bg: this.$site + "/img/business/ui/list-bg-1-1.png",
          title: "移动产品设计"
        },
        {
          icon: this.$site + "/img/business/ui/list1-2.png",
          bg: this.$site + "/img/business/ui/list-bg-1-2.png",
          title: "网站定制设计"
        },
        {
          icon: this.$site + "/img/business/ui/list1-3.png",
          bg: this.$site + "/img/business/ui/list-bg-1-3.png",
          title: "终端软件设计"
        }
      ],
      list2: [
        {
          icon: this.$site + "/img/business/ui/list2-1.png",
          title: "品牌DNA的深度挖掘",
          info:
            "通过对行业信息及企业文化的研究，以及对用户和竞品的分析，提炼产品性格，挖掘品牌内涵。品牌DNA的视觉化延伸，贯穿表达于整体方案中，通过品牌内涵的融合实现设计的差异化，进而提升品牌竞争力。后期的市场推广及品牌传播，使产品的灵魂深入人心。"
        },
        {
          icon: this.$site + "/img/business/ui/list2-2.png",
          title: "极致且快速的响应效率",
          info:
            "经过多年的团队沉淀，我们对接客户的项目经理都具备五年以上项目经验。可以做到10分钟内邮件询盘回应，1小时内报价估算；同时UED组建了两个梯队，一个是创新UED团队，一个是细节执行团队。确保每个项目在天马行空的创意下，能够真正快速的落地实现"
        },
        {
          icon: this.$site + "/img/business/ui/list2-3.png",
          title: "将创新完美落地的前端体验开发",
          info:
            "设计师与开发工程师深度配合，有助于最大程度还原和传达产品设计方案，保障了创新设计的最终落地。搭建模拟真实的操作体验场景，便于进行自然真实的用户体验测试，帮助客户更准确的理解和感受设计方案。"
        }
      ],
      list3: [
        {
          icon: this.$site + "/img/business/ui/list3-1.png",
          title: "界面设计",
          info: "应用整体视觉效果升化、好用好看的设计让您的产品天生丽质。"
        },
        {
          icon: this.$site + "/img/business/ui/list3-1.png",
          title: "界面切图",
          info: "让界面完美适合安卓、IPhone手机、平板电脑和个人电脑"
        },
        {
          icon: this.$site + "/img/business/ui/list3-1.png",
          title: "制作设计规范",
          info: "从此您的产品就有自己益涛设计标准"
        },
        {
          icon: this.$site + "/img/business/ui/list3-1.png",
          title: "交付设计源文件",
          info: "源文件在手，后续修改升级无忧"
        }
      ],
      list4: [
        {
          title: "高清设计图"
        },
        {
          title: "弹层规范"
        },
        {
          title: "界面元素间距标注"
        },
        {
          title: "设计源文件"
        },
        {
          title: "全分辨率切图"
        },
        {
          title: "LOANDING规范"
        }
      ],
      cases: [],
      currentTab: 0,
      qrcodeIsShow: false,
      friends: [],
      currentFriend: 0
    };
  },
  onLoad() {
    multi_cases({ cate: 4 }).then(res => {
      this.cases = res.data;
      this.loading = false;
    });
    friends_list().then(res => {
      this.friends = res.data;
    });
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  methods: {
    // 全屏打开图片
    previewImage(e) {
      var current = e;
      wx.previewImage({
        current: current,
        urls: [current]
      });
    },
    // 合作案例滑动
    nextPrev(i) {
      let len = this.cases.length - 1;
      if (i > 1) {
        if (this.currentTab == len) {
          this.currentTab = 0;
          return;
        }
        this.currentTab = this.currentTab + 1;
      } else {
        if (this.currentTab == 0) {
          this.currentTab = len;
          return;
        }
        this.currentTab = this.currentTab - 1;
      }
    },
    checkQrcode() {
      this.qrcodeIsShow = !this.qrcodeIsShow;
    },
    // 查看案例详情
    checkDetail() {
      let id = this.cases[this.currentTab].id;
      console.log(id);
      let url = `../../pages/casesDetail/main?id=${id}`;
      wx.navigateTo({ url: url });
    },
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
.box {
  width: 100%;
  padding: 1rpx 0;
  background-color: white;
  box-sizing: border-box;
  margin: 0 0 20rpx 0;
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
.service {
  width: 100%;
  padding: 1rpx 0 40rpx 0;
  .list {
    width: 100%;
    padding: 0 30rpx;
    .item {
      width: 335rpx;
      height: 200rpx;
      margin: 10rpx 0;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
      }
      .content {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
        img {
          height: 80rpx;
          margin: 0 0 25rpx 0;
        }
        .title {
          font-size: 28rpx;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
}
.process {
  .text {
    margin: 67rpx auto 77rpx;
    width: 588rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(85, 85, 85, 1);
    line-height: 43rpx;
  }
  img {
    width: 591rpx;
    height: 355rpx;
    margin: 0 auto 96rpx;
    display: block;
  }
}
.advantage {
  width: 100%;
  padding: 1rpx 0 40rpx 0;
  height: 903rpx;
  position: relative;
  .public-title {
    .en-title {
      color: rgba(255, 255, 255, 0.2);
    }
    .title {
      color: white;
    }
    .space {
      background-color: white;
    }
  }
  .bg {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .list {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 0 30rpx;
    .item {
      margin: 25rpx 0 20rpx 0;
      img {
        width: 70rpx;
        margin: 0 24rpx 0 0;
      }
      .content {
        .title {
          font-size: 28rpx;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          margin: 0 0 27rpx 0;
        }
        .info {
          width: 582rpx;
          font-size: 20rpx;
          font-weight: 300;
          color: rgba(255, 255, 255, 1);
          line-height: 29rpx;
        }
      }
    }
  }
}
.what {
  width: 100%;
  padding: 1rpx 0 40rpx 0;
  .list {
    width: 100%;
    padding: 0 30rpx;
    .item {
      width: 329rpx;
      height: 385rpx;
      margin: 20rpx 0;
      border: 1px solid rgba(192, 192, 192, 1);
      border-bottom: 3px solid rgba(34, 80, 158, 1);
      img {
        height: 96rpx;
        max-width: 110rpx;
        margin: 51rpx 0 30rpx 0;
      }
      .title {
        margin: 0 0 35rpx 0;
        font-size: 28rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
      .info {
        width: 221rpx;
        font-size: 22rpx;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
        line-height: 34rpx;
      }
    }
  }
  .text1 {
    font-size: 25rpx;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 28rpx;
    text-align: center;
    margin: 93rpx 0 63rpx 0;
  }
  .img {
    width: 691rpx;
    height: 418rpx;
    display: block;
    margin: 0 auto 90rpx;
  }
  .list4 {
    width: 100%;
    .item {
      width: 50%;
      margin: 25rpx 0;
      padding: 0 0 0 60rpx;
      .point {
        width: 9rpx;
        height: 9rpx;
        background: rgba(192, 192, 192, 1);
        border-radius: 50%;
        margin: 0 20rpx 0 0;
      }
      .title {
        font-size: 27rpx;
        font-weight: 400;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
.cases {
  width: 100%;
  padding: 1rpx 0 40rpx 0;
  .case {
    width: 100%;
    background: white;
    padding: 0 0 50rpx 0;
    margin: 0 0 20rpx 0;
    position: relative;
    .left,
    .right {
      width: 41rpx;
      height: 41rpx;
      position: absolute;
      top: 150rpx;
      z-index: 999;
    }
    .left {
      left: 28rpx;
    }
    .right {
      right: 28rpx;
      transform: rotateY(180deg);
    }
    .swiper {
      height: 570rpx;
      width: 678rpx;
      .item {
        .image {
          width: 83%;
        }
        .title {
          font-size: 28rpx;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          margin: 58rpx 0 40rpx 0;
        }
        .info {
          font-size: 22rpx;
          font-weight: bold;
          color: rgba(162, 162, 162, 1);
          line-height: 42rpx;
        }
      }
    }
    .check {
      width: 100%;
      margin: 35rpx 0 0 0;
      .check-detail {
        width: 225rpx;
        height: 57rpx;
        background: rgba(34, 80, 158, 1);
        border-radius: 29rpx;
        font-size: 24rpx;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      .check-qrcode {
        width: 225rpx;
        height: 57rpx;
        border: 1rpx solid rgba(34, 80, 158, 1);
        border-radius: 29rpx;
        font-size: 24rpx;
        font-weight: bold;
        color: rgba(34, 80, 158, 1);
        position: relative;
        .box {
          position: absolute;
          width: 244rpx;
          height: 286rpx;
          z-index: 1;
          top: -286rpx;
          left: 0;
          .bg {
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            position: absolute;
            z-index: -1;
          }
          .qrcode {
            width: 160rpx;
            height: 160rpx;
          }
          div {
            font-size: 20rpx;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            line-height: 29px;
          }
        }
      }
    }
  }
}
.dream {
  width: 100%;
  padding: 1rpx 0 40rpx 0;
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
