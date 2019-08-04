<template>
  <div class="vertical ">
    <wxc-minibar
      @wxcMinibarLeftButtonClicked="clickMenu"
      @wxcMinibarRightButtonClicked="minibarRightButtonClick"
      :use-default-return="false"
      :bar-style="minibarStyle"
    >
      <text
        class="iconfont minibar-left" 
        slot="left"
      >&#xe627;</text>
      <div
        slot="middle"
        class="middle"
      >
        <text
          class="minibar-middle">{{tabTitles[tabCurrentTarget].title}}</text>
        <text
          class="minibar-middle">: {{tabTitles[tabCurrentTarget].child[classify].title}}</text>
      </div>
      <text
        class="iconfont minibar-right"
        slot="right"
        @click="rightButtonClick"
      >&#xe77e;</text>
    </wxc-minibar>
    <!-- <div class="header">
      <div class="menu"
        @click="clickMenu"
      >
        <text class="iconfont menu-icon">&#xe627;</text>
      </div>
      <text>{{tabTitles[tabCurrentTarget].title}}</text>
      <text>{{tabTitles[tabCurrentTarget].child[classify].title}}</text>
    </div> -->
    <list
      @swipe="swipeRight"
      @scroll="listScroll"
      :style="contentStyle">
      <refresh @refresh="onRefresh" 
        :style="{'height': refreshHeight + 'px'}"
        @pullingdown="onPullingDown" 
        :display="refreshing ? 'show' : 'hide'"
      >
        <text class="refresh-txt">{{refreshingTxt}}</text>
        
        <text v-if="onRefreshing" 
          class="iconfont refresh-icon"
          :style="{'transform': `rotate(${loadingR}deg)`}"
        >&#xe621;</text> 
        <!-- 旋转加载图标 -->
      </refresh>
      <cell  v-for="(item, i) in getListBySC" :key="i + 'list'">
        <Item :item="item" />
      </cell>
      
    </list>
    <div class="footer" @swipe="swipeUp">
    
      
      <!-- 方向图标 -->
      <div @click="openBottomPopup" class="status-bar">
      
        <text class="more-icon iconfont"
          :style="{
            'transform': isBottomShow ? 'rotateX(180deg)' : 'rotateX(0deg)'
          }"
        >&#xe7ed;</text>  
        <text
          class="select-txt iconfont"
          :style="{'color': statusList[status].color}"
        >{{statusIcon[status]}}</text>
      </div>
      <div class="classify-con">
        <text
          v-for="(val, i) in tabTitles[0].child"
          :key="'tabChild_'+i"
          @click="changeClassify(i)"
          :style="{
            'fontSize': tabStyles.iconFontSize + 'px',
            'color': classify === i ? tabStyles.activeIconFontColor : tabStyles.iconFontColor
          }"
          :class="['classify', 'iconfont', classify === 0 ? 'active-c' : 'active-unc']"
        >{{tabTitles[0].child[i].codePoint}}</text>
      </div>
      <div class="daily-con">
        <text class="iconfont daily-icon">{{tabTitles[1].codePoint}}</text>
      </div>
    </div>
    <wxc-popup popup-color="white"
            ref="wxcPopup"
            :show="isBottomShow"
            @wxcPopupOverlayClicked="popupOverlayBottomClick"
            pos="bottom"
            height="550"
            :animation="{timingFunction: 'ease-out'}">
      <div class="popup-con">
        <div class="status" v-for="val in statusList" 
          :key="val.status+'_status'"
          @click="changeStatus(val.status)"
          :style="{
            'backgroundColor': val.status === status ? '#EEE' : 'white',
          }"
        >
          <text
            class="select-txt iconfont"
            :style="{'color': val.color}"
          >{{val.statusIcon}}</text>
          <text class="status-txt">{{val.statusName}}</text>
        </div>
      </div>
    </wxc-popup>
    <wxc-popup popup-color="white"
            ref="wxcPopupLeft"
            :show="isMenuShow"
            @wxcPopupOverlayClicked="popupOverlayLeftClick"
            pos="left"
            width="450"
            :animation="{timingFunction: 'ease-out'}">
      <div class="">
        <text>hi</text>
      </div>
    </wxc-popup>
    
  </div>
