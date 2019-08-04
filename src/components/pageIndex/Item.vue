<template>
  <div class="card"
    @click="showDetail"
  >
    <div class="status-con">
      <text class="title"
      >{{item.dream}}</text>
      <text class="iconfont status-icon" 
        :style="{'color': statusList[item.status].color}"
      >{{statusIcon[item.status]}}</text>
      <text class="iconfont"></text>
    </div>
    <div class="txt-con">
      <text class="describe">{{item.describe}}</text>
    </div>
  </div>
</template>

        // 
<style scoped>
  .iconfont {
    font-family: iconfont;
  }
  .card {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 32px;
    /* height: 170px; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: 15px; */
    /* background-image: linear-gradient(to right, #FF9900, #CC0000); */
    background-color: white;
    /* border-radius: 25px; */
  }
  .status-icon {
    font-size: 35px;
  }
  .status-con {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .txt-con {
    width: 100%;
    padding: 20px;
    padding-left: 0;
    padding-right: 0;
    border-bottom-width: 0.5px;
    border-color: #EEE;
  }

  .title {
    width: 93%;
    padding-right: 0;
    font-size: 32px;
    align-items: center;
    /* background: #FFAA00; */
    /* background-image: linear-gradient(to right, #FF9900, #CC0000); */
    /* border-top-left-radius: 25px; */
    /* border-top-right-radius: 25px; */
  }
  .describe {
    /* background: white; */
    color: #555;
    font-size: 28px;
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
      }),
      ...mapState('pageConfig', [
        'pageDetail',
        'minibarDetail'
      ])
    },
    created () {
      // console.log(this.itemStyle)
    },
    methods: {
      sortBeginItem(a, b) { // 根据begin降序排序
        let int = 0
        let i
        for (i = 0; i < a.begindate.length && i < b.begindate.length; i++) {

          if (a.begindate[i] === b.begindate[i]) continue;
          else {
            int = b.begindate[i] - a.begindate[i]
          }
        }
        return int;
      },
      sortCreateItem(a, b) { // 根据begin降序排序
        let int = 0
        let i
        for (i = 0; i < a.createdate.length && i < b.createdate.length; i++) {

          if (a.createdate[i] === b.createdate[i]) continue;
          else {
            int = b.createdate[i] - a.createdate[i]
          }
        }
        return int;
      },
      ...mapMutations('pageConfig', [
        'setPageLeft',
      ]),
      ...mapMutations('list', [
        'setCurrentList',
        
      ]),
      showDetail () {
        let begin = this.item.dolist.filter((value) => {
          return value.begindate.length > 0;
        })
        let unBegin = this.item.dolist.filter((value) => {
          return value.begindate.length === 0;
        })
        // console.log(this.item.dolist)
        // console.log(unBegin)
        this.item.dolist = [
          ...(unBegin.sort(this.sortCreateItem)), 
          ...(begin.sort(this.sortBeginItem))
        ]
        // console.log(this.item.dolist.sort(this.sortBeginItem))
        // console.log('listitem:', this.item)
        this.setCurrentList({
          currentList: this.item
        })
        // console.log(this.item.dolist)
        // this.minibarDetail.backgroundColor = this.statusList[this.item.status].color
        // console.log('hi');
        this.pageDetail.ref.showPage();
      } 
    }
  }
</script>