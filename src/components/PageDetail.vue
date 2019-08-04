<template>
  <div class="vertical">
    
    <wxc-minibar
      @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
      @wxcMinibarRightButtonClicked="minibarRightButtonClick"
      :use-default-return="false"
      :bar-style="minibarDetail"
      title=""
    >
      <text
        class="iconfont minibar-left" 
        slot="left"
      >&#xe7ec;</text>
      <text
        class="iconfont minibar-right"
        slot="right"
      >&#xe749;</text>
    </wxc-minibar>
    <list class="detail"
      :style="{
        'height': (this.contentHeight - 90) + 'px'
      }"
      @panstart="touchStart"
      @swipe="swipeLeft">
      <cell class="title-con"
      >
        <div class="title"
          :style="{
            'backgroundColor': minibarDetail.backgroundColor
          }"
        >
          <input type="text"
            :style="{
              'backgroundColor': minibarDetail.backgroundColor
            }"
            class="input-text"
            :autofocus="false"
            placeholder="请输入你的愿望"
            v-model="currentList.dream">
          </input>
          <text class="status"
            :style="{
              'color': statusItem.color
            }"
          >{{statusItem.statusName}}</text>
        </div>
        <textarea
          class="textarea"
          type="text"
          :autofocus="false"
          placeholder="请输入对愿望的详细描述"
          v-model="currentList.describe">
        </textarea>
        <div class="select-classify"
          @click="showPopover"
        >
          <text class="iconfont classify-icon">&#xe625;</text>
          <text class="classify">{{currentList.classify === 0 ? '精神' : '物质'}}</text>
        </div> 
        <wxc-popover ref="wxc-popover"
                :buttons="btns"
                :position="popoverPosition"
                :arrowPosition="popoverArrowPosition"
                @wxcPopoverButtonClicked="popoverButtonClicked"></wxc-popover>
        
        
      </cell>
      <cell class="do-list">
        <Flow
          @openMask="openMask('change')"
          :do-list="currentList.dolist" />
      </cell>
    </list>
    
    <div class="add"
      @click="showAddTodo"
      v-if="!isBottomShow"
    >
      <text class="iconfont add-icon"
      >&#xe849;</text>
    </div>
    <wxc-popup popup-color="white"
            ref="wxcPopupBottom"
            :show="isBottomShow"
            @wxcPopupOverlayClicked="popupOverlayBottomClick"
            pos="bottom"
            :height="contentHeight / 2"
            :animation="{timingFunction: 'ease-out'}"
            :overlay-cfg="{
              'opacity': 0.7
            }"
    >
      <div class="content">
        <div class="todo-classify">
          <text class="classify-title">{{pageDetailMask.title}}</text>
        </div>
        <div class="todo-item">
          <div class="item-title">
            <text class="title-txt">事项: </text>
            <input
               class="input-txt"
              :require="true"
               type="text"
              :autofocus="true"
               placeholder="填写清单事项"
               v-model="newTodoItem.title">
            </input>
            
          </div>
          <div class="begin-date">
            <text class="begin-txt">日期: </text>
            <text class="begindate"
              @click="pickDate"
            >{{newTodoItem.begindate.length > 0 ? newTodoItem.begindate : '选择开始日期'}}</text>
            <!-- <input
               type="date"
               autofocus=""
               v-model="classify === 'add' ? newTodoItem.desc : currentTodoItem.desc"
              @change="changeDate"   
            >
            </input> -->
          </div>
          <div class="begin-section">
            <text class="begin-txt">区间: </text>
            <text class="beginsection"
              @click="pickSection"
            >{{newTodoItem.section > -1 ? 
            this.sectionItems[newTodoItem.section] : '选择区间'}}</text>
            
          </div>
          <div class="describe">
            <text class="describe-txt">描述: </text>
            <textarea
               class="desc-textarea"
               type="text"
               autofocus=""
               placeholder="填写该事项的具体描述"
               v-model="newTodoItem.desc"
            >
            </textarea>
          </div>
        </div>
        
        <div class="ok-close">
          <text class="iconfont change-ok"
            @click="changeOk"
          >&#xe844;</text>
          <text class="iconfont close"
            @click="closeMask"
          >&#xe847;</text>
        </div>
      </div>
    </wxc-popup>
    
  </div>
</template>

<style lang="scss" scoped>
$gray: #333;
$light-gray: #555;
$fsH1: 40px;
$fsH2: 33px;
.content {
  height: 100%;
  padding: 50px;
  padding-bottom: 50px;
  .todo-classify {
    height: 15%;
    .classify-title {
      color: black;
      font-weight: 600;
      font-size: $fsH1;
    }
  }
  .todo-item {
    height: 65%;
    .item-title, .describe, .begin-date, .begin-section {
      flex-direction: row;
      align-items: center;
      padding: 25px;
      padding-bottom: 0;
    }
    
    .title-txt, .begin-txt, .describe-txt {
      font-weight: 600;
      color: $light-gray;
      font-size: $fsH2;
      margin-right: 20px;
    }
    .input-txt, .desc-textarea {
      placeholder-color: #BBB;
      outline: none;
      color: $gray;
      font-size: $fsH2;
    }
    .desc-textarea, .describe-txt {
      height: 100px;
    }
    .begindate, .beginsection {
      padding-top: 2px;
      font-size: $fsH2;
      color: $gray;
    }
  }
}