</template>
<style scoped>
.minibar-left {
  font-size: 33px;
  color: #333;
}
.minibar-middle {
  font-size: 34px;
  color: black;
}
.middle {
  flex-direction: row;
}
.minibar-right {
  font-size: 33px;
  color: #333;
}
.menu {
  padding: 10px;
}
.menu-icon {
  color: #555;
  font-size: 36px;
}
.daily-icon {
  font-size: 40px;
  color: #555;
}

.success {
  color: #22ff22;
}
.cancel {
  color: #555555;
}
.undone {
  color: #888888;
}
.going-on {
  color: #ff2222;
}
.all {
  color: #ff9900;
}

.more-icon {
  font-size: 30px;
  font-weight: 600;
  color: #555;
  padding: 5px;
  transition: transform 0.3s ease-out;
}

.classify-con {
  width: 20%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.classify {
  transition: color 0.3s ease-in-out;
  /* color: black; */
  border-radius: 10px;
  padding: 10px;
  font-size: 32px;
}
.active-c {
  /* color: #EE8800; */
  color: #000;
}
.active-unc {
  color: black;
}
.classify-s {
  background: #FF3000;
  right: -197px;
}
.classify-uns {
  right: -105px;
  
  background: #FF6000;
  /* background: white; */
}
.classify-back {
  transition-property: right, background;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  /* right: 82px; */
  /* right: 166px; */
  width: 90px;
  /* border-radius: 10px; */
  height: 100px;
  /* background: #ffaa11; */
  /* background-image: linear-gradient(to right, #ff9900, #cc0000); */
}
.popup-con {
  /* padding-top: 60px; */
  height: 550px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.cheer {
  color: black;
  font-size: 30px;
}
.iconfont {
  font-family: iconfont;
}
.important {
  flex-direction: row;
  padding-top: 10px;
  justify-content: space-around;
  background-image: linear-gradient(to right, #ff9900, #cc0000);
}
.input-txt {
  outline: none;
  color: #333;
  font-size: 28px;
  padding-left: 8px;
  padding-right: 8px;
}
.header {
  background-color: white;
  border-bottom-color: #EEE;
  border-bottom-width: 0.5px;
  height: 72px;
  flex-direction: row;
  align-items: center;
}
.footer {
  /* background-image: linear-gradient(to right, #FFAA22, #CC2200); */
  height: 104px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
  border-top-width: 0.5px;
  border-color: #eee;
}
.select-txt { 
  transition: color 0.5s ease;
  /* color: #666; */
  font-size: 40px;
  /* margin-right: 15px; */
  /* transform: rotateZ(180deg); */
}
.search {
  font-size: 40px;
  color: #333;
}
.searchbar {
  width: 95%;
  background: #eee;
  font-size: 30px;
  border-radius: 50px;
  padding: 8px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
}
.status {
  padding-left: 32px;
  padding-right: 32px;
  width: 100%;
  height: 20%;
  flex-direction: row;
  align-items: center;
}
.status-bar {
  flex-direction: row;
  align-items: center;
}
.status-txt {
  padding-top: 20px;
  margin-left: 25px;
  padding-bottom: 20px;
  padding-right: 200px;
  margin-right: 35px;
  font-size: 35px;
  /* border-bottom-width: 0.5px;
  border-color: #eee; */
}

.refresh {
  height: 100px;
}
.refresh-txt {
  padding: 5px;
  color: #555;
  font-size: 30px;
}
.refresh-icon {
  /* transition: transform 10s linear; */
  font-size: 36px;
  color: #555;
  padding: 5px;
}

</style>
<script>
// <text :class="['classify-back', classify === 1 ? 'classify-s' : 'classify-uns']"></text>
// https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js
import Item from "./pageIndex/Item";
import { Utils, WxcPopup, WxcSwipeAction, WxcMinibar } from "weex-ui";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  components: { Item, WxcPopup, WxcMinibar },
  data: () => ({
    contentStyle: {
      height: "",
      // paddingTop: '90px'
    },
    isBottomShow: false,
    isMenuShow: false,
    refreshing: false, // 刷新组件是否展示
    loadingR: 0,
    pullingDownCount: 0,
    pullingDownInterval: 0,
    refreshingTxt: '下拉刷新',// 刷新组件提示语
    onRefreshing: false, // 旋转loading组建当列表在刷新时显示
    pullingDistance: 0,
    refreshHeight: 100,
    // statusIcon: '\ue844',
  }),
  filters: {},
  computed: {
    ...mapState("tab", {
      tabCurrentTarget: 'tabCurrentTarget',
      tabTitles: state => state.tabIconFontTitles,
      tabStyles: state => state.tabIconFontStyles
    }),
    ...mapState("list", {
      status: "status",
      statusArr: "statusArr",
      statusIcon: "statusIcon",
      classify: "classify",
      statusList: "statusList",
      popupZindex: "popupZindex",
      list: state => state.list
    }),
    ...mapState('pageConfig', {
      minibarStyle: 'minibar',
      minibarLeft: 'minibarLeft',
      minibarMiddle: 'minibarMiddle',
      minibarRight: 'minibarRight',
      pageTest: 'pageTest',
    }),
    ...mapGetters("list", {
      getListBySC: "getListByStatusClassify", // 通过status和classify过滤掉清单
      gettersTest: "gettersTest"
    })
  },
  created() {
    const tabPageHeight = Utils.env.getPageHeight();
    // const tabPaageWidth = Utils.env.getPageWidth();
    // console.log(Utils.env);
    // this.contentStyle.width = tabPaageWidth + 'px';
    // 如果页面没有导航栏，可以用下面这个计算高度的方法
    // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
    // console.log(this.contentStyle)
    const { tabStyles } = this;
    this.contentStyle.height = tabPageHeight - 190 + "px";
    // this.contentStyle.height = (tabPageHeight) + 'px';
    // console.log(this.popupZindex);
    // console.log(this.getListBySC);
  },
  methods: {
    ...mapMutations("list", {
      setClassify: "setClassify",
      setStatus: "setStatus",
      setPopupZ: "setPopupZ"
    }),
    swipeRight (e) {
      let direction = e.direction
      if (direction === 'right') {
        this.isMenuShow = true
      }
    },
    swipeUp (e) {
      let direction = e.direction
      if (direction === 'up' && this.tabCurrentTarget === 0) {
        this.isBottomShow = true
      }
    },
    clickMenu (e) { // minibarLeftButtonClick
      this.isMenuShow = true;
    },
    minibarRightButtonClick () {
      // modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
    },
    changeStatus(status) {
      this.setStatus(status);
      this.$refs.wxcPopup.hide();
    },
    popupOverlayBottomClick() {
      this.isBottomShow = false;
    },
    popupOverlayLeftClick() {
      this.isMenuShow = false;
    },
    onPullingDown (e) {
      this.refreshHeight = 150
      let {dy, pullingDistance} = e;
      // console.log(`dy: ${dy}  distance: ${pullingDistance}`)
      this.refreshing = true;
      this.pullingDownCount += 1;
      
      if (pullingDistance < 120) {
        this.refreshingTxt = '下拉刷新'
      } else if (pullingDistance < 200) {
        this.refreshingTxt = '松开刷新'
      } else if (pullingDistance < 280) {
        this.refreshingTxt = '下拉悬停 | 松开刷新'
      } else {
        this.refreshingTxt = '松开悬停'
      }
      if (pullingDistance > 120 && Math.abs(dy) < 20)
        this.pullingDistance = pullingDistance
      
      // console.log(pullingDistance, dy);
    },
    onRefresh () {
      this.pullingDownCount = 0;
      let pullingDistance = this.pullingDistance
      // console.log(pullingDistance)
      if (this.pullingDistance < 120) {
        this.refreshing = false
        // console.log('下拉刷新');
      } else if (pullingDistance < 280) {
        this.pullingDownInterval = setInterval(() => {
          this.loadingR += 2;
        }, 8)
          // console.log(this.pullingDownInterval);
        this.refreshingTxt = '正在刷新'
        this.onRefreshing = true
        setTimeout(() => {
          this.refreshing = false
          this.onRefreshing = false
          
          clearInterval(this.pullingDownInterval);
        }, 1000);
      } else {
        this.refreshingTxt = '已悬停'
        this.refreshHeight = 350
      }
      this.loadingR = 0
      // console.log(this.pullingDownInterval)
    }, listScroll (e) {
      let {y, x} = e.contentOffset
      if (y < 0) {
          this.refreshing = false
      }
    },
    openBottomPopup () {
      this.isBottomShow = true;
    },
    changeClassify (i) {
      this.setClassify(i);
    },
    rightButtonClick () {
      this.pageTest.ref.showPage();
    }
  }
};
</script>
