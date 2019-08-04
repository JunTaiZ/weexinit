<template>
  <div class="content"
    :style="conStyle"
    @panstart="touchStart"
    @swipe="swipeLeft"
  >
  </div>
</template>
<style scoped>
.iconfont {
  font-family: iconfont;
}
.content {
  background-color: white;
}
</style>
<script>
  import { WxcMinibar } from 'weex-ui';
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
    components: { 
      WxcMinibar
    },
    data: () => ({
      conStyle: {
        height: 0,
        width: 0,
        top: 0,
      },
      touchStartX: 200,
    }),
    computed: {
      ...mapState('list', {
        statusIcon: 'statusIcon',
        statusList: 'statusList',
      }),
      ...mapState('pageConfig', [
        'contentHeight',
        'minibarTodo',
        'pageTodo'
      ])
    },
    created () {
      this.conStyle.height = this.contentHeight / 2 + 'px';
      this.conStyle.width = 750 + 'px';
      this.conStyle.top = this.contentHeight / 2 + 'px';
    },
    methods: {
      pageHide () {
        this.pageTodo.ref.hidePage();
      },
      minibarLeftButtonClick () {
        this.pageHide();
      },
      minibarRightButtonClick () {
        
      },
      swipeLeft (e) {
        // console.log(e.changedTouches[0]);
        if (e.direction === 'right' && this.touchStartX < 100) {
          this.pageHide();
        }
      },
      touchStart (e) {
          let {pageX} = e.changedTouches[0]
          this.touchStartX = pageX
          // console.log(pageX)
      },
    }
  }
</script>