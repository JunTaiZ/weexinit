<template>
  <cell class="flow-con">
    <flow-item
      @showMask="showMask"
      v-for="(item, i) in doList" :item="item"
      :key="'flow-item-'+i"
      :length="doList.length"
      :index="i"
    />
    <div class="bottom">
      <text
        class="bottom-txt"
      >已到达底线~~</text>
    </div>
  </cell>
</template>
<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .flow-con {
    margin-bottom: 50px;
  }
  .bottom {
    /* padding-block-end: 20px; */
    padding-top: 50px;

  }
  .bottom-txt {
    text-align: center;
    color: #888;
  }
</style>
<script>
  import SwipeAction from '../common/SwipeAction'
  import FlowItem from './FlowItem'
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
    props: ['doList'],
    components: {
      SwipeAction,
      FlowItem,
    },
    data: () => ({
      
    }),
    computed: {
      ...mapState('list', {
        statusIcon: 'statusIcon',
        statusList: 'statusList',
      })
    },
    created () {
    },
    methods: {
      showMask () {
        // console.log('child');
        this.$emit('openMask')
        
      }
    }
  }
</script>