<template>
  <div class="card"
    @click="showDetail"
  >
    <div class="status-con">
      <text class="iconfont" :style="{'color': statusList[item.status].color}"
      >{{statusIcon[item.status]}}</text>
    </div>
    <div
      class="txt-con">
      <text class="title"
        :style="{'color': item.bgColor}"
      >{{item.dream}}</text>
      <text class="iconfont"></text>
      <text class="describe">{{item.describe}}</text>
    </div>
  </div>
</template>
<style scoped>
  .iconfont {
    font-family: iconfont;
    font-size: 35px;
  }
  .card {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* margin: 15px; */
    /* background-image: linear-gradient(to right, #FF9900, #CC0000); */
    background-color: white;
    /* border-radius: 25px; */
  }
  
  .status-con {
    width: 5%;
  }
  .txt-con {
    width: 83%;
    padding: 20px;
    padding-left: 0;
    padding-right: 0;
    margin-left: 20px;
    border-bottom-width: 0.5px;
    border-color: #EEE;
  }

  .title {
    padding: 10px;
    padding-left: 0;
    padding-right: 0;
    font-size: 30px;
    align-items: center;
    font-weight: 600;
    /* background: #FFAA00; */
    /* background-image: linear-gradient(to right, #FF9900, #CC0000); */
    /* border-top-left-radius: 25px; */
    /* border-top-right-radius: 25px; */
  }
  .describe {
    /* background: white; */
    color: #555;
    font-size: 28px;
    padding: 10px;
    padding-left: 0;
    padding-right: 0;
    /* border-bottom-right-radius: 25px; */
  }
</style>
<script>
  let navigator = weex.requireModule('navigator')
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
    props: ['item', 'itemStyle'],
    data: () => ({
      
    }),
    computed: {
      ...mapState('list', {
        statusIcon: 'statusIcon',
        statusList: 'statusList',
      })
    },
    created () {
      // console.log(this.itemStyle)
    },
    methods: {
      ...mapMutations('tab', [
        'setOpacity',
      ]),
      showDetail () {
        // console.log('item')
        // navigator.push({
        //   url: '/#/hello',
        //   animated: "true"
        // }, event => {
        //   console.log('callback: ', event)
        // })
          this.setOpacity();
        setTimeout(() => {
          this.$router.push('/hello')
        }, 100);
      } 
    }
  }
</script>