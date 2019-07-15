<template>
  <list :style="contentStyle">
    <cell class="important">
      <Item :item="list[0]" />
    </cell>
    <header class="header">
      <div class="searchbar">
        <text class="iconfont search">&#xe66f;</text>
        <input type="text" class="input-txt" placeholder="输入关键字" />
      </div>
      <text class="help iconfont">&#xe7fe;</text>
    </header>
    <cell  v-for="(item, i) in list" :key="i + 'list'">
      <Item :item="item" :item-style="`rgb(${(i+200)*10%256}, ${(i*10+25)*5%256}, ${i*10%256})`" />
    </cell>
  </list>
</template>

<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .important {
    background-image: linear-gradient(to right, #FF9900, #CC0000);
  }
  .input-txt {
    outline: none;
    color: #333;
    font-size: 28px;
    padding-left: 8px;
    padding-right: 8px;
  }
  .header {
    background-image: linear-gradient(to right, #FF9900, #CC0000);
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .header-title {
    font-size: 36px;
    color: white;
  }
  .help {
    color: white;
    font-size: 30px;
  }
  .search {
    font-size: 40px;
    color: #333;
  }
  .searchbar {
    width: 90%;
    background: white;
    font-size: 30px;
    border-radius: 50px;
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    align-items: center;
  }
  /* .stickHead {
    position: fixed;
    top: 0;
    z-index: 2;
  } */
</style>
<script>
  // https://github.com/alibaba/weex-ui/blob/master/example/tab-bar/config.js 
  import Item from './list/Item'
  import { Utils } from 'weex-ui'
  import { mapState, mapMutations } from 'vuex'

  export default {
    components: { Item, },
    data: () => ({
      searchbarStyle: {
        background: 'red',
      },
      contentStyle: {
        height: '',
        // paddingBottom: '15px'
      }
    }),
    computed: {
      ...mapState('tab', {
        count: (state) => state.count,
        tabTitles: (state) => state.tabIconFontTitles,
        tabStyles: (state) => state.tabIconFontStyles,
      }),
      ...mapState('list', {
        list: (state) => state.list
      })
    },
    created () {
      const tabPageHeight = Utils.env.getPageHeight();
      // 如果页面没有导航栏，可以用下面这个计算高度的方法
      // const tabPageHeight = env.deviceHeight / env.deviceWidth * 750;
      // console.log(this.contentStyle)
      const { tabStyles } = this;
      this.contentStyle.height = (tabPageHeight - tabStyles.height) + 'px';
      // console.log(`index${this.contentStyle.height}`);
    },
    methods: {
      wxcSearchbarInputOnFocus () {
      },
      wxcSearchbarInputOnBlur () {
      },
      wxcSearchbarInputReturned (){
      },
      wxcSearchbarCloseClicked () {
      },
      wxcSearchbarInputOnInput (e) {
        this.value = e.value;
      },
      wxcSearchbarCancelClicked () {
      },
      wxcSearchbarInputDisabledClicked () {
      },
      wxcSearchbarDepChooseClicked () {
      }
    }
  };
</script>
