<template>
  <div class="page"
    v-if="isShow"
    :style="{
      'height': deviceHeight + 'px',
      'width': '750px',
      'top': top + 'px',
      'left': left + 'px',
      'transition-property': 'top, left',
      'transition-duration': duration + 'ms',
      'transition-timing-function': timingFun,
      'backgroundColor': backgroundColor
    }"
  >
    <slot></slot>
  </div>
</template>
<style scoped>
.page {
  position: fixed;
}
</style>
<script>
  import { Utils } from 'weex-ui'
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
    props: {
      position: {
        type: String,
        default: 'right',
      },
      duration: {
        type: Number,
        default: 500,
      },
      timingFun: {
        type: String,
        default: 'ease',
      },
      backgroundColor: {
        type: String,
        default: 'white',
      }
    },
    data: () => ({
      deviceWidth: 750,
      deviceHeight: 0,
      top: 0,
      left: 0,
      isShow: false
    }),
    computed: {
      
    },
    created () {

      this.deviceHeight = Utils.env.getPageHeight()
      // console.log(this.deviceWidth, this.deviceHeight)
      this.setPosition();
    },
    methods: {
      setPosition () {
        // console.log(this.position)
        if (this.position === 'left' || this.position === 'right') {
          this.top = 0;
          if (this.position === 'left') {
            this.left = -this.deviceWidth;
          } else {
            this.left = this.deviceWidth;
          }
        } else {
          this.left = 0;
          if (this.position === 'top') {
            this.top = -this.deviceHeight;
          } else {
            this.top = this.deviceHeight;
          }
        }
      },
      showPage () {
        this.isShow = true
        setTimeout(() => {  // setInterval 改成setTimeout
          this.top = 0;
          this.left = 0;
        }, 1)
        // console.log(this.top, this.left);
      },
      hidePage () {
        this.setPosition()
        setTimeout(() => {
          this.isShow = false
        }, this.duration)
      }
    }
  }
</script>