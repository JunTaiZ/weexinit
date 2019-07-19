
let state = {
  indexOpacity: 1,
  tabIconFontTitles: [
    {
      title: '愿望清单',
      codePoint: '\ue7df',
      color: '#FF9900'
    },
    {
      title: '日程',
      codePoint: '\ue7f4',
      color: '#FF5000'
    },
    {
      title: '我的',
      codePoint: '\ue7ae',
      dot: true,
      color: '#FF0000'
    }
  ],
  tabIconFontStyles: {
    bgColor: '#FFFFFF',
    titleColor: '#666666',
    activeTitleColor: '#FF9900',
    activeBgColor: '#FFFFFF',
    isActiveTitleBold: true,
    width: 160,
    height: 115,
    fontSize: 22,
    textPaddingLeft: 10,
    textPaddingRight: 10,
    iconFontSize: 45,
    iconFontMarginBottom: 8,
    iconFontColor: '#666666',
    activeIconFontColor: '#FF9900',
    iconFontUrl: 'http://at.alicdn.com/t/font_1293485_w2ieztdbg8.ttf',
  }
}
let mutations = {
  increment (state) {
    state.count++
  },
  showSelectedTitle (state, payload) {
    state.tabIconFontTitles[payload.id].title = payload.title
  },
  setOpacity (state) {
    state.indexOpacity = 0;
  }
}
// console.log(state.tabIconFontTitles[0].title)
const tabConfig = {
  namespaced: true,
  state,
  mutations,
}

export default tabConfig