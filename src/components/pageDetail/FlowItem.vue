<template>
  <div class="flow-item"
    @click="openChangeMask"
  >
    <div class="line_dot">
      
      <div :class="[dotComClass, 'dot']">
        <text class="iconfont dot-status"
          v-if="item.status === 2"
        >&#xe7fc;</text>
      </div>
      <!-- <div
        v-if="length - 1 !== index"
        :class="[item.status === 0 ? 'un-line' : 'act-line', 'line']"
      >
          
      </div> -->
    </div>
    <swipe-action
      :btn-length="2"
      :swipe-bool="swipeBool"
    >
      <template class="item" v-slot:con>
        <div class="title-con"
        >
          <text
            class="title"
            :style="getDolistStyle(item.status)"
          >{{item.title}}</text>
          <text v-if="item.desc.length > 0"
            class="desc"
          >{{item.desc}}</text>
          <text
            class="begin"
          >begin: {{item.begindate}}</text>
          <text v-if="item.finishdate.length > 0"
            class="end"
          >end: {{item.finishdate}}</text>
        </div>
      </template>
      <template class="btn-1" v-slot:button-1>
        <text ref="btn" class="iconfont"
          @click="btnClick"
        >&#xe7c3;</text>
      </template>
      <template class="btn-2" v-slot:button-2>
        <text ref="btn" class="iconfont">&#xe7c3;</text>
      </template>
    </swipe-action>
  </div>
</template>
<style scoped>
.line_dot {
  align-items: center;
  width: 40px;
}
.line {
  top: 32px;
  /* z-index: -1; */
  height: 170px;
}
.un-line { /* 项目未开始时，线的样式 */
  position: absolute;
  outline-style: dashed;
  outline-color: #CCC;
  outline-width: 3px;
  width: 0;
  /* background-color: #ccc; */
  /* top: 50%; */
}
.act-line {
  position: absolute;
  width: 6px;
  /* top: 50%; */
  background-color: #FF8800;
}
.title-con {
  background-color: white;
  /* z-index: 3; */
  padding-left: 0.55rem;
  padding-right: 0.55rem;
}
.dot {
  top: 12%;
  /* z-index: 2; */
}
.un-dot {
  width: 25px;
  height: 25px;
  background-color: #ccc;
  border-radius: 50%;
}
.act-dot {
  width: 25px;
  height: 25px;
  border-color: #FFCC33;
  border-width: 4px;
  /* top: 13%; */
  background-color: #FF8800;
  border-radius: 50%;
}
.done-dot {
  width: 22px;
  height: 22px;
  /* top: 13%; */
  background-color: white;
  border-color: #FFCC33;
  border-width: 8px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}
.dot-status {
  color: white;
  font-size: 20px;
}
.title {
  padding-top: 5px;
  padding-bottom: 5px;
  outline: none;
}
.desc {
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 28px;
  color: #777;
  outline: none;
}
.begin {
  font-size: 26px;
  color: #777;
}
.end {
  font-size: 26px;
  color: #777;
}

.iconfont {
  font-family: iconfont;
}
.flow-item {
  height: 130px;
  margin-top: 50px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 0.55rem;
  padding-right: 0.55rem;
}
</style>
<script>
  import SwipeAction from '../common/SwipeAction'
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
    props: ['item', 'length', 'currentListDream',
      'index', 
    ],
    components: {
      SwipeAction,
    },
    data: () => ({
      swipeBool: true
    }),
    computed: {
      ...mapState('list', {
        statusIcon: 'statusIcon',
        statusList: 'statusList',
        currentList: 'currentList',
      }),
      ...mapState('pageConfig', [
        'dolistItemAct',
        'dolistItemUAct',
        'dolistItemDone',
        'pageDetailMask'
      ]),
      ...mapGetters('pageConfig', [
        'getDolistStyle'
      ]),
      dotComClass: function () {
        let status = this.item.status
        if (status === 0) {
          return 'un-dot'
        } else if (status === 1) {
          return 'act-dot'
        } else {
          return 'done-dot'
        }
      }
    },
    created () {
    },
    methods: {
      ...mapMutations('pageConfig', [
        // 'getDolistStyle'
        'setDetailMaskShow',
      ]),
      ...mapMutations('list', [
        'deleteDolistByKey',
        'setCurrentTodoItem',
      ]),
      openChangeMask () {
        // console.log('web click');
        let item = Object.assign({}, this.item) // 解除双向绑定
        this.setCurrentTodoItem({
          item,
        })
        this.$emit('showMask')
        
      },
      btnClick () {
        this.swipeBool = false
        this.deleteDolistByKey({
          dream: this.currentList.dream,
          createdate: this.item.createdate
        })
      }
    }
  }
</script>