<template>
    <wxc-tab-bar
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="iconFont"
                :title-use-slot="true"
                wrap-bg-color="#f9f9f9"
                @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
      <div v-for="(tabTitle, i) in tabTitles" :ref="'tab_'+i" :slot="'tab-title-' + i" :key="i + '_tab'" class="tabCon">
        <text class="iconfont"
          :style="{
            'color': index === i ? tabTitle.color : tabStyles.titleColor, 
            'font-size': tabStyles.fontSize,
            'width': tabStyles.width,
            'height': tabStyles.height,
            'fontSize': tabStyles.iconFontSize + 'px',
          }"
        >{{tabTitle.codePoint}}</text>
        <text 
          :style="{
            'height': index === i ? '33px' : '0',
            'color': index === i ? tabTitle.color : tabStyles.titleColor, 
          }"
          class="title"
        >{{tabTitle.title}}</text>
      </div>
      
      <!-- 第一个页面内容-->
      <div class="item-container" :style="contentStyle">
        <List />
      </div>

      <!-- 第二个页面内容-->
      <div class="item-container" :style="contentStyle">
        <SwipeAction>
          <template v-slot:con><text>45</text></template>
          <template v-slot:button-1><text @click="consoleState">取消</text></template>
        </SwipeAction>
      </div>

      <!-- 第三个页面内容-->
      <div class="item-container" :style="contentStyle">
        <text class="iconfont">{{icon}}</text>
      </div>
    </wxc-tab-bar>
  
</template>

<style scoped>
  .index {
    transition: opacity 0.1s ease;
  }
  .iconfont {
    font-family: iconfont;
    color: red;
  }
  .item-container {
    width: 750px;
    /* background-color: #f2f3f4; */
    
    /* background-image: linear-gradient(to right, #FF9900, #CC0000); */
    /* align-items: center;
    justify-content: center; */
  }
  /* .item-container:before{
    content:'';
    position:absolute;
    top: 0;right: 0;left: 0;bottom: 0;
    background-image: linear-gradient(to right, #FF9900, #CC0000);
    filter:blur(5px);
  } */
  .tabCon {
    align-items: center;
    justify-content: center;
    
  }
  .title {
    transition: all 0.3s;
    font-size: 27px;
    font-weight: 600;
  }
</style>
<script>
  import List from '@/components/List.vue';
  import Test from '@/components/Test.vue'
  import HelloWorld from '@/components/HelloWorld'
  import SwipeAction from '@/components/SwipeAction'
  import { WxcTabBar, Utils } from 'weex-ui';
  import { mapState, mapMutations } from 'vuex'
  // https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js 
  // import Config from './configTab'
  const modal = weex.requireModule('modal')

  export default {
    components: { WxcTabBar, SwipeAction, List, Test, HelloWorld },
    data: () => ({
      index: 0,
      tabHeight: 50,
      icon: '\ue7fc'
    }),
    computed: {
      ...mapState('tab', {
        count: (state) => state.count,
        tabTitles: 'tabIconFontTitles',
        tabStyles: (state) => state.tabIconFontStyles,
        indexOpacity: 'indexOpacity',
      })
    },
    created () {
      this.initIconFont();
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this;
      // this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
      this.contentStyle = { height: (tabPageHeight) + 'px' };
      // console.log(`index${this.contentStyle.height}`);
    },
    methods: {
      // ...mapMutations('tab', [
      //   'setOpacity',
      // ]),
      consoleState () {
        
        let count = this
        console.log(count)
        modal.toast({
          message: 'count',
          duration: 1
        })
        // modal.toast({
          // message: count,
          // duration: 0.3
        // })
      },
      initIconFont () {
        // eslint-disable-next-line no-undef
        let domModule = weex.requireModule('dom')
        domModule.addRule('fontFace', {
          'fontFamily': 'iconfont',
          'src': `url(${this.tabStyles.iconFontUrl})`
        })
      },
      wxcTabBarCurrentTabSelected (e) {
        const index = e.page;
        this.index = index;
        // this.$store.commit('tab/increment')
        // 选中的标签展示title没选中的不展示
        // let title = ['首页', '愿望清单', '我的']
          
        
        // for (let i = 0; i < this.tabTitles.length; i++) {
        //   if (index === i) {
        //     this.showSelectedTitle({ id: i, title: title[i]})
        //   } else {
        //     this.showSelectedTitle({ id: i, title: ''})
        //   }
        // }


        // alert(index)
        // console.log(index);
      }
    }
  };
</script>