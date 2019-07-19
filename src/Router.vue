<template>
  <div class="vertical ">
      <router-view />
  </div>
</template>
<style scoped>
  
</style>
<script>
  import { mapState, mapMutations, mapGetters } from 'vuex'
  export default {
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
      
    }
  }
</script>