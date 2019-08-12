<template>
    <div v-if="!loading">
        <BussinessTop2 :bg='top.bg' :title='top.title' :subTitle='top.subTitle'></BussinessTop2>
        <div class="top border-box">
          <div class="public-title c-c-c">
            <div class="title pf">微生态场景营销</div>
            <div class="info pf-light">见微知著 构建品牌专属微生态营销场景揭秘大品牌营销背后的成功逻辑</div>
          </div>
          <div class="list c-fs-c">
            <div class="item border-box pf r-nw-sa-c" :style="{background:k%2 != 0 ? 'white':'#FBFBFB'}" v-for="(i,k) in list1" :key = k>
              <div class="img-box c-c-c" v-if="k%2 != 0">
                  <img mode='widthFix' :src="i.img" alt="">
              </div>
              <div class="text border-box pf c-c-fs">
                <div class="title">{{i.title}}</div>
                <div class="info ">{{i.info}}</div>
              </div>
              <div class="img-box c-c-c" v-if="k%2 == 0">
                  <img mode='widthFix' :src="i.img" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="problem border-box">
          <div class="public-title c-c-c">
            <div class="title pf">解决微信营销四大难题</div>
            <div class="info pf-light">助力企业把握营销机遇</div>
          </div>
          <div class="list r-w-c-c">
              <div class="item" v-for="(i,k) in list2" :key = k>
                  <img class="bg"  :src="i.bg" alt="">
                  <div class="box c-c-c">
                    <img mode='widthFix' class="icon" :src="i.icon" alt="">
                    <div class="title pf">{{i.title}}</div>
                    <div class="info pf">{{i.info}}</div>
                  </div>
              </div>
          </div>
        </div>
        <div class="advantage border-box">
          <div class="public-title c-c-c">
            <div class="title pf">微信公众号优势</div>
            <div class="info pf-light">共享微信10亿用户、连接线下服务场景、使用方便体验良好</div>
          </div>
          <div class="list r-w-c-fs">
              <div class="item c-fs-fs" v-for="(i,k) in list3" :key = k>
                 <div class="up r-nw-fs-c">
                   <img mode='aspectFit' :src="i.icon" alt="">
                   <div class="title pf">{{i.title}}</div>
                 </div>
                 <div class="space"></div>
                 <div class="bottom pf">{{i.info}}</div>
              </div>
          </div>
        </div>
        <div class="all border-box">
          <div class="public-title c-c-c">
            <div class="title pf">全方位代运营解决方案</div>
            <div class="info pf-light">创意、内容、营销、公关面面俱到</div>
          </div>
          <div class="list r-w-c-fs">
              <div class="item c-fs-c" v-for="(i,k) in list4" :key = k>
                <img mode='aspectFit' :src="i.icon" alt="">
                <div class="title pf">{{i.title}}</div>
                <div class="bottom pf">{{i.info}}</div>
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
        title: "微信公众号定制服务",
        subTitle: "从0到1的微信代运营服务平台，专注企业微生态构建及营销服务",
        bg: this.$site + "/img/business/public/top-bg.png"
      },
      list1: [
        {
          title: "精准的品牌公众号定位",
          info:
            "公众号定位诊断与分析、品牌公众号运营战略、运营计划推进表、阶段性运营报告等；",
          img: this.$site + "/img/business/public/list1-1.png"
        },
        {
          title: "专属化的微生态场景系统构建",
          info:
            "微信公众号导航系统、微官网自定义菜单、微活动素材库条目，微商城微会员系统、公众号视觉识别系统等搭建；",
          img: this.$site + "/img/business/public/list1-2.png"
        },
        {
          title: "战略性的公众号内容代运营",
          info:
            "日常公众号代运营，品牌理念产品深度解读传播，微生态活动营销，创意事件营销等，助力品牌粉丝可持续增长；",
          img: this.$site + "/img/business/public/list1-3.png"
        },
        {
          title: "创造性的事件营销活动",
          info:
            "根据品牌调性结合热点话题、节假日，运营较新的微技术开展线上活动营销，定制专属品牌话题/事件促进品牌快速裂变增粉；",
          img: this.$site + "/img/business/public/list1-4.png"
        },
        {
          title: "定制化的公众号识别系统",
          info:
            "公众号整体视觉设计，包含头像、头图、尾图等互动性展示图片设计文章排版、图片调性等综合指导，文章一级标题二级标题内文等字号规范",
          img: this.$site + "/img/business/public/list1-5.png"
        }
      ],
      list2: [
        {
          bg: this.$site + "/img/business/public/list-bg-2-1.png",
          icon: this.$site + "/img/business/public/list2-1.png",
          title: "定位",
          info: "缺乏品牌概念，内容空洞无规划"
        },
        {
          bg: this.$site + "/img/business/public/list-bg-2-2.png",
          icon: this.$site + "/img/business/public/list2-2.png",
          title: "推广",
          info: "推广方式单一，经验不足效果差"
        },
        {
          bg: this.$site + "/img/business/public/list-bg-2-3.png",
          icon: this.$site + "/img/business/public/list2-3.png",
          title: "粉丝",
          info: "平台互动性差，拉新留存效率低"
        },
        {
          bg: this.$site + "/img/business/public/list-bg-2-4.png",
          icon: this.$site + "/img/business/public/list2-4.png",
          title: "团队",
          info: "运营人才匮乏，策划制定无方向"
        }
      ],
      list3: [
        {
          title: "移动互联网趋势",
          info: "移动互联网用户已超过传统互联网用户,成为了目前的主流",
          icon: this.$site + "/img/business/public/list3-1.png"
        },
        {
          title: "高效CRM管理工具",
          info: "微信粉丝即用户、 分门别类管理用户",
          icon: this.$site + "/img/business/public/list3-2.png"
        },
        {
          title: "大流量切入口",
          info: "7亿微信用户，巨大流量入口",
          icon: this.$site + "/img/business/public/list3-3.png"
        },
        {
          title: "人性化的营销方式",
          info: "是否接受信息全由用户做主",
          icon: this.$site + "/img/business/public/list3-4.png"
        },
        {
          title: "用户粘性强",
          info: "人人都在使用微信， 微信的用户粘性和使用更强",
          icon: this.$site + "/img/business/public/list3-5.png"
        },
        {
          title: "产品销售渠道",
          info: "微信助企业实现多元化营销",
          icon: this.$site + "/img/business/public/list3-6.png"
        }
      ],
      list4: [
        {
          title: "品牌定位分析",
          info: "运营老司机带队，明确品牌定位，量身定做推广方案",
          icon: this.$site + "/img/business/public/list4-1.png"
        },
        {
          title: "全渠道推广",
          info: "整合互联网传播资源，百种推广方式致力精推广",
          icon: this.$site + "/img/business/public/list4-2.png"
        },
        {
          title: "市场、数据分析",
          info: "了解客户行业现状，数据分析运营现状",
          icon: this.$site + "/img/business/public/list4-3.png"
        },
        {
          title: "营销活动策略",
          info: "营销活动与营销插件结合，精致活动实现粉丝裂变式增长",
          icon: this.$site + "/img/business/public/list4-4.png"
        },
        {
          title: "平台系统搭建",
          info: "个性化微信公众号平台系统，操作便捷，完美呈现",
          icon: this.$site + "/img/business/public/list4-5.png"
        },
        {
          title: "内容运营",
          info:
            "品牌、产品、创意营销，活动营销，增值服务等角度进行定制化管理运营",
          icon: this.$site + "/img/business/public/list4-6.png"
        },
        {
          title: "商城运营",
          info: "个性化商城打造，尽显便捷性运营策略+多渠道助力商城引流",
          icon: this.$site + "/img/business/public/list4-7.png"
        },
        {
          title: "分销运营",
          info: "直销、分销双模式，提高引流效率，降低获客成本",
          icon: this.$site + "/img/business/public/list4-8.png"
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
    BussinessTop2
  }
};
</script>
<style lang="scss" scoped>
.public-title {
  width: 100%;
  margin: 50rpx 0;
  .title {
    font-size: 28rpx;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 0 0 31rpx 0;
  }
  .info {
    width: 381rpx;
    font-size: 20rpx;
    text-align: center;
    font-weight: 300;
    color: rgba(136, 136, 136, 1);
    line-height: 32rpx;
  }
}
.top {
  width: 100%;
  background: white;
  padding: 1rpx 0 60rpx;
  .list {
    width: 100%;
    .item {
      padding: 80rpx 0;
      width: 100%;
      .img-box {
        width: 45%;
        img {
          width: 70%;
        }
      }
      .text {
        width: 55%;
        padding: 0 30rpx;
        .title {
          font-size: 26rpx;
          font-weight: bold;
          color: rgba(51, 51, 51, 1);
          margin: 0 0 30rpx 0;
        }
        .info {
          width: 337rpx;
          font-size: 22rpx;
          font-weight: 400;
          color: rgba(102, 102, 102, 1);
          line-height: 37rpx;
        }
      }
    }
  }
}
.problem {
  width: 100%;
  background: white;
  padding: 1rpx 0 60rpx;
  margin: 20rpx 0;
  .list {
    width: 100%;
    .item {
      width: 339rpx;
      height: 225rpx;
      margin: 8rpx;
      position: relative;
      .bg,
      .box {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      .box {
        z-index: 2;
        .icon {
          width: 49rpx;
        }
        .title {
          font-size: 28rpx;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 16rpx;
          margin: 31rpx 0 23rpx 0;
        }
        .info {
          width: 285rpx;
          font-size: 20rpx;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          line-height: 16rpx;
        }
      }
      .bg {
        z-index: 1;
      }
    }
  }
}
.advantage {
  width: 100%;
  background: white;
  padding: 1rpx 0 60rpx;
  margin: 20rpx 0;
  .list {
    width: 100%;
    .item {
      width: 284rpx;
      margin: 20rpx 45rpx;
      .up {
        img {
          height: 28rpx;
          max-width: 32rpx;
          margin: 0 15rpx 0 0;
        }
        .title {
          font-size: 28rpx;
          font-weight: bold;
          color: rgba(34, 80, 158, 1);
        }
      }
      .space {
        margin: 25rpx 0 24rpx 0;
        width: 239rpx;
        height: 2rpx;
        background: rgba(214, 215, 220, 1);
      }
      .bottom {
        width: 100%;
        font-size: 24rpx;
        font-weight: 400;
        color: rgba(126, 134, 155, 1);
        line-height: 42rpx;
      }
    }
  }
}
.all {
  width: 100%;
  background: white;
  padding: 1rpx 0 60rpx;
  margin: 20rpx 0 0;
  .list {
    width: 100%;
    .item {
      width: 264rpx;
      margin: 40rpx 45rpx;
      img {
        height: 70rpx;
        max-width: 80rpx;
        margin: 0 35rpx 0 0;
      }
      .title {
        font-size: 24rpx;
        font-weight: 500;
        margin: 31rpx 0;
        color: rgba(51, 51, 51, 1);
      }
      .bottom {
        text-align: center;
        width: 100%;
        font-size: 20rpx;
        font-weight: 400;
        color: rgba(136, 136, 136, 1);
        line-height: 28rpx;
      }
    }
  }
}
</style>
