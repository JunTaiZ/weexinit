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
      <slot name="button-1"></slot>
    </div>
  </div>
</template>
<style scoped>
.block {
  flex-direction: row;

}
.all-width {
  width: 100%;
}
.button-con {
  width: 100px;
  align-items: center;
  justify-content: center;
}
</style>
<script>
  const defaultInfo = 'please touch inside the block';
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
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
        console.log('click');
      },
      handleStart (e) {
        if (e.changedTouches.length >= 0) {
          this.startX = e.changedTouches[0].pageX
        }
        this.swipeTransition = {}
        this.buttonShow = true
      },
      handleEnd (e) {
        if (this.swipeWidth > 100) {
          this.swipeWidth = 100;
        } else {
          this.swipeWidth = 0;
          setTimeout(() => {
            this.buttonShow = false
          }, 500);
        }
        this.swipeTransition = {
          transition: 'transform 0.5s ease-in-out'
        }
        // console.log(this.swipeTransition)
        
      },
      handleMove (e) {
        console.log('move');
        this.showButton(e);
      },
      showButton (e) {
        // console.log(e.changedTouches[0]);
        if (e.changedTouches.length >= 0) {
          let { pageX } = e.changedTouches[0]
          let tran = pageX - this.startX;
          if (tran < 0) {
            this.swipeWidth = Math.abs(tran);
            console.log(-this.swipeWidth)
          }

        }
      },
    }
  }
</script>