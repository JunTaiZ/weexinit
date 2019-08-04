<template>
    <div class="app">
      
      
      <!-- 第一个页面内容 -->
      <div class="item-container pageIndex" :style="contentStyle">
        <page-index />
      </div>

      <!-- 第二个页面内容 清单详细内容 -->
      <weex-page
        ref="page"
        position="right"
        backgroundColor="white"
        :duration="300"
        timingFun="ease-in"
      >
        <page-detail />
      </weex-page>

      <!-- 第三个页面 编辑dolist -->
      <weex-page
        ref="pageTodo"
        position="bottom"
        backgroundColor="rgba(0, 0, 0, 0.6)"
        :duration="300"
        timingFun="ease-in"
      >
        <page-todo />
      </weex-page>
      <!-- <div class="item-container pageMine">
          
      </div> -->
      
    </div>
  
</template>

<style scoped>
  /* .add {
    position: fixed;
    top: 20px;
    left: 20px;
  } */
  .app {
    flex-direction: row;
  }
  .page-top {
    position: fixed;
    top: 0;
    left: 760px;
  }
  .index {
    transition: opacity 0.1s ease;
  }
  .iconfont {
    font-family: iconfont;
    color: red;
  }
  .item-container {
    transition: left 0.3s ease-out;
    width: 750px;
    background-color: white;
    
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
  import PageIndex from '@/components/PageIndex.vue';
  import Test from '@/components/Test.vue'
  import HelloWorld from '@/components/HelloWorld'
  import PageDetail from '@/components/PageDetail'
  // import WeexPage from '@/components/common/WeexPage'
  import PageTodo from '@/components/PageTodo'
  import { WeexPage } from 'weex-lui'
  import { WxcPopup, Utils } from 'weex-ui';
  
  import { mapState, mapMutations } from 'vuex'
  // https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js 
  // import Config from './configTab'
  const modal = weex.requireModule('modal')
  // const instanceWrap = weex.requireModule('instanceWrap')
  // instanceWrap.error(errorType, errorCode, message)
  export default {
    components: { WxcPopup, 
      PageIndex, Test, HelloWorld,
      PageDetail,
      WeexPage,
      PageTodo,
    },
    data: () => ({
      index: 0,
      tabHeight: 50,
      icon: '\ue7fc',
      isPopupShow: false,
    }),
    computed: {
      ...mapState('tab', {
        count: (state) => state.count,
        tabTitles: 'tabIconFontTitles',
        tabStyles: (state) => state.tabIconFontStyles,
        indexOpacity: 'indexOpacity',
      }),
      ...mapState('pageConfig', [
        'pageDetail',
        'contentHeight',
      ])
    },
    created () {
      this.initIconFont();
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      const { tabStyles } = this;
      // this.contentStyle = { height: (tabPageHeight - tabStyles.height) + 'px' };
      this.contentStyle = { height: (tabPageHeight) + 'px' };
      this.setContentHeight(tabPageHeight)
    },
    methods: {
      ...mapMutations('pageConfig', [
        'setContentHeight',
        'setPageRef'
      ]),
      popupOverlayClick () {
        this.isPopupShow = true
      },
      consoleState () {
        
        let count = this
        // console.log(count)
        modal.toast({
          message: 'count',
          duration: 1
        })
        // modal.toast({
          // message: count,
          // duration: 0.3
        // })
      },
      initIconFont () {  // 使用iconfont的初始化代码
        // eslint-disable-next-line no-undef
        let domModule = weex.requireModule('dom')
        domModule.addRule('fontFace', {
          'fontFamily': 'iconfont',
          'src': `url(${this.tabStyles.iconFontUrl})`
        })
      },
      showAnotherPage () {
        this.$refs.page.showPage()
      }
    },
    mounted () {
      // console.log(this.$refs.page)
      this.setPageRef({
        page: 'pageDetail',
        ref: this.$refs.page
      })
      this.setPageRef({
        page: 'pageTodo',
        ref: this.$refs.pageTodo
      })
    }
  };
</script>