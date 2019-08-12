<template>
    <div v-if="!loading">
        <BaseTop :title=top.title :bg=top.bg :subTitle=top.subTitle></BaseTop>
        <div class="tab">
          <swiper class="swiper r-nw-fs-c" display-multiple-items=4 >
            <swiper-item class="item border-box c-c-c" :class="currentTab == k ? 'active':''" v-for="(i,k) in case_cate" @click="checkTab(i,k)" :key = k>
              <div class="title-box c-c-c">
                <div class="title line-1 pf">{{i.name}}</div>
                <div class="mask" v-if="currentTab == k"></div>
              </div>
            </swiper-item>
          </swiper>
        </div>
        <div class="list-box border-box r-w-sb-c" v-if="!listLoading">
          <div class="item c-fs-c" @click="checkDetail(i.id)" v-for="(i,k) in list" :key = k>
            <img mode='aspectFill' :src="i.cover_image" alt="">
            <div class="title line-1 pf">{{i.title}}</div>
          </div>
        </div>
        <div class="nomore c-c-c" v-if="!listLoading">{{tips}}</div>
        <QuXiang num=1></QuXiang>
    </div>
</template>
<script>
import QuXiang from "../../components/qu-xiang.vue";
import BaseTop from "../../components/base-top.vue";
import { banner } from "../../api/banner.js";
import { case_cate, case_list } from "../../api/case.js";
export default {
  data() {
    return {
      loading: true,
      listLoading: true,
      top: {
        title: "用服务创造价值   用科技造就品牌",
        subTitle:
          "CREATING VALUE WITH SERVICE AND CREATING BRAND BY TECHNOLOGY",
        bg: this.$site + "/img/case/top-bg.png"
      },
      // 分类
      currentTab: 0,
      case_cate: [
        {
          name: "全部"
        }
      ],
      tips: "下拉加载更多",
      list: [],
      page: 1,
      cateID: 0
    };
  },
  onLoad() {
    case_cate().then(res => {
      this.case_cate = this.case_cate.concat(res.data);
      this.loading = false;
    });
    this.getList();
    // banner({ type: 3 }).then(res => {
    //   let data = {
    //     title: res.data[0].title,
    //     subTitle: res.data[0].sub_title,
    //     bg: res.data[0].image
    //   };
    //   this.top = data;
    // });
  },
  methods: {
    checkTab(i, k) {
      this.cateID = i.id || 0;
      this.listLoading = true;
      this.currentTab = k;
      this.list = [];
      this.page = 1;
      this.getList();
    },
    getList() {
      let params = {
        page: this.page
      };
      if (this.cateID != 0) {
        params.cate = this.cateID;
      }
      case_list(params).then(res => {
        this.list = this.list.concat(res.data.rows);
        if (res.data.rows.length < 10) {
          this.tips = "没有更多了";
          // wx.showToast({
          //   title: '没有更多了', //提示的内容,
          //   icon: 'none', //图标,
          //   duration: 1000, //延迟时间,
          // });
        } else {
          this.tips = "下拉加载更多";
        }
        this.listLoading = false;
      });
    },
    // 查看详情
    checkDetail(id) {
      let url = `../../pages/casesDetail/main?id=${id}`;
      wx.navigateTo({ url: url });
    }
  },
  onPageScroll: function(e) {
    
  },
  onShow() {
    wx.hideTabBar();
  },
  onShareAppMessage() {
    
  },

  onReachBottom() {
    this.tips = "加载中...";
    this.page = this.page + 1;
    this.getList();
  },
  components: {
    QuXiang,
    BaseTop
  }
};
</script>
<style lang="scss" scoped>
.tab {
  width: 100%;
  height: 130rpx;
  background: white;
  .swiper {
    height: 100%;
    width: 90%;
    margin: 0 auto;
    .item {
      overflow: visible !important;
      width: 25%;
      .title-box {
        position: relative;
        width: fit-content;
        .title {
          max-width: 100%;
          transition: 0.1s all linear;
          font-size: 26rpx;
          font-weight: 400;
          color: rgba(85, 85, 85, 1);
        }
        .mask {
          position: absolute;
          bottom: 0%;
          left: 16%;
          width: 100%;
          height: 11rpx;
          background: rgba(34, 80, 158, 1);
          box-shadow: 0px 3rpx 3rpx 0px rgba(34, 80, 158, 0.4);
          opacity: 0.5;
          border-radius: 16rpx;
        }
      }
    }
    .active {
      .title {
        font-size: 32rpx;
        font-weight: 500;
        color: rgba(51, 51, 51, 1);
      }
    }
  }
}
.nomore {
  font-size: 24rpx;
  width: 100%;
  height: 40rpx;
  font-weight: 400;
  margin: 30rpx auto 180rpx;
  text-align: center;
  color: rgba(155, 155, 155, 1);
}
.list-box {
  width: 100%;
  background: white;
  padding: 0 30rpx;
  .item {
    width: 300rpx;
    background: rgba(255, 255, 255, 1);
    box-shadow: 6rpx 4rpx 26rpx 1rpx rgba(133, 133, 133, 0.13);
    border-radius: 8rpx;
    margin: 34rpx 15rpx;
    img {
      width: 100%;
      height: 300rpx;
    }
    .title {
      width: 100%;
      height: 83rpx;
      text-align: center;
      line-height: 83rpx;
      font-size: 26rpx;
      font-weight: 500;
      color: rgba(51, 51, 51, 1);
    }
  }
}
</style>