.ok-close {
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  height: 20%;
  .change-ok {
    width: 30%;
    font-size: 80px;
    color: #FFAA00;
    text-align: center;
  }
  .close {
    width: 30%;
    font-size: 70px;
    color: #555555;
    text-align: center;
  }
}

.add {
  height: 0;
  bottom: 150px;
  left: 600px;
  .add-icon {
    font-size: 80px;
    color: #FFAA00;
  }
}
.detail {
  height: 800px;
  .title-con {
    padding-left: 0.55rem;
    padding-right: 0.55rem;
    .title {
      width: 100%;
      padding-top: 15px;
      padding-bottom: 15px;
      flex-direction: row;
      justify-content: space-between;
      .input-text {
        outline: none;
        color: #222;
        font-size: 33px;
        width: 85%;
      }
      .status {
        font-size: 30px;
        width: 15%;
      }
    }
    .textarea {
      padding-bottom: 50px;
      padding-top: 5px;
      height: 105px;
      color: #555;
      font-size: 28px;
    }
    .select-classify {
      flex-direction: row;
      align-items: center;
      padding-top: 5px;
      padding-bottom: 5px;
      border-bottom-width: 0.3px;
      border-bottom-color: #EEE;
      .classify-icon {
        font-size: 32px;
        color: #555;
      }
      .classify {
        font-size: 30px;
        color: #555;
        padding-bottom: 3px;
        padding-left: 32px;
      }
    }
  }
}
.iconfont {
  font-family: iconfont;
}

.minibar-left {
  font-size: 33px;
  color: #333;
}
.minibar-middle {
  font-size: 34px;
  color: black;
}
.minibar-right {
  font-size: 33px;
  color: #333;
}


