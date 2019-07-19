<template>
  <div class="vertical ">
    <list
      @scroll="listScroll"
      :style="contentStyle">
      
      

      <cell  v-for="(item, i) in getListBySC" :key="i + 'list'">
        <Item :item="item" />
      </cell>
      
    </list>
    <div class="header">
        <div @click="openBottomPopup" class="status-bar">
          <text
            class="select-txt iconfont"
            :style="{'color': statusList[status].color}"
          >{{statusIcon[status]}}</text>
          <text class="more-icon iconfont"
            :style="{
              'transform': isBottomShow ? 'rotateX(180deg)' : 'rotateX(0deg)'
            }"
          >&#xe7ee;</text>
        </div>
        <div class="classify-con">
        
          <text :class="['classify-back', classify === 1 ? 'classify-s' : 'classify-uns']"></text>
          <text
            @click="changeClassify(0)"
            :class="['classify', classify === 0 ? 'active-c' : 'active-unc']"
          >hello</text>
          <text
            @click="changeClassify(1)"
            :class="['classify', classify === 1 ? 'active-c' : 'active-unc']"
          >hel</text>
        </div>
          
      </div>
    <wxc-popup popup-color="white"
            :show="isBottomShow"
            @wxcPopupOverlayClicked="popupOverlayBottomClick"
            pos="top"
            height="450"
            :animation="{timingFunction: 'ease-out'}">
      <div class="popup-con">
        <div class="status" v-for="status in statusList" 
          :key="status.status+'_status'"
          @click="changeStatus(status.status)"
        >
          <text
            class="select-txt iconfont"
            :style="{'color': status.color}"
          >{{status.statusIcon}}</text>
          <text class="status-txt">{{status.statusName}}</text>
        </div>
      </div>
    </wxc-popup>
    
  </div>
</template>

<style scoped>
.indicator-text {
  color: #888888;
  font-size: 42px;
  text-align: center;
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
  transition: transform 0.5s ease-out;
}

.classify-con {
  width: 40%;
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
  height: 450px;
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
  /* background-image: linear-gradient(to right, #FFAA22, #CC2200); */
  width: 750px;
  position: fixed;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
  border-bottom-width: 0.5px;
  border-color: #eee;
}
.header-title {
  font-size: 36px;
  color: white;
}
.select-txt {
  transition: color 0.5s ease;
  /* color: #666; */
  font-size: 40px;
  margin-right: 15px;
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
  width: 90%;
  height: 20%;
  flex-direction: row;
  align-items: center;
}
.status-bar {
  height: 25%;
  flex-direction: row;
  align-items: center;
}
.status-txt {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 200px;
  margin-right: 35px;
  font-size: 35px;
  border-bottom-width: 0.5px;
  border-color: #eee;
}
.top {
  /* z-index: 2; */
  /* transform: translateZ(200px); */
}
/* .stickHead {
    position: fixed;
    top: 0;
    z-index: 2;
  } */
</style>
<script>
// <text class="status-txt">{{status | statusFilter}}</text>

// <cell class="important">
//       <text class="cheer">给自己写一句加油打气的话</text>
//       <!-- <text class="iconfont">&#xe642;</text> -->
//     </cell>

// <div class="searchbar">
//         <text class="iconfont search">&#xe66f;</text>
//         <input type="text" class="input-txt" placeholder="输入关键字" />
//       </div>
// https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js
import Item from "./list/Item";
import SwipeAction from "./SwipeAction";
import { Utils, WxcPopup, WxcSwipeAction } from "weex-ui";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  components: { Item, WxcPopup, SwipeAction },
  data: () => ({
    searchbarStyle: {
      background: "red"
    },
    contentStyle: {
      height: "",
      paddingTop: '90px'
    },
    isBottomShow: false

    // statusIcon: '\ue844',
  }),
  filters: {},
  computed: {
    ...mapState("tab", {
      count: state => state.count,
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
    this.contentStyle.height = tabPageHeight - tabStyles.height + "px";
    // this.contentStyle.height = (tabPageHeight) + 'px';
    console.log(this.popupZindex);
  },
  methods: {
    ...mapMutations("list", {
      setClassify: "setClassify",
      setStatus: "setStatus",
      setPopupZ: "setPopupZ"
    }),
    changeStatus(status) {
      this.setStatus(status);
      this.isBottomShow = false;
    },
    popupOverlayBottomClick() {
      this.isBottomShow = false;
      this.setPopupZ();
    },
    listScroll(e) {
      // console.log(e.contentOffset);
    },
    openBottomPopup() {
      this.isBottomShow = true;
    },
    changeClassify(i) {
      this.setClassify(i);
    },
    onTest(node, i) {
      modal.toast({
        message: node.title,
        duration: 0.3
      });
    }
  }
};
</script>
