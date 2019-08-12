<template>
    <div v-if="!loading">
        <BussinessTop2 :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BussinessTop2>
        <div class="what c-fs-c border-box">
          <div class="title-box c-c-c">
            <div class="title pf">
              什么是微信小程序?
            </div>
            <div class="space"></div>
          </div>
          <img class="img1" v-if="site" :src="site + '/img/business/wpg/1.png'" alt="">
          <div class="info">微信小程序是微信推出的区别于企业订阅号、公众号的一种全新与用户链接的全新技术产品。无需注册、无需登录、无需下载、无需关注，超越H5，操作和APP类似，打开界面速度更快，界面操作更加流畅</div>
        </div>
        <div class="where">
          <div class="title-box c-c-c">
            <div class="title pf">
              哪些行业适合使用微信小程序？
            </div>
            <div class="space"></div>
          </div>
          <div class="list-box r-w-c-c">
            <div class="item pf c-c-c" v-for="(i,k) in list1" :key = k>
              <img :src="i.icon" alt="">
              <div>{{i.text}}</div>
            </div>
          </div>
        </div>
        <div class="rob border-box">
            <div class="title-box c-c-c">
              <div class="title pf">
                抢占微信10亿流量红利
              </div>
              <div class="space"></div>
            </div>
            <div class="list-box r-w-c-fs">
              <div class="item pf c-fs-c" v-for="(i,k) in list2" :key = k>
                <img mode='aspectFit' :src="i.icon" alt="">
                <div class="title">{{i.title}}</div>
                <div class="info">{{i.info}}</div>
              </div>
            </div>
        </div>
        <div class="know">
          <div class="title-box c-c-c">
            <div class="title pf">
              小程序如何让用户知道？
            </div>
            <div class="space"></div>
          </div>
          <div class="box">
            <img class="bg" v-if="site" :src="site + '/img/business/wpg/know-bg.png'" alt="">
            <div class="content border-box r-w-sa-fs">
              <div class="space"></div>
              <div class="item c-fs-c" v-for="(i,k) in list3" :key = k>
                <div class="img-box c-c-c">
                  <img :src="i.icon" alt="">
                </div>
                <div class="point"></div>
                <div class="text pf">{{i.text}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="process">
          <div class="title-box c-c-c">
            <div class="title pf">
              小程序开发流程
            </div>
            <div class="space"></div>
          </div>
          <img v-if="site" :src="site + '/img/business/wpg/2.png'" alt="">
          <div class="list">
            <div class="left-boder"></div>
            <div class="item pf r-nw-fs-fs" v-for="(i,k) in list4" :key = k>
              <div v-if="current4 == k" class="k c-c-c">{{k + 1}}</div>
              <img v-if="site && current4 == k" :src="site + '/img/public/left-blue.png'" alt="">
              <div class="info-box c-fs-fs" @click="checkList4(i,k)">
                <div class="title" :class="[current4 == k ? 'active':'']">{{i.title}}</div>
                <div class="info" v-if="current4 == k">{{i.text}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="service">
          <div class="title-box c-c-c">
            <div class="title pf">
              我们所能提供的服务
            </div>
            <div class="space"></div>
          </div>
          <div class="list r-w-sa-fs">
            <div class="item c-fs-fs" v-for="(i,k) in list5" :key = k>
              <div class="title-box border-box r-nw-fs-c">
                <img mode='aspectFit' class="icon" :src="i.icon" alt="">
                <div class="title">{{i.title}}</div>
              </div>
              <div class="info">{{i.info}}</div>
            </div>
          </div>
        </div>
        <div class="case c-c-c">
          <div class="title-box c-c-c">
              <div class="title pf">
                小程序案例展示
              </div>
              <div class="space"></div>
          </div>
          <img class="left" @click="nextPrev(-1)" v-if="site" :src="site+'/img/public/left-gray.png'" alt="">
          <img class="right" @click="nextPrev(1)" v-if="site" :src="site+'/img/public/left-gray.png'" alt="">
           <swiper class="swiper" circular  :current=currentTab>
            <swiper-item class="item pf c-fs-c" v-for="(i,k) in home.cases" :key = k>
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
                <img @click="previewImage(home.cases[currentTab].qrcode)" class="qrcode" :src='home.cases[currentTab].qrcode' alt="">
                <div>扫码上方二维码</div>
              </div>
            </div>
          </div>
          <!-- <img @click="previewImage('')" src="/img/public/code.png" alt=""> -->
        </div>
    </div>
</template>
<script>
import BussinessTop2 from "../../components/business-top2";
import { multi_cases } from "../../api/case.js";
export default {
  data() {
    return {
      loading: true,
      site: this.$site,
      top: {
        title: "小程序定制开发服务",
        subTitle: "低成本、快速实现商业模式，借势微信流量生态",
        bg: this.$site + "/img/business/wpg/top-bg.png"
      },
      list1: [
        {
          icon: this.$site + "/img/business/wpg/list1-1.png",
          text: "电商购物"
        },
        {
          icon: this.$site + "/img/business/wpg/list1-2.png",
          text: "金融行业"
        },
        {
          icon: this.$site + "/img/business/wpg/list1-3.png",
          text: "扫码点餐"
        },
        {
          icon: this.$site + "/img/business/wpg/list1-4.png",
          text: "生活服务"
        },
        {
          icon: this.$site + "/img/business/wpg/list1-5.png",
          text: "教育培训"
        },
        {
          icon: this.$site + "/img/business/wpg/list1-6.png",
          text: "旅游行业"
        },
        {
          icon: this.$site + "/img/business/wpg/list1-7.png",
          text: "OA系统"
        },
        {
          icon: this.$site + "/img/business/wpg/list1-8.png",
          text: "其他行业"
        }
      ],
      list2: [
        {
          info: "自带流量直面9亿微信用户",
          title: "庞大市场",
          icon: this.$site + "/img/business/wpg/list2-1.png"
        },
        {
          info: "实现简约极致用户体验",
          title: "无需安装",
          icon: this.$site + "/img/business/wpg/list2-2.png"
        },
        {
          info: "提供精准推送服务精准人群",
          title: "精准定位",
          icon: this.$site + "/img/business/wpg/list2-3.png"
        },
        {
          info: "高达几十个线上线下场景入口",
          title: "入口丰富",
          icon: this.$site + "/img/business/wpg/list2-4.png"
        },
        {
          info: "自显示5公里内所有场景定位小程序",
          title: "引导流量",
          icon: this.$site + "/img/business/wpg/list2-5.png"
        },
        {
          info: "媲美APP开发成本不到APP的1％",
          title: "超低成本",
          icon: this.$site + "/img/business/wpg/list2-6.png"
        },
        {
          info: "可视化制作所见所得",
          title: "制作简单",
          icon: this.$site + "/img/business/wpg/list2-7.png"
        },
        {
          info: "一键安装快速生成小程序",
          title: "快速生成",
          icon: this.$site + "/img/business/wpg/list2-8.png"
        },
        {
          info: "PC+APP+微站+手机战+小程序五站合一",
          title: "全网覆盖",
          icon: this.$site + "/img/business/wpg/list2-9.png"
        },
        {
          info: "五站同步数据统一管理",
          title: "统一管理",
          icon: this.$site + "/img/business/wpg/list2-10.png"
        }
      ],
      list3: [
        {
          icon:this.$site +  "/img/business/wpg/list3-1.png",
          text: "搜索"
        },
        {
          icon:this.$site +  "/img/business/wpg/list3-2.png",
          text: "扫一扫"
        },
        {
          icon:this.$site +  "/img/business/wpg/list3-3.png",
          text: "好友转发"
        },
        {
          icon:this.$site +  "/img/business/wpg/list3-4.png",
          text: "群转发"
        },
        {
          icon:this.$site +  "/img/business/wpg/list3-5.png",
          text: "发现"
        }
      ],
      list4: [
        {
          title: "前期沟通",
          text: "一对一研发顾问与产品经理进行需求概要沟通，了解需求"
        },
        {
          title: "确认合作",
          text: "一对一研发顾问与产品经理进行需求概要沟通，了解需求"
        },
        {
          title: "需求评估",
          text: "一对一研发顾问与产品经理进行需求概要沟通，了解需求"
        },
        {
          title: "原型制作",
          text: "一对一研发顾问与产品经理进行需求概要沟通，了解需求"
        },
        {
          title: "UI设计",
          text: "一对一研发顾问与产品经理进行需求概要沟通，了解需求"
        },
        {
          title: "产品开发",
          text: "一对一研发顾问与产品经理进行需求概要沟通，了解需求"
        },
        {
          title: "项目测试",
          text: "一对一研发顾问与产品经理进行需求概要沟通，了解需求"
        },
        {
          title: "交付验收",
          text: "一对一研发顾问与产品经理进行需求概要沟通，了解需求"
        }
      ],
      current4: 0,
      list5: [
        {
          icon: this.$site + "/img/business/wpg/list4-1.png",
          title: "定制开发",
          info: "根据用户特性、产品需求为企业量身定制PC+手机+微信三网合一"
        },
        {
          icon: this.$site + "/img/business/wpg/list4-2.png",
          title: "解决方案",
          info: "聚米互创科技励志为全球客户提供世界级互联网+解决方案"
        },
        {
          icon: this.$site + "/img/business/wpg/list4-3.png",
          title: "大数据分析",
          info:
            "通过在互联网领域多年的沉淀。协助企业更快了解融入市场变化，更灵活地采取可行性策略。"
        },
        {
          icon: this.$site + "/img/business/wpg/list4-4.png",
          title: "版本运营管理",
          info: "涵盖推送、云修复、版本更新、大数据统计分析等全面运维功能。"
        }
      ],
      currentTab: 0,
      qrcodeIsShow: false,
      home: {
        cases: [
          {
            qrcode: ""
          }
        ]
      }
    };
  },
  onLoad() {
    multi_cases({ cate: 1 }).then(res => {
      this.home.cases = res.data;
      this.loading = false;
    });
  },
  onShareAppMessage() {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  methods: {
    checkList4(i, k) {
      this.current4 = k;
    },
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
      let len = this.home.cases.length - 1;
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
      let id = this.home.cases[this.currentTab].id;
      console.log(id);
      let url = `../../pages/casesDetail/main?id=${id}`;
      wx.navigateTo({ url: url });
    }
  },
  components: {
    BussinessTop2
  }
};
</script>
<style lang="scss" scoped>
.what {
  width: 100%;
  padding: 1rpx 0 50rpx 0;
  margin: 0 0 20rpx 0;
  background: rgba(255, 255, 255, 1);
  .img1 {
    width: 714rpx;
    height: 409rpx;
    display: block;
    margin: 30rpx auto 74rpx;
  }
  .info {
    width: 560rpx;
    font-size: 24rpx;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 49rpx;
  }
}
.title-box {
  margin: 45rpx 0;
  .title {
    font-size: 28rpx;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 21rpx;
    margin: 0 0 32rpx 0;
  }
  .space {
    width: 56rpx;
    height: 4rpx;
    background: rgba(99, 98, 241, 1);
  }
}
.where {
  width: 100%;
  padding: 1rpx 0 50rpx 0;
  margin: 0 0 20rpx 0;
  background: rgba(255, 255, 255, 1);
  .list-box {
    .item {
      width: 192rpx;
      height: 192rpx;
      margin: 20rpx 50rpx;
      border: 1rpx solid rgba(157, 157, 157, 1);
      border-radius: 50%;
      img {
        width: 95rpx;
        height: 77rpx;
        margin: 0 0 15rpx 0;
      }
      div {
        font-size: 24rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        line-height: 19rpx;
      }
    }
  }
}
.rob {
  width: 100%;
  background: white;
  padding: 1rpx 0 90rpx 0;
  .list-box {
    width: 100%;
    .item {
      margin: 30rpx 0rpx;
      width: 45%;
      img {
        height: 74rpx;
        margin: 0 0 31rpx 0;
      }
      .title {
        font-size: 24rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
        margin: 0 0 17rpx;
      }
      .info {
        width: 269rpx;
        font-size: 22rpx;
        font-weight: 500;
        color: rgba(136, 136, 136, 1);
        line-height: 30rpx;
        text-align: center;
      }
    }
  }
}
.know {
  width: 100%;
  margin: 20rpx 0;
  padding: 1rpx 0;
  height: 522rpx;
  background: rgba(255, 255, 255, 1);
  .box {
    width: 100%;
    height: 328rpx;
    margin: 50rpx 0 0 0;
    position: relative;
    .bg {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
    }
    .content {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      padding: 0 20rpx;
      .item {
        // margin: 0 20rpx;
        .img-box {
          width: 88rpx;
          height: 88rpx;
          border: 1rpx solid rgba(255, 255, 255, 1);
          border-radius: 50%;
          margin: 69rpx 0 0rpx 0;
          img {
            width: 37rpx;
            height: 39rpx;
          }
        }
        .point {
          margin: 29rpx 0;
          width: 16rpx;
          height: 16rpx;
          background: rgba(255, 255, 255, 1);
          border-radius: 50%;
        }
        .text {
          font-size: 24rpx;
          font-weight: 500;
          color: rgba(251, 252, 253, 1);
        }
      }
      .space {
        position: absolute;
        top: 60%;
        width: 100%;
        height: 1rpx;
        background: rgba(255, 255, 255, 1);
        opacity: 0.8;
      }
    }
  }
}
.process {
  width: 100%;
  margin: 20rpx 0;
  padding: 1rpx 0 88rpx 0;
  background: rgba(255, 255, 255, 1);
  img {
    width: 647rpx;
    height: 573rpx;
    margin: 50rpx auto 80rpx;
    display: block;
  }
  .list {
    width: 100%;
    position: relative;
    .left-boder {
      width: 1rpx;
      height: 100%;
      position: absolute;
      z-index: 0;
      left: 85rpx;
      border-left: 1px dashed rgba(204, 204, 204, 1);
    }
    .item {
      width: 100%;
      margin: 30rpx 0;
      position: relative;
      .k {
        position: absolute;
        top: 0;
        left: 63rpx;
        width: 48rpx;
        height: 48rpx;
        background: rgba(34, 80, 158, 1);
        border-radius: 50%;
        font-size: 24rpx;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      img {
        width: 20rpx;
        height: 16rpx;
        margin: 0;
        position: absolute;
        left: 135rpx;
        top: 18rpx;
      }
      .info-box {
        margin: 0 0 0 182rpx;
        .title {
          font-weight: bold;
          margin: 5rpx 0 19rpx 0;
          font-size: 26rpx;
          color: rgba(85, 85, 85, 1);
        }
        .active {
          font-size: 28rpx;
          color: rgba(34, 80, 158, 1);
        }
        .info {
          width: 538rpx;
          font-size: 24rpx;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 38rpx;
        }
      }
    }
  }
}
.service {
  width: 100%;
  margin: 20rpx 0;
  padding: 1rpx 0 88rpx 0;
  background: rgba(255, 255, 255, 1);
  .list {
    width: 100%;
    .item {
      width: 288rpx;
      .title-box {
        margin: 22rpx 0;
        padding: 20rpx 0 30rpx;
        border-bottom: 1rpx solid rgba(214, 215, 220, 1);
        .icon {
          max-width: 36rpx;
          height: 32rpx;
          margin: 0 17rpx 0 0;
        }
        .title {
          margin: 0;
          font-size: 32rpx;
          font-weight: bold;
          color: rgba(34, 80, 158, 1);
        }
      }
      .info {
        width: 100%;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(126, 134, 155, 1);
        line-height: 47rpx;
      }
    }
  }
}
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
    top: 250rpx;
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
</style>