</style>
<script>
  import WeexPicker from '@weex-project/weex-picker'
  import Flow from './pageDetail/Flow'
  import { mapState, mapMutations, mapGetters } from 'vuex'
  import { WxcMinibar, WxcSimpleFlow, WxcPopover,
    WxcPopup,
  } from 'weex-ui'
  const modal = weex.requireModule('modal')
  const picker = weex.requireModule('picker')
  export default {
    components: { WxcMinibar, Flow, WxcSimpleFlow,
      WxcPopover,
      WxcPopup,
    },
    data: () => ({
      titleValue: '5',
      describeValue: '',
      newTodoItem: {
        createdate: '',
        begindate: '',
        section: -1,
        finishdate: '',
        desc: '',
        status: 0,
        title: 'hi',
      },
      initTodoItem: {
        createdate: '',
        begindate: '',
        section: -1,
        finishdate: '',
        desc: '',
        status: 0,
        title: '',
      },
      isBottomShow: false,
      touchStartX: 0,
      themeColor: {
        backgroundColor: 'white'
      },
      btns: [{
          text:'精神',
          key:'key-soul'
      }, {
        text:'物质',
        key:'key-metirial'
      }, ],
      classify: '',  // 分为添加清单事项和修改清单事项两类
      popoverPosition:{x: 20,y:310},
      popoverArrowPosition:{pos:'top',x:-40},
    }),
    computed: {
      cumpTitle: {
        get: function () {
          console.log(this.classify)
          return this.classify === 'add' ? 
          this.newTodoItem.title : 
          this.currentTodoItem.title;
        },
        set (newValue) {
          console.log(newValue, this.classify)
          if (this.classify === 'add') {
            this.newTodoItem.title = newValue;
            console.log(newValue)
          }
          else {
            this.currentTodoItem.title = newValue;
          }
        }
      },
      cumpDesc () {
        return this.classify === 'add' ? 
          this.newTodoItem.desc : this.currentTodoItem.desc;
      },
      cumpBeginDate () {
        let item = 'currentTodoItem'
        if (this.classify === 'add') {
          item = 'newTodoItem'
        }
        console.log(item)
        return this[item].begindate.length > 0 ? this[item].begindate : '选择开始日期'
      },
      cumpSection () {
        let item = 'currentTodoItem'
        if (this.classify === 'add') {
          item = 'newTodoItem'
        }
        return this[item].section > -1 ? 
        this.sectionItems[this[item].section] : '选择开始日期'
      },
      ...mapState('list', {
        statusIcon: 'statusIcon',
        statusList: 'statusList',
        sectionItems: 'sectionItems',
        currentList: 'currentList',
        currentTodoItem: 'currentTodoItem',
      }),
      ...mapState('pageConfig', {
        pageDetailMask: 'pageDetailMask',
        pageTodo: 'pageTodo',
        pageDetail: 'pageDetail',
        minibarDetail: 'minibarDetail',
        minibarStyle: 'minibar',
        minibarLeft: 'minibarLeft',
        minibarMiddle: 'minibarMiddle',
        minibarRight: 'minibarRight',
        contentHeight: 'contentHeight',
      }),
      statusItem () {
        return this.statusList[this.currentList.status]
      }
    },
    created () {
      // console.log(this.currentList.dolist)
    },
    mounted () {
      this.setPageRef({
        page: 'pageDetailMask',
        ref: this.$refs.wxcPopupBottom
      })
      // console.log(WxcPopover)
      // console.log(WeexPicker)
    },
    methods: {
      ...mapMutations('pageConfig', [
        'setPageRef',
        'setPageTitle'
      ]),
      ...mapMutations('list', [
        'setItemClassify',
        'setCurrentList',
        'setTodoItemByDream',
        'addTodoItemByDream',
      ]),
      changeDate () {
        console.log(this.newTodoItem.begindate)
      },
      pickDate () {
        picker.pickDate({
          value: this.newTodoItem.begindate
        }, event => {
          if (event.result === 'success') {
            this.newTodoItem.begindate = event.data
            // console.log(this.newTodoItem)
          }
        })
      },
      pickSection () {
        picker.pick({
          value: this.newTodoItem.section,
          items: this.sectionItems,
          selectionColor: '#FFAA00',
          textColor: '#555',
          title: '选择区间',
        }, event => {
          if (event.result === 'success') {
            this.newTodoItem.section = event.data
          }
        })
      },
      showPopover () {
        this.$refs['wxc-popover'].wxcPopoverShow();
      },
      popoverButtonClicked (obj) {
        let {key, index} = obj
        this.setItemClassify({
          key: this.currentList.key,
          value: index,
        })
      },
      pageReturn () {
        this.pageDetail.ref.hidePage()
      },
      minibarLeftButtonClick () {
        this.pageReturn()
        // console.log('leftButton')
      },
      swipeLeft (e) {
        // console.log(e.changedTouches[0]);
        if (e.direction === 'right' && this.touchStartX < 100) {
          this.pageReturn();
        }
      },
      touchStart (e) {
          let {pageX} = e.changedTouches[0]
          this.touchStartX = pageX
          // console.log(pageX)
      },
      minibarRightButtonClick () {
        // modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      },
      showAddTodo () {
        // this.pageTodo.ref.showPage();
        this.openMask('add');
      },
      // 弹出层相关函数
      openMask (classify) {
        // console.log(classify)
        // this.maskShow = true;
        // this.hasAnimation = true;
        this.classify = classify
        this.isBottomShow = true
        if (classify === 'add') {
          this.openAddMask()
        } else {
          this.openChangeMask()
        }
      },
      closeMask () {
        this.$refs.wxcPopupBottom.hide()
      },
      openChangeMask () {
        this.setPageTitle({
          page: 'pageDetailMask',
          title: '修改'
        })
        // console.log(this.currentTodoItem)
        this.newTodoItem = this.currentTodoItem
      },
      openAddMask () {
        this.setPageTitle({
          page: 'pageDetailMask',
          title: '添加'
        })
        this.newTodoItem = this.initTodoItem
      },
      changeTodoItem () {
        let dream = this.currentList.dream;

        this.setTodoItemByDream({
          dream,
          item: this.newTodoItem
        })
        this.closeMask()
      },
      addTodoItem () {
        if (this.newTodoItem.title.length !== 0) {
          let date = new Date();
          let localeDate = date.toLocaleDateString().split('/').join('-');
          let localeTime = date.toTimeString().split(' ')[0];
          // console.log(localeTime);
          // let locale = date.toLocaleString()
          // console.log(localeDate, localeTime)
          this.newTodoItem.createdate = localeDate+ ' '+localeTime;
          let dream = this.currentList.dream;
          
          this.addTodoItemByDream({
            dream: dream,
            item: this.newTodoItem
          })
          this.closeMask()
        } else {
          modal.toast({ 
            'message': '标题事项不能为空!', 
            'duration': 1 
          });
        }
      },
      wxcMaskSetHidden () {
        this.maskShow = false;
        console.log('set')
      },
      openNoAnimationMask (e) {
        this.maskShow = true;
        this.hasAnimation = false;
      },

      changeOk () {
        // console.log('addout');
        // console.log(this.classify);
        
        
        if (this.classify === 'add') {
          this.addTodoItem()
          // console.log('add')
        } else {
          this.changeTodoItem()
        }
        
      },
      popupOverlayBottomClick () {
        this.isBottomShow = false
      }
    }
  }
</script>