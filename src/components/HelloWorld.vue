<template>
  <text ref="ref1" class="message">Now, let's use Vue.js to build your Weex app.</text>
</template>
<script>
  let animation = weex.requireModule('animation');
  let modal = weex.requireModule('modal')
  export default {
    data: () => ({
      
    }),
    computed: {
      
    },
    created () {
      
    },
    methods: {
      
    },
    mounted () {
      let ref1 = this.$refs.ref1;
      console.log(ref1)
      setTimeout(() => {
        animation.transition(ref1, {
        styles: {
            backgroundColor: '#FF0000',
            transform: 'translateX(-700px)',
        },
        duration: 200, //ms
        timingFunction: 'ease-out',
        needLayout:false,
        delay: 0 //ms
      }, function () {
        modal.toast({ message: 'animation finished.' })
      })
      }, 5);
    }
  }
</script>
<style scoped>
.message {
  background-color: #00FF00;
  top: 0;
  left: 700px;
}
</style>