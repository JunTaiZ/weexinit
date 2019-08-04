<template>
  <div class="block" 
    @click="handleClick"
    @touchstart="handleStart" 
    @touchend="handleEnd" 
    @touchmove="handleMove"
  >
    <div class="all-width"
      :style="[{
        'transform': `translateX(${-swipeWidth}px)`
      }, swipeTransition]"
    >
      <slot name="con"></slot>
    </div>
    <div class="button-con" 
      :style="[{
        'transform': `translateX(${-swipeWidth}px)`
      }, swipeTransition]"
      v-if="buttonShow"
    >
      <slot name="button-1"
        @click="clickButton"
        ref="btn"><text>取消</text></slot>
      <slot name="button-2"
        ref="btn"><text></text></slot>
      <slot name="button-3"
        ref="btn"><text></text></slot>
    </div>
  </div>
</template>
<style scoped>
.block {
  flex-direction: row;
  width: 100%;
}
.all-width {
  width: 100%;
}
.button-con {
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
<script>
  const defaultInfo = 'please touch inside the block';
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
    props: ['btnLength', 'isSwipe'],
    data: () => ({
      gesToken: '',
      info: defaultInfo,
      startX: 0,
      swipeWidth: 0,
      swipeTransition: {},
      buttonShow: false,
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
      handleClick () {
        // console.log('click');
        this.swipeWidth = 0
      },
      handleStart (e) {
        if (e.changedTouches.length >= 0) {
          this.startX = e.changedTouches[0].pageX
        }
        this.buttonShow = true
      },
      handleEnd (e) {
        if (this.swipeWidth > 150) {
          
          this.swipeWidth = 100 * this.btnLength;
        } else {
          this.swipeWidth = 0;
          setTimeout(() => {
            this.buttonShow = false
          }, 300);
        }
        this.swipeTransition = {
          transition: 'transform 0.3s ease-in-out'
        }
        // console.log(this.swipeTransition)
        
      },
      handleMove (e) {
        // console.log('move');
        this.showButton(e);
      },
      showButton (e) {
        
        this.swipeTransition = {}
        // console.log(e.changedTouches[0]);
        if (e.changedTouches.length >= 0) {
          let { pageX } = e.changedTouches[0]
          let tran = pageX - this.startX;
          if (tran < 0) {
            this.swipeWidth = Math.abs(tran);
            // console.log(-this.swipeWidth)
          }

        }
      },
    }
  }
</script>