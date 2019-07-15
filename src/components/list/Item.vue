<template>
  <div class="card" :style="{'background': itemStyle}">
    <text class="title">{{item.dream}}</text>
    <text class="describe">{{item.describe}}</text>
  </div>
</template>
<style scoped>
  .card {
    /* background-color: white; */
    /* margin: 15px; */
    margin-bottom: 0;
    /* background-image: linear-gradient(to right, #FF9900, #CC0000); */
    /* border-radius: 25px; */
  }
  
  .title {
    padding: 15px;
    color: black;
    /* background: #FFAA00; */
    /* background-image: linear-gradient(to right, #FF9900, #CC0000); */
    /* border-top-left-radius: 25px; */
    /* border-top-right-radius: 25px; */
  }
  .describe {
    /* background: white; */
    color: #333;
    padding: 10px;
    /* border-bottom-right-radius: 25px; */
  }
</style>
<script>
  export default {
    props: ['item', 'itemStyle'],
    data: () => ({
      
    }),
    computed: {
      
    },
    created () {
      console.log(this.itemStyle)
    },
    methods: {
      
    }
  }
</script>